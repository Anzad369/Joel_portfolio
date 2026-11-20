"use client";

import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-graphite/80 bg-obsidian/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-baseline gap-3">
          <span className="font-serif text-2xl font-semibold tracking-wider text-alabaster">
            JOEL JOHN
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-champagne sm:inline">
            Dubai · Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-stoneMuted md:flex">
          <a href="#bio" className="transition hover:text-alabaster">
            Bio
          </a>
          <a href="#videos" className="transition hover:text-alabaster">
            Videos
          </a>
          <a href="#downloads" className="transition hover:text-alabaster">
            Works PDF
          </a>
          <a href="#contact" className="transition hover:text-alabaster">
            Contact
          </a>
        </nav>

        <a
          href="#downloads"
          className="inline-flex items-center gap-2 rounded-full border border-champagne/50 bg-champagne/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-champagne transition hover:border-champagne hover:bg-champagne hover:text-obsidian"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Download PDF</span>
        </a>
      </div>
    </header>
  );
}