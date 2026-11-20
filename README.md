# Joel John — Content Creator & Social Media Brand Manager Portfolio

A modern, minimalist Next.js portfolio website built for **Joel John**, showcasing 9:16 vertical video reels, campaign metrics, production stack, and downloadable portfolio/CV PDFs.

## Tech Stack

- **Framework:** Next.js (App Router) & React
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Media Delivery:** Cloudinary (`.mp4` video playback & automated `.jpg` poster thumbnails)

## Project Structure

```text
├── app/
│   ├── globals.css          # Theme color tokens & base styles
│   ├── layout.tsx           # Root layout, fonts & metadata
│   └── page.tsx             # Main portfolio page assembly
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── BioSection.tsx       # Hero bio, interactive circular portrait, stats & stack
│   ├── VideosSection.tsx    # Category filter pills & 9:16 video theater modal
│   ├── VideoRow.tsx         # Horizontal snap-scroll reel rows
│   ├── PdfDownloadsSection.tsx # Portfolio & CV PDF download cards
│   └── ContactSection.tsx   # Direct contact details & social links
├── data/
│   └── portfolioData.ts     # Profile copy, reel URLs, PDF paths & contact info
└── public/
    ├── images/
    │   └── photo.png        # Transparent PNG portrait cutout
    └── docs/
        ├── Joel-Portfolio-2025-2026.pdf
        └── Joel-Resume-2026.pdf
```
