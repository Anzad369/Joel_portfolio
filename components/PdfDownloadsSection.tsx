import { PDF_DOWNLOADS } from "@/data/portfolioData";
import { Download, Eye, FileText } from "lucide-react";

export default function PdfDownloadsSection() {
  return (
    <section
      id="downloads"
      className="border-b border-graphite bg-obsidian py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
            Credentials & Case Studies
          </span>
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
              className="flex flex-col justify-between rounded-2xl border border-graphite bg-slateCard p-7 transition hover:border-champagne"
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
                  className="inline-flex items-center gap-2 rounded-full bg-alabaster px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slateCard transition hover:bg-champagne"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={doc.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-graphite bg-slateCard px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-alabaster transition hover:border-champagne hover:text-champagne"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Preview</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}