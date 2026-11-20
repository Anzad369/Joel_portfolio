import { PDF_DOWNLOADS, PROFILE } from "@/data/portfolioData";
import { Download, Eye, FileText, PlayCircle, ArrowUpRight } from "lucide-react";

export default function PdfDownloadsSection() {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden border-b border-graphite py-20 md:py-28"
    >
      {/* Subtle Crimson-Amber Glow */}
      <div
        aria-hidden="true"
        className="moody-crimson-sheen pointer-events-none absolute -top-20 right-1/4 h-[340px] w-[580px] opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Credentials & Case Studies
            </span>
            <span className="h-0.5 w-7 rounded-full bg-champagne" />
          </div>
          <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-0.025em] text-alabaster sm:text-5xl">
            Download Works & C.V.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stoneMuted sm:text-base">
            Download the complete offline PDF editions of Joel&apos;s campaign
            portfolio and executive resume for agency reviews or internal sharing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PDF_DOWNLOADS.map((doc) => (
            <div
              key={doc.id}
              className="moody-card flex flex-col justify-between rounded-2xl border border-graphite p-7 transition hover:border-champagne/70"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-graphite bg-obsidian px-3 py-1 font-mono text-[11px] font-medium text-champagne">
                    <FileText className="h-3.5 w-3.5" />
                    {doc.pages}
                  </span>
                  <span className="font-mono text-xs text-stoneMuted">
                    {doc.edition}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold tracking-[-0.02em] text-alabaster">
                  {doc.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stoneMuted">
                  {doc.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-graphite pt-5">
                <a
                  href={doc.filePath}
                  download={doc.downloadName}
                  className="inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-obsidian transition hover:bg-champagne/90"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={doc.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-graphite bg-obsidian px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-alabaster transition hover:border-champagne hover:text-champagne"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Preview</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects — YouTube Links */}
        {PROFILE.personalProjects && PROFILE.personalProjects.length > 0 && (
          <div className="mt-14 border-t border-graphite pt-10">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                <PlayCircle className="h-4 w-4" />
                <span>Personal Projects</span>
              </div>
              <span className="font-mono text-xs text-stoneMuted">
                YouTube Cuts &amp; Experiments
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {PROFILE.personalProjects.map((project) => (
                <a
                  key={project.id ?? project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="moody-card group flex items-center justify-between gap-4 rounded-2xl border border-graphite p-5 transition hover:-translate-y-0.5 hover:border-champagne/70"
                >
                  <div className="min-w-0">
                    <div className="truncate font-serif text-lg font-bold text-alabaster transition-colors group-hover:text-champagne">
                      {project.title}
                    </div>
                    <div className="mt-1 font-mono text-xs text-stoneMuted">
                      {project.platform} · {project.detail}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-stoneMuted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-champagne" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}