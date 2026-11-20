import Image from "next/image";
import { PROFILE } from "@/data/portfolioData";
import { Sparkles, MapPin, Award, Layers } from "lucide-react";

export default function BioSection() {
  return (
    <section id="bio" className="border-b border-graphite py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-champagne">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {PROFILE.location}
          </span>
          <span className="text-graphite">/</span>
          <span>{PROFILE.yearsExperience}</span>
        </div>

        {/* Hero Split */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-alabaster sm:text-5xl md:text-6xl">
              {PROFILE.role}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stoneMuted sm:text-lg">
              {PROFILE.bio}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-graphite pt-6">
              <div>
                <div className="text-base font-semibold text-alabaster">
                  {PROFILE.name}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-stoneMuted">
                  Content · Video · Brand Strategy
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-xs items-center justify-center lg:col-span-5 lg:max-w-sm">
            <div className="group relative aspect-square w-full overflow-hidden rounded-full border border-graphite bg-slateCard shadow-[0_14px_28px_rgba(20,20,19,0.08)] ring-4 ring-transparent transition-all duration-500 ease-out hover:-translate-y-1 hover:border-champagne/80 hover:shadow-[0_22px_40px_rgba(168,107,26,0.14)] hover:ring-champagne/15">
              {/* Subtle warm radial sheen that intensifies on hover */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,107,26,0.06),transparent_65%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Cutout Portrait */}
              <Image
                src="/images/photo.png"
                alt={PROFILE.name}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 384px"
                className="translate-y-3 scale-[1.2] object-contain object-bottom drop-shadow-[0_10px_18px_rgba(20,20,19,0.12)] transition-transform duration-500 ease-out group-hover:translate-y-2 group-hover:scale-[1.24] group-hover:drop-shadow-[0_16px_24px_rgba(20,20,19,0.18)]"
              />
            </div>
          </div>
        </div>

        {/* Key Proof Points */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {PROFILE.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-graphite bg-slateCard p-6 transition hover:border-champagne/60"
            >
              <div className="font-serif text-3xl font-bold tracking-tight text-champagne">
                {item.metric}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-alabaster">
                {item.label}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-stoneMuted">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Software Stack */}
        <div className="mt-14 rounded-2xl border border-graphite bg-slateCard p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-graphite pb-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-champagne" />
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-alabaster">
                Software & Production Stack
              </h2>
            </div>
            <span className="hidden font-mono text-xs text-stoneMuted sm:inline">
              Editing · Color · Motion · AI
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {PROFILE.softwareSkills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-graphite bg-obsidian p-4 transition hover:border-champagne"
              >
                <div className="text-sm font-semibold text-alabaster">
                  {skill.name}
                </div>
                <div className="mt-1 text-xs text-stoneMuted">
                  {skill.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Clients */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-champagne">
              <Award className="h-4 w-4" />
              <span>Experience</span>
            </div>
            <div className="divide-y divide-graphite border-y border-graphite">
              {PROFILE.experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <div className="text-sm font-semibold text-alabaster">
                      {exp.role}
                    </div>
                    <div className="text-xs text-stoneMuted">{exp.company}</div>
                  </div>
                  <div className="font-mono text-xs text-champagne">
                    {exp.period} · {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-champagne">
              <Layers className="h-4 w-4" />
              <span>Brands & Clients</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROFILE.clients.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-graphite bg-slateCard px-3.5 py-1.5 text-xs font-medium text-alabaster transition hover:border-champagne hover:text-champagne"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}