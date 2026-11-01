"use client";

import React, { useState } from "react";
import SectionHeading from "../components/section-heading";
import { Reveal, RevealItem } from "../components/reveal";
import { ChannelList } from "../footer/footer";
import { ChatIcon } from "../components/whatsapp-button";
import { site, whatsappLink } from "../lib/site";

const EMAIL = site.email;

const topics = ["New website or app", "E-commerce store", "Fix or improve a site", "Something else"];

const field =
  "mt-2 w-full rounded-2xl border border-line bg-surface/60 px-5 py-3.5 text-[15px] text-chalk placeholder:text-faint transition-colors focus:border-jade focus:outline-none";
const label = "font-mono text-[11px] uppercase tracking-[0.18em] text-faint";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const Contact = ({ headingAs = "h1" }: { headingAs?: "h1" | "h2" }) => {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  // Posts to /api/contact, which emails the message straight to my inbox.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), topic }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "The message could not be sent.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "The message could not be sent.",
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        as={headingAs}
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <span className="text-jade">your project</span>
          </>
        }
        lede="Tell me what you need and I'll reply within 24 hours with questions, a rough timeline and a quote. Prefer to chat? Message me on WhatsApp."
      />

      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal as="section" gap={0.07}>
          <form onSubmit={onSubmit} className="relative flex flex-col gap-6">
            <RevealItem>
              <fieldset>
                <legend className={label}>What&apos;s it about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={topic === t}
                      onClick={() => setTopic(t)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        topic === t
                          ? "border-jade bg-jade text-(--on-jade)"
                          : "border-line text-mist hover:border-jade hover:text-chalk"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>
            </RevealItem>

            <RevealItem className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={label}>Your name</span>
                <input name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className={label}>Your email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                  placeholder="jane@company.com"
                />
              </label>
            </RevealItem>

            <RevealItem>
              <label className="block">
                <span className={label}>Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className={`${field} resize-y`}
                  placeholder="What do you need built? Any deadline or budget in mind?"
                />
              </label>
            </RevealItem>

            {/* Honeypot — hidden from people, tempting to bots */}
            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <RevealItem className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="group inline-flex items-center gap-2.5 rounded-full bg-jade px-7 py-3.5 font-semibold text-(--on-jade) transition-opacity hover:opacity-85 disabled:cursor-wait disabled:opacity-70"
              >
                {status.state === "sending" ? "Sending…" : "Send a message"}
                {status.state === "sending" ? (
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                )}
              </button>

              <p role="status" aria-live="polite" className="font-mono text-xs">
                {status.state === "sent" && (
                  <span className="text-jade">Thanks — your message is on its way. I&apos;ll reply soon.</span>
                )}
                {status.state === "error" && (
                  <span className="text-marigold">
                    {status.message} You can also email{" "}
                    <a href={`mailto:${EMAIL}`} className="underline">
                      {EMAIL}
                    </a>
                    .
                  </span>
                )}
              </p>
            </RevealItem>
          </form>
        </Reveal>

        <Reveal as="section" gap={0.07}>
          <RevealItem as="p" variant="riseSm" className={`${label} mb-4`}>
            Or reach me directly
          </RevealItem>
          <RevealItem variant="riseSm" className="mb-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-[#05301a] transition-opacity hover:opacity-90"
            >
              <ChatIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </RevealItem>
          <ChannelList />
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
