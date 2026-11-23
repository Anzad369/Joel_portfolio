export interface VideoItem {
  id: string;
  videoUrl: string; // Cloudinary .mp4 URL
  thumbnailUrl?: string; // Optional manual override
}

export interface VideoCategorySection {
  id: string;
  title: string;
  subtitle: string;
  videos: VideoItem[];
}

/**
- Generates a .jpg thumbnail URL by replacing the trailing .mp4 extension.
 */
export function getCloudinaryThumbnail(
  videoUrl: string,
  customThumbnail?: string
): string | undefined {
  if (customThumbnail) return customThumbnail;
  if (!videoUrl) return undefined;

  if (/\.mp4(\?.*)?$/i.test(videoUrl)) {
    return videoUrl.replace(/\.mp4(\?.*)?$/i, ".jpg$1");
  }

  return undefined;
}

export const PROFILE = {
  name: "Joel John",
  role: "Multimedia Content Creator & Social Media Brand Manager",
  tagline: "Content · Video · Graphic Design · Brand Strategy",
  location: "Dubai, UAE",
  yearsExperience: "5+ Years Experience",
  headline:
    "Crafting high-impact visual storytelling, commercial video production, and digital brand growth across Dubai and India.",
  bio: "Social Media Manager, Multimedia Content Creator, and Graphic Designer with 5 years of agency and corporate experience specialising in building and scaling brands through digital-first strategies. From luxury real estate launches in Dubai to nationwide retail campaigns featured on Ads of the World, every visual and frame is engineered to hold attention and leave a lasting commercial impact.",
  highlights: [
    {
      metric: "4.4M+",
      label: "Organic Views in 15 Days",
      detail: "Forum Kochi Launch — Highlighted on Ads of the World",
      href: "https://www.adsoftheworld.com/campaigns/it-s-happening-b59ef921-d840-4324-b56a-b1df9dbc88fa",
    },
    {
      metric: "AED 25M+",
      label: "Campaign-Driven Sales",
      detail: "Own Now, Pay Later — Marrfa Discovery Real Estate",
      href: "",
    },
    {
      metric: "0 → 40K",
      label: "Instagram Growth in 12 Months",
      detail: "Full-funnel monthly campaigns & 100+ creator collabs",
      href: "",
    },
  ],
  personalProjects: [
    {
      id: "personal-project-1",
      title: "The last boat - Malayalam Documentary",
      platform: "YouTube",
      detail: "Concept, pacing, color, and sound design",
      url: "https://youtu.be/R3JsVKRNDts?si=0uvqxP6AX5ioP3Nh",
    },
    {
      id: "personal-project-2",
      title: "Vanishing worlds of Kuttanadu - Malayalam Documentary",
      platform: "YouTube",
      detail: "Cinematography, cut, and finishing",
      url: "https://youtu.be/kNE_z1lnsUo?si=qxI1ZnvS5am-wbPs",
    },
  ],
  softwareSkills: [
    {
      name: "Premiere Pro",
      category: "Video Editing & Pacing",
    },
    {
      name: "DaVinci Resolve",
      category: "Color Grading & Finishing",
    },
    {
      name: "After Effects",
      category: "Motion Graphics & VFX",
    },
    {
      name: "Higgsfield",
      category: "AI Cinema & Visual Generation",
    },
    {
      name: "ChatGPT",
      category: "Creative Scripting & Strategy",
    },
  ],
  experience: [
    {
      role: "Videographer",
      company: "PSI Real Estate LLC",
      period: "Sep 2026 – Present",
      location: "Dubai",
    },
    {
      role: "Digital Marketing Executive / Content",
      company: "Marrfa Discovery Real Estate LLC",
      period: "Jul 2025 – Aug 2026",
      location: "Dubai",
    },
    {
      role: "Content Creator – Freelance",
      company: "Luxsar Properties · Amavi · BeMoreThan · GPC Beauty",
      period: "Oct 2024 – Jun 2025",
      location: "Dubai",
    },
    {
      role: "Lead – Brand Manager",
      company: "Green Honchos",
      period: "Jul 2023 – Jun 2024",
      location: "India",
    },
    {
      role: "Digital Marketing Executive",
      company: "Lenskart / Aqualens",
      period: "Dec 2022 – Jun 2023",
      location: "India",
    },
  ],
  clients: [
    "DAMAC",
    "ALDAR",
    "Prestige Group",
    "Forum Malls",
    "Lenskart",
    "Aqualens",
    "H&M",
    "Amavi Jewels",
    "V Perfumes",
    "Marrfa Real Estate",
    "Lux-Sar Properties",
    "Homiga",
    "Foo",
    "Zomato",
    "PVR",
  ],
};

export const VIDEO_CATEGORIES: VideoCategorySection[] = [
   {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Dubai luxury property walkthroughs, architectural cinema, and investor reels",
    videos: [

      { id: "real-estate-8", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179811/Jay_Eagle_Hills_Abudhabi_dqkymc.mp4" },
      { id: "real-estate-11", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179806/Country_Directors_Video_qsv5r5.mp4" },
      { id: "real-estate-12", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179802/Broeck_Samana_kqgw1t.mp4" },
      { id: "real-estate-7", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179816/Jigyasa_Alef_Sharjah_psts5p.mp4" },
      { id: "real-estate-5", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795180106/Kunal_Binghatti_Mercedes_Final_xfxb8z.mp4" },
      { id: "real-estate-1", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795180274/Vinoth_Alef_Sharjah_ipxotj.mp4" }, 
      { id: "real-estate-3", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795180271/Sarah_Eagle_Hills_Abudhabi_d6zfvz.mp4" },
      { id: "real-estate-2", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795180273/Zubair_Video_3_Final_dubvby.mp4" },
      { id: "real-estate-4", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795180108/Monstera_For_Social_Media_Upload_idy1oy.mp4" },
      { id: "real-estate-6", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179820/Jay_Ohana_Jacob_And_Co_Abudhabi_qci1jh.mp4" },
      { id: "real-estate-9", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179810/Gokul_Challenging_Times_Personal_Branding_g8rqrf.mp4" },
      { id: "real-estate-10", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179809/Gokul_Binghatti_knpyah.mp4" },
    ],
  }, 
  {
    id: "brands",
    title: "Brands",
    subtitle: "Commercial brand films, retail launches, and lifestyle campaigns",
    videos: [
      { id: "brands-1", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178501/Golden_Threads_dqqenb.mp4" },
      { id: "brands-2", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178500/Amavi_Reel_2_oqpvjy.mp4" },
      { id: "brands-3", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178499/Amavi_Reel_1_oinudd.mp4" },
    ],
  },
  {
    id: "food-and-beverage",
    title: "Food and Beverage",
    subtitle: "High-appetite culinary reels, bar culture, and restaurant storytelling",
    videos: [
      { id: "fnb-1", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179391/6_o8cb1k.mp4" },
      { id: "fnb-2", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179388/5_tvnowe.mp4" },
      { id: "fnb-3", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179387/1_ofrl12.mp4" },
      { id: "fnb-4", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179387/4_rbcx4g.mp4" },
      { id: "fnb-5", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179386/3_r76f6n.mp4" },
      { id: "fnb-6", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179384/2_rqfncm.mp4" },
    ],
  },
  {
    id: "events",
    title: "Events",
    subtitle: "Live experiences, cultural festivals, and high-energy aftermovies",
    videos: [
      { id: "events-1", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179378/Psi_X_Holm_1_c3e8xu.mp4" },
      { id: "events-2", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179371/Pangeo_1_z1bjng.mp4" },
      { id: "events-3", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179370/Ohana_Final_1_rknvxl.mp4" },
      { id: "events-4", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795179369/Mnday_Meeting_Final_1_tnxroj.mp4" },
    ],
  },
  {
    id: "UGC",
    title: "UGC",
    subtitle: "Founder-led storytelling, executive hooks, and high-converting UGC reels",
    videos: [
      { id: "ceo-1", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178575/Ever_Thought_A_Cocktail_Could_Inspire_A_Watch_In_This_Episode_Of_Ceotries_We_Re_Diving_Into_The_Seiko_Cocktail_Collection._It_S_Where_Japanese_Craftsmanship_Meets_Cocktail_Cul_wfiqlh.mp4" },
      { id: "ceo-2", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178575/Ceotries_Seiko_guntao.mp4" },
      { id: "ceo-3", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178571/Ceotries_Lacoste_meiosl.mp4" },
      { id: "ceo-4", videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795178569/Ceo_Tries_-_Forum_Malls_r7r0m7.mp4" },
    ],
  },

];

export const PDF_DOWNLOADS = [
  {
    id: "portfolio-pdf",
    title: "Selected Works & Campaign Portfolio",
    edition: "2025 – 2026 Edition",
    pages: "22 Pages · PDF",
    description:
      "Full visual case studies covering Forum Kochi (Ads of the World), Aqualens, Marrfa Real Estate, documentary films, luxury product shoots, and curated brand grids.",
    filePath: "/docs/Joel Portfolio.pdf",
    downloadName: "Joel_John_Portfolio_2025_2026.pdf",
  },
  {
    id: "resume-pdf",
    title: "Curriculum Vitae / Executive Resume",
    edition: "2026 – 2027 Edition",
    pages: "10 Pages · PDF",
    description:
      "Complete career timeline across Dubai and India, campaign ROI metrics, client roster, academic background (MA Mass Communication & B.Tech), and core capabilities.",
    filePath: "/docs/Joel Resume.pdf",
    downloadName: "Joel_John_Resume_2026.pdf",
  },
];

export const CONTACT_INFO = {
  email: "joel.vjohn@gmail.com",
  phone: "+971 56 281 3992",
  phoneRaw: "+971562813992",
  location: "Dubai, United Arab Emirates",
  socials: [
    { label: "LinkedIn", handle: "in/joelvjohn", url: "https://linkedin.com/in/joelvjohn" },
    { label: "Behance", handle: "behance.net/joelvjohn_", url: "https://behance.net/joelvjohn_" },
    { label: "YouTube", handle: "youtube.com/joelvjohn", url: "https://youtube.com/joelvjohn" },
  ],
};