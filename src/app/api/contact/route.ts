import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/data";

export const runtime = "nodejs";

const LIMITS = {
  prenom: 80,
  nom: 80,
  email: 120,
  tel: 40,
  ville: 120,
  service: 80,
  message: 8000,
} as const;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function smtpPassword(): string | undefined {
  return (
    process.env.SMTP_PASS?.trim() || process.env.SMTP_PASSWORD?.trim() || undefined
  );
}

function createTransport() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = smtpPassword();
  if (!host || !user || !pass) return null;

  const port =
    parseInt(String(process.env.SMTP_PORT ?? "465").trim(), 10) || 465;
  const secure = port === 465;

  const debug = process.env.SMTP_DEBUG === "1";

  // Infomaniak / Vercel : 465 (SSL) par défaut ; surcharger avec SMTP_PORT=587 si besoin.
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 25_000,
    greetingTimeout: 25_000,
    socketTimeout: 30_000,
    ...(debug ? { debug: true, logger: true } : {}),
  });
}

/**
 * Destinataires : RECEIVER_EMAIL (Vercel) ou CONTACT_EMAIL_TO (ancien nom), sinon SMTP_USER, sinon contact du site.
 */
function resolveTo(): string {
  const explicit = (
    process.env.RECEIVER_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL_TO?.trim() ||
    ""
  );
  const raw =
    explicit.length > 0
      ? explicit
      : (process.env.SMTP_USER?.trim() || siteConfig.email);
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(", ");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  if (body.rgpd !== true && body.rgpd !== "true") {
    return NextResponse.json({ error: "Vous devez accepter la politique de confidentialité." }, { status: 400 });
  }

  const prenom = typeof body.prenom === "string" ? body.prenom.trim() : "";
  const nom = typeof body.nom === "string" ? body.nom.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const tel = typeof body.tel === "string" ? body.tel.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const ville = typeof body.ville === "string" ? body.ville.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const required = { prenom, nom, email, tel, message } as const;
  for (const key of Object.keys(required) as (keyof typeof required)[]) {
    if (!required[key]) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis." }, { status: 400 });
    }
    if (required[key].length > LIMITS[key]) {
      return NextResponse.json({ error: "Un champ dépasse la longueur autorisée." }, { status: 400 });
    }
  }
  if (service.length > LIMITS.service || ville.length > LIMITS.ville) {
    return NextResponse.json({ error: "Un champ dépasse la longueur autorisée." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  const transporter = createTransport();
  if (!transporter) {
    console.error("contact: SMTP_HOST / SMTP_USER / SMTP_PASS (ou SMTP_PASSWORD) manquants");
    return NextResponse.json(
      { error: "L’envoi des messages est temporairement indisponible." },
      { status: 503 },
    );
  }

  const fromAddr = (process.env.SMTP_FROM || process.env.SMTP_USER || "").trim();
  const to = resolveTo();

  if (!fromAddr) {
    console.error("contact: SMTP_FROM et SMTP_USER vides");
    return NextResponse.json(
      { error: "L’envoi des messages est temporairement indisponible." },
      { status: 503 },
    );
  }

  const text = `
Nouvelle demande de contact — ${siteConfig.name}

Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Téléphone : ${tel}
Type de prestation : ${service || "—"}
Ville / code postal : ${ville || "—"}

Message :
${message}
`.trim();

  const html = `
<h2>Nouvelle demande de contact</h2>
<p>
<strong>Prénom :</strong> ${escapeHtml(prenom)}<br/>
<strong>Nom :</strong> ${escapeHtml(nom)}<br/>
<strong>Email :</strong> ${escapeHtml(email)}<br/>
<strong>Téléphone :</strong> ${escapeHtml(tel)}<br/>
<strong>Prestation :</strong> ${escapeHtml(service || "—")}<br/>
<strong>Ville / CP :</strong> ${escapeHtml(ville || "—")}
</p>
<p><strong>Message :</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
`;

  const from = `"${siteConfig.name.replace(/"/g, "")}" <${fromAddr}>`;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[${siteConfig.name}] Devis — ${prenom} ${nom}`,
      text,
      html,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("contact: sendMail", detail, err);
    return NextResponse.json({ error: "L’envoi a échoué. Réessayez plus tard." }, { status: 502 });
  }

  console.info("contact: mail envoyé (vérifier boîte + indésirables)");
  return NextResponse.json({ ok: true });
}
