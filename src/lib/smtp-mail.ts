import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/data";

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function smtpPassword(): string | undefined {
  return (
    process.env.SMTP_PASS?.trim() || process.env.SMTP_PASSWORD?.trim() || undefined
  );
}

export function createTransport() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = smtpPassword();
  if (!host || !user || !pass) return null;

  const port =
    parseInt(String(process.env.SMTP_PORT ?? "465").trim(), 10) || 465;
  const secure = port === 465;
  const debug = process.env.SMTP_DEBUG === "1";

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

export function resolveTo(): string {
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

export function getFromAddress(): string {
  return (process.env.SMTP_FROM || process.env.SMTP_USER || "").trim();
}

export function formatFromHeader(): string {
  const fromAddr = getFromAddress();
  return `"${siteConfig.name.replace(/"/g, "")}" <${fromAddr}>`;
}
