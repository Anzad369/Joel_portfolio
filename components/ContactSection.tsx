"use client";

import { useState, FormEvent } from "react";
import { CONTACT_INFO, VIDEO_CATEGORIES } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [gmailUrl, setGmailUrl] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(
    VIDEO_CATEGORIES[0]?.title || "Brands"
  );
  const [details, setDetails] = useState("");

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Project Brief: ${category} — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nProject Details:\n${details}`;

    const composeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT_INFO.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setGmailUrl(composeLink);
    setSubmitted(true);

    window.open(composeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle Crimson-Amber Glow */}
      <div
        aria-hidden="true"
        className="moody-crimson-sheen pointer-events-none absolute right-0 bottom-10 h-[360px] w-[560px] opacity-65 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Left Column: Direct Details & Socials */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-champagne">
                Bookings & Collaborations
              </span>
              <span className="h-0.5 w-7 rounded-full bg-champagne" />
            </div>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-alabaster sm:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stoneMuted">
              Available for brand campaigns, luxury real estate productions,
              commercial reels, and social media leadership in Dubai and worldwide.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="moody-card flex items-center justify-between rounded-xl border border-graphite p-4 transition hover:border-champagne/60">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-sm text-alabaster hover:text-champagne"
                >
                  <Mail className="h-4 w-4 text-champagne" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyText(CONTACT_INFO.email, "email")}
                  className="text-stoneMuted hover:text-champagne"
                  aria-label="Copy email"
                >
                  {copiedField === "email" ? (
                    <Check className="h-4 w-4 text-champagne" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="moody-card flex items-center justify-between rounded-xl border border-graphite p-4 transition hover:border-champagne/60">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-alabaster hover:text-champagne"
                >
                  <Phone className="h-4 w-4 text-champagne" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyText(CONTACT_INFO.phone, "phone")}
                  className="text-stoneMuted hover:text-champagne"
                  aria-label="Copy phone number"
                >
                  {copiedField === "phone" ? (
                    <Check className="h-4 w-4 text-champagne" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="moody-card flex items-center gap-3 rounded-xl border border-graphite p-4 text-sm text-stoneMuted">
                <MapPin className="h-4 w-4 text-champagne" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {CONTACT_INFO.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="moody-card group flex items-center justify-between rounded-xl border border-graphite px-4 py-3 text-xs transition hover:border-champagne/70"
                >
                  <div>
                    <div className="font-semibold text-alabaster group-hover:text-champagne">
                      {social.label}
                    </div>
                    <div className="text-[11px] text-stoneMuted">
                      {social.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-stoneMuted group-hover:text-champagne" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="moody-card rounded-2xl border border-graphite p-7 md:p-10"
            >
              <h3 className="font-serif text-2xl font-semibold text-alabaster">
                Send a Project Brief
              </h3>
              <p className="mt-1 text-xs text-stoneMuted">
                Share your campaign goals, shoot dates, or brand requirements.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-stoneMuted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-graphite bg-obsidian/90 px-4 py-3 text-sm text-alabaster placeholder:text-stoneMuted/50 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-stoneMuted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@brand.com"
                    className="w-full rounded-xl border border-graphite bg-obsidian/90 px-4 py-3 text-sm text-alabaster placeholder:text-stoneMuted/50 focus:border-champagne focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-stoneMuted">
                  Video / Campaign Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-graphite bg-obsidian/90 px-4 py-3 text-sm text-alabaster focus:border-champagne focus:outline-none"
                >
                  {VIDEO_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-stoneMuted">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell me about your brand, deliverables, and timeline..."
                  className="w-full rounded-xl border border-graphite bg-obsidian/90 px-4 py-3 text-sm text-alabaster placeholder:text-stoneMuted/50 focus:border-champagne focus:outline-none"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-champagne px-7 py-3 text-xs font-semibold uppercase tracking-widest text-obsidian transition hover:bg-champagne/90"
                >
                  Send Inquiry
                </button>

                {submitted && gmailUrl && (
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-champagne underline hover:text-alabaster"
                  >
                    Didn&apos;t open? Click here to open Gmail
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-graphite pt-8 text-xs text-stoneMuted sm:flex-row">
          <span>© 2026 Joel John. All rights reserved.</span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-champagne/80">
            Dubai · India
          </span>
        </footer>
      </div>
    </section>
  );
}