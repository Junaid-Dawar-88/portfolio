import { NextResponse } from "next/server";

/* Where messages land. Override with CONTACT_TO_EMAIL if it ever changes. */
const TO = process.env.CONTACT_TO_EMAIL ?? "junaidiqbal.dev88@gmail.com";
/* Resend's shared sender works without a verified domain, but only delivers
   to the address the Resend account was created with. */
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const LIMITS = { name: 100, email: 200, topic: 60, message: 5000 };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured yet." }, { status: 500 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(payload.company, 100)) return NextResponse.json({ ok: true });

  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const topic = clean(payload.topic, LIMITS.topic) || "General";
  const message = clean(payload.message, LIMITS.message);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const html = `
    <h2 style="margin:0 0 16px">New message from your portfolio</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;
  const text = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `${topic} — ${name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend rejected the email", res.status, await res.text());
    return NextResponse.json({ error: "The message could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
