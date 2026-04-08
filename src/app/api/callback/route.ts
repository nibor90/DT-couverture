import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/data";
import {
  createTransport,
  escapeHtml,
  formatFromHeader,
  getFromAddress,
  resolveTo,
} from "@/lib/smtp-mail";

export const runtime = "nodejs";

const NOM_MAX = 120;
const TEL_MAX = 40;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  if (body.rgpd !== true && body.rgpd !== "true") {
    return NextResponse.json(
      { error: "Veuillez accepter la politique de confidentialité." },
      { status: 400 },
    );
  }

  const nom = typeof body.nom === "string" ? body.nom.trim() : "";
  const telephone = typeof body.telephone === "string" ? body.telephone.trim() : "";

  if (!nom || !telephone) {
    return NextResponse.json(
      { error: "Nom et téléphone sont obligatoires." },
      { status: 400 },
    );
  }
  if (nom.length > NOM_MAX || telephone.length > TEL_MAX) {
    return NextResponse.json(
      { error: "Un champ dépasse la longueur autorisée." },
      { status: 400 },
    );
  }

  const transporter = createTransport();
  if (!transporter) {
    console.error("callback: SMTP non configuré");
    return NextResponse.json(
      { error: "L’envoi est temporairement indisponible." },
      { status: 503 },
    );
  }

  const fromAddr = getFromAddress();
  if (!fromAddr) {
    console.error("callback: SMTP_FROM / SMTP_USER vides");
    return NextResponse.json(
      { error: "L’envoi est temporairement indisponible." },
      { status: 503 },
    );
  }

  const to = resolveTo();
  const from = formatFromHeader();
  const subject = `[${siteConfig.name}] Rappel gratuit demandé — ${nom}`;

  const text = `
Demande de rappel téléphonique — ${siteConfig.name}

Nom : ${nom}
Téléphone : ${telephone}

(Source : bandeau « Faites-vous rappeler » sur le site)
`.trim();

  const html = `
<h2>Demande de rappel téléphonique</h2>
<p>
<strong>Nom :</strong> ${escapeHtml(nom)}<br/>
<strong>Téléphone :</strong> ${escapeHtml(telephone)}
</p>
<p style="color:#666;font-size:0.9em">Source : bandeau « Faites-vous rappeler » sur le site.</p>
`;

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("callback: sendMail", detail, err);
    return NextResponse.json(
      { error: "L’envoi a échoué. Réessayez plus tard." },
      { status: 502 },
    );
  }

  console.info("callback: mail envoyé");
  return NextResponse.json({ ok: true });
}
