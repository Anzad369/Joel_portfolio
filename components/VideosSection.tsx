"use client";

import { useState } from "react";
import {
  VIDEO_CATEGORIES,
  VideoItem,
  getCloudinaryThumbnail,
} from "@/data/portfolioData";
import VideoRow from "./VideoRow";
import { X } from "lucide-react";

export default function VideosSection() {
  const [activeModal, setActiveModal] = useState<{
    video: VideoItem;
    categoryTitle: string;
    reelNumber: string;
  } | null>(null);

  return (
    <section
      id="videos"
      className="border-b border-graphite bg-obsidian py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-graphite pb-8 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Selected Video Archive · 9:16 Portrait
            </span>
            <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-0.025em] text-alabaster sm:text-5xl">
              Curated Video Reels
            </h2>
          </div>
        </div>

        {/* Quick-Jump Category Pills */}
        <div className="no-scrollbar mt-6 flex gap-2.5 overflow-x-auto pb-2">
          {VIDEO_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-graphite bg-slateCard px-4 py-2 text-xs font-medium text-alabaster transition hover:border-champagne hover:text-champagne"
            >
              {cat.title}
            </a>
          ))}
        </div>

        {/* 5 Dedicated Horizontal Portrait Sections */}
        <div className="mt-14 space-y-20">
          {VIDEO_CATEGORIES.map((category, idx) => (
            <VideoRow
              key={category.id}
              section={category}
              index={idx}
              onSelectVideo={(video, categoryTitle, reelNumber) =>
                setActiveModal({ video, categoryTitle, reelNumber })
              }
            />
          ))}
        </div>
      </div>

      {/* 9:16 Portrait Theater Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-alabaster/40 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-graphite bg-slateCard shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Category & Reel Number Only */}
            <div className="flex items-center justify-between border-b border-graphite px-5 py-3.5">
              <div>
                <div className="font-mono text-[10px] font-medium uppercase tracking-widest text-champagne">
                  {activeModal.categoryTitle}
                </div>
                <div className="mt-0.5 font-mono text-sm font-semibold text-alabaster">
                  #{activeModal.reelNumber}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close video modal"
                className="rounded-full border border-graphite bg-obsidian p-1.5 text-stoneMuted transition hover:border-champagne hover:text-alabaster"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 9:16 Portrait .mp4 Player */}
            <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-alabaster">
              <video
                key={activeModal.video.id}
                src={activeModal.video.videoUrl}
                poster={getCloudinaryThumbnail(
                  activeModal.video.videoUrl,
                  activeModal.video.thumbnailUrl
                )}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}