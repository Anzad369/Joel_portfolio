"use client";

import { useRef } from "react";
import {
  VideoCategorySection,
  VideoItem,
  getCloudinaryThumbnail,
} from "@/data/portfolioData";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface VideoRowProps {
  section: VideoCategorySection;
  index: number;
  onSelectVideo: (
    video: VideoItem,
    categoryTitle: string,
    reelNumber: string
  ) => void;
}

export default function VideoRow({
  section,
  index,
  onSelectVideo,
}: VideoRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const distance = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div id={section.id} className="scroll-mt-28">
      {/* Row Header + Left/Right Controls */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-champagne">
            0{index + 1} / Category
          </div>
          <h3 className="mt-1 font-serif text-3xl font-bold tracking-[-0.02em] text-alabaster">
            {section.title}
          </h3>
          <p className="mt-1 text-sm text-stoneMuted">{section.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-end">
          <span className="mr-2 font-mono text-xs text-stoneMuted">
            Scroll →
          </span>
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label={`Scroll ${section.title} left`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite bg-slateCard text-alabaster transition hover:border-champagne hover:text-champagne"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label={`Scroll ${section.title} right`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite bg-slateCard text-alabaster transition hover:border-champagne hover:text-champagne"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Left-to-Right Portrait Scroll Track */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-12"
        >
          {section.videos.map((video, vIdx) => {
            const reelNumber = String(vIdx + 1).padStart(2, "0");
            const thumbUrl = getCloudinaryThumbnail(
              video.videoUrl,
              video.thumbnailUrl
            );

            return (
              <div
                key={video.id}
                onClick={() => onSelectVideo(video, section.title, reelNumber)}
                role="button"
                tabIndex={0}
                aria-label={`Play reel ${reelNumber}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectVideo(video, section.title, reelNumber);
                  }
                }}
                className="group relative aspect-[9/16] w-[240px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-2xl border border-graphite bg-slateCard transition duration-300 hover:-translate-y-1 hover:border-champagne sm:w-[265px]"
              >
                {/* Cloudinary .jpg Thumbnail */}
                {thumbUrl && (
                  <img
                    src={thumbUrl}
                    alt={`Reel #${reelNumber}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}

                {/* Subtle surface tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-bronze/35 via-transparent to-obsidian/35" />

                {/* Top Reel Number Only */}
                <div className="relative z-10 flex items-center justify-end p-4">
                  <span className="rounded-full border border-graphite bg-slateCard/90 px-2.5 py-1 font-mono text-[11px] font-medium text-alabaster">
                    #{reelNumber}
                  </span>
                </div>

                {/* Center Play Emblem */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/60 bg-slateCard/90 text-champagne shadow-sm transition duration-300 group-hover:scale-110 group-hover:border-champagne group-hover:bg-champagne group-hover:text-slateCard">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right-edge subtle fade hint */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-obsidian to-transparent md:block" />
      </div>
    </div>
  );
}