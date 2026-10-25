export const THEMES = [
  {
    id: 'clean',
    name: 'Clean Minimal',
    description: 'Crisp white & neutral zinc typography',
    pageBg: 'bg-zinc-50',
    cardBg: 'bg-white',
    cardBorder: 'border-zinc-200/90',
    cardShadow: 'shadow-xs',
    textColor: 'text-zinc-900',
    textMuted: 'text-zinc-500',
    accentColor: '#18181b', // zinc-900
    badgeBg: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    buttonBg: 'bg-zinc-900 text-white hover:bg-zinc-800',
    secondaryButtonBg: 'bg-zinc-50 border border-zinc-200 text-zinc-800 hover:bg-zinc-100',
    previewGradient: 'from-zinc-100 to-zinc-200',
    headerBadge: 'bg-zinc-100 text-zinc-700'
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    description: 'OLED obsidian with cool gray accents',
    pageBg: 'bg-zinc-950',
    cardBg: 'bg-zinc-900',
    cardBorder: 'border-zinc-800',
    cardShadow: 'shadow-2xl shadow-black/80',
    textColor: 'text-zinc-50',
    textMuted: 'text-zinc-400',
    accentColor: '#38bdf8', // sky-400
    badgeBg: 'bg-zinc-800 text-zinc-200 border-zinc-700',
    buttonBg: 'bg-white text-zinc-950 hover:bg-zinc-200 font-semibold',
    secondaryButtonBg: 'bg-zinc-800/80 border border-zinc-700 text-zinc-100 hover:bg-zinc-800',
    previewGradient: 'from-zinc-900 via-zinc-950 to-black',
    headerBadge: 'bg-zinc-800 text-zinc-300'
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    description: 'Warm coral, amber & rose gradients',
    pageBg: 'bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50',
    cardBg: 'bg-white/90 backdrop-blur-md',
    cardBorder: 'border-rose-200/70',
    cardShadow: 'shadow-lg shadow-rose-900/5',
    textColor: 'text-zinc-900',
    textMuted: 'text-rose-900/60',
    accentColor: '#f43f5e', // rose-500
    badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
    buttonBg: 'bg-gradient-to-r from-rose-500 to-amber-500 text-white hover:opacity-95',
    secondaryButtonBg: 'bg-white/80 border border-rose-200 text-rose-900 hover:bg-white',
    previewGradient: 'from-amber-400 via-rose-400 to-orange-400',
    headerBadge: 'bg-rose-100 text-rose-800'
  },
  {
    id: 'ocean',
    name: 'Ocean Breeze',
    description: 'Deep navy with electric cyan highlights',
    pageBg: 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950',
    cardBg: 'bg-slate-900/90 backdrop-blur-md',
    cardBorder: 'border-cyan-500/30',
    cardShadow: 'shadow-xl shadow-cyan-950/40',
    textColor: 'text-slate-50',
    textMuted: 'text-slate-400',
    accentColor: '#06b6d4', // cyan-500
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/50',
    buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95',
    secondaryButtonBg: 'bg-slate-800/90 border border-slate-700 text-slate-200 hover:bg-slate-800',
    previewGradient: 'from-cyan-500 via-blue-600 to-slate-900',
    headerBadge: 'bg-cyan-950 text-cyan-300'
  },
  {
    id: 'emerald',
    name: 'Emerald Cyber',
    description: 'Dark tech obsidian with vivid mint glow',
    pageBg: 'bg-[#06140e]',
    cardBg: 'bg-[#0a2017]/90 backdrop-blur-md',
    cardBorder: 'border-emerald-500/30',
    cardShadow: 'shadow-xl shadow-emerald-950/50',
    textColor: 'text-emerald-50',
    textMuted: 'text-emerald-400/70',
    accentColor: '#10b981', // emerald-500
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50',
    buttonBg: 'bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400',
    secondaryButtonBg: 'bg-emerald-950/60 border border-emerald-800 text-emerald-200 hover:bg-emerald-900/50',
    previewGradient: 'from-emerald-950 via-emerald-800 to-teal-900',
    headerBadge: 'bg-emerald-950 text-emerald-300'
  },
  {
    id: 'lavender',
    name: 'Lavender Mist',
    description: 'Soft dreamy lilac with indigo accents',
    pageBg: 'bg-gradient-to-br from-purple-50 via-indigo-50/50 to-pink-50',
    cardBg: 'bg-white/90 backdrop-blur-md',
    cardBorder: 'border-purple-200/80',
    cardShadow: 'shadow-md shadow-purple-900/5',
    textColor: 'text-zinc-900',
    textMuted: 'text-purple-900/60',
    accentColor: '#7c3aed', // violet-600
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
    buttonBg: 'bg-purple-600 text-white hover:bg-purple-700',
    secondaryButtonBg: 'bg-white border border-purple-200 text-purple-900 hover:bg-purple-50',
    previewGradient: 'from-purple-300 via-indigo-200 to-pink-200',
    headerBadge: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'latte',
    name: 'Warm Clay & Earth',
    description: 'Warm latte, espresso & sand tones',
    pageBg: 'bg-[#f7f4ef]',
    cardBg: 'bg-[#fffdf9]',
    cardBorder: 'border-amber-900/15',
    cardShadow: 'shadow-xs',
    textColor: 'text-[#2e1d12]',
    textMuted: 'text-[#7e695a]',
    accentColor: '#78350f', // amber-900
    badgeBg: 'bg-[#efe9df] text-[#543b27] border-[#ded4c3]',
    buttonBg: 'bg-[#3e2718] text-white hover:bg-[#2e1d12]',
    secondaryButtonBg: 'bg-white border border-[#ded4c3] text-[#3e2718] hover:bg-[#f7f4ef]',
    previewGradient: 'from-[#e7d8c5] to-[#c9ad93]',
    headerBadge: 'bg-[#efe9df] text-[#543b27]'
  }
];

export const COLOR_PRESETS = [
  { name: 'Obsidian Black', hex: '#18181b' },
  { name: 'Electric Sky', hex: '#0284c7' },
  { name: 'Neon Mint', hex: '#10b981' },
  { name: 'Vibrant Violet', hex: '#7c3aed' },
  { name: 'Sunset Rose', hex: '#f43f5e' },
  { name: 'Golden Amber', hex: '#f59e0b' },
  { name: 'Cyber Cyan', hex: '#06b6d4' },
  { name: 'Warm Terracotta', hex: '#c2410c' }
];

export const BUTTON_STYLES = [
  { id: 'pill', label: 'Full Pill', radius: 'rounded-full' },
  { id: 'rounded', label: 'Soft Rounded', radius: 'rounded-xl' },
  { id: 'square', label: 'Modern Square', radius: 'rounded-md' },
  { id: 'outline', label: 'Clean Bordered', radius: 'rounded-xl border-2' }
];

export const FONT_STYLES = [
  { id: 'sans', label: 'Modern Sans', styleClass: 'font-sans' },
  { id: 'serif', label: 'Editorial Serif', styleClass: 'font-serif' },
  { id: 'mono', label: 'Tech Monospace', styleClass: 'font-mono' }
];

export const AVATAR_PRESETS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80', label: 'Minimalist Portrait' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80', label: 'Friendly Creator' },
  { id: '3', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80', label: 'Creative Studio' },
  { id: '4', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80', label: 'Design Lead' },
  { id: '5', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80', label: 'Urban Artist' },
  { id: '6', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80', label: 'Photographer' },
  { id: '7', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80', label: 'Founder & Tech' },
  { id: '8', url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80', label: 'Digital Nomad' }
];

export const PHOTO_PRESETS = [
  {
    id: 'p1',
    title: 'Minimalist Workspace 2024',
    caption: 'My mechanical keyboard and desk setup in Tokyo',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
    link: 'https://unsplash.com'
  },
  {
    id: 'p2',
    title: 'Brand Identity System',
    caption: 'Design system built for 40,000 active developers',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    link: 'https://dribbble.com'
  },
  {
    id: 'p3',
    title: 'Architecture & Shadows',
    caption: 'Explorations in concrete, light, and geometry',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    link: 'https://instagram.com'
  }
];

export const PLATFORMS = [
  { id: 'x', label: 'X (Twitter)', category: 'social', placeholder: 'handle or @user', prefix: 'x.com/' },
  { id: 'instagram', label: 'Instagram', category: 'social', placeholder: 'username', prefix: 'instagram.com/' },
  { id: 'youtube', label: 'YouTube', category: 'media', placeholder: '@channel or link', prefix: 'youtube.com/' },
  { id: 'linkedin', label: 'LinkedIn', category: 'professional', placeholder: 'in/yourname', prefix: 'linkedin.com/in/' },
  { id: 'github', label: 'GitHub', category: 'tech', placeholder: 'username', prefix: 'github.com/' },
  { id: 'tiktok', label: 'TikTok', category: 'social', placeholder: '@username', prefix: 'tiktok.com/@' },
  { id: 'spotify', label: 'Spotify', category: 'media', placeholder: 'artist/user id', prefix: 'open.spotify.com/user/' },
  { id: 'discord', label: 'Discord', category: 'social', placeholder: 'server link or tag', prefix: 'discord.gg/' },
  { id: 'twitch', label: 'Twitch', category: 'media', placeholder: 'channel', prefix: 'twitch.tv/' },
  { id: 'whatsapp', label: 'WhatsApp', category: 'contact', placeholder: 'phone with country code', prefix: 'wa.me/' },
  { id: 'telegram', label: 'Telegram', category: 'contact', placeholder: 'username', prefix: 't.me/' },
  { id: 'email', label: 'Email', category: 'contact', placeholder: 'hello@domain.com', prefix: 'mailto:' },
  { id: 'website', label: 'Portfolio Website', category: 'professional', placeholder: 'https://mysite.com', prefix: '' },
  { id: 'behance', label: 'Behance', category: 'design', placeholder: 'username', prefix: 'behance.net/' },
  { id: 'dribbble', label: 'Dribbble', category: 'design', placeholder: 'username', prefix: 'dribbble.com/' },
  { id: 'facebook', label: 'Facebook', category: 'social', placeholder: 'username', prefix: 'facebook.com/' }
];

export const DEFAULT_PROFILE = {
  name: "Alex Rivera",
  username: "alex",
  title: "Product Designer & Frontend Tinkerer",
  bio: "Designing minimalist interfaces and crafting open-source digital tools. Exploring AI and typography.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
  interests: ["UI/UX Design", "React & Vite", "Minimalism", "Typography", "Open Source"],
  achievements: [
    { id: "1", title: "Product Hunt #2 Product of the Day", year: "2024" },
    { id: "2", title: "Built open source UI library with 4k+ stars", year: "2023" },
    { id: "3", title: "Speaker at Modern Frontend Summit", year: "2023" }
  ],
  socials: {
    instagram: "alexrivera.design",
    youtube: "@alexrivera_dev",
    facebook: "",
    x: "alexrivera_ui",
    linkedin: "alexrivera-design",
    github: "alexrivera",
    tiktok: "",
    spotify: "",
    discord: "",
    twitch: "",
    whatsapp: "",
    telegram: "",
    email: "alex@example.com",
    website: "https://alexrivera.design",
    behance: "",
    dribbble: "alexrivera"
  },
  customLinks: [
    {
      id: "cl-1",
      title: "Read My Design Newsletter",
      url: "https://substack.com",
      subtitle: "Weekly insights on minimal interfaces & craft",
      highlight: true,
      icon: "book"
    },
    {
      id: "cl-2",
      title: "Book a 1:1 Design Review",
      url: "https://cal.com",
      subtitle: "30-min portfolio & UI audit call",
      highlight: false,
      icon: "calendar"
    },
    {
      id: "cl-3",
      title: "Explore My Open Source Kits",
      url: "https://github.com/alexrivera",
      subtitle: "Free React & Tailwind CSS component library",
      highlight: false,
      icon: "code"
    }
  ],
  photos: PHOTO_PRESETS,
  theme: {
    id: 'clean',
    accentColor: '#18181b',
    buttonStyle: 'rounded', // 'pill' | 'rounded' | 'square' | 'outline'
    fontStyle: 'sans',      // 'sans' | 'serif' | 'mono'
    cardVariant: 'standard' // 'standard' | 'glass' | 'borderless'
  },
  email: "alex@example.com",
  isPublic: true,
  isAuthenticated: true
};

const STORAGE_KEY = 'linkme_profile';
const EVENT_NAME = 'linkme_profile_updated';

export function getStoredProfile() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_PROFILE;
    const parsed = JSON.parse(saved);
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      socials: { ...DEFAULT_PROFILE.socials, ...(parsed.socials || {}) },
      theme: { ...DEFAULT_PROFILE.theme, ...(parsed.theme || {}) },
      customLinks: Array.isArray(parsed.customLinks) ? parsed.customLinks : DEFAULT_PROFILE.customLinks,
      photos: Array.isArray(parsed.photos) ? parsed.photos : DEFAULT_PROFILE.photos,
      interests: Array.isArray(parsed.interests) ? parsed.interests : DEFAULT_PROFILE.interests,
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : DEFAULT_PROFILE.achievements
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveStoredProfile(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (err) {
    console.error('Failed to save profile:', err);
  }
}

export function resetStoredProfile() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT_NAME));
  return DEFAULT_PROFILE;
}

export { EVENT_NAME };
