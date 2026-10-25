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

export const EMPTY_PROFILE = {
  name: '',
  username: '',
  title: '',
  bio: '',
  avatar: '',
  interests: [],
  achievements: [],
  socials: {},
  customLinks: [],
  photos: [],
  theme: {
    id: 'clean',
    accentColor: THEMES[0].accentColor,
    buttonStyle: 'rounded',
    fontStyle: 'sans',
    cardVariant: 'standard'
  },
  email: '',
  isPublic: true,
  isAuthenticated: false
};

const STORAGE_KEY = 'linkme_profile';
const EVENT_NAME = 'linkme_profile_updated';

export function normalizeProfile(profile = {}) {
  return {
    ...EMPTY_PROFILE,
    ...profile,
    socials: { ...EMPTY_PROFILE.socials, ...(profile.socials || {}) },
    theme: { ...EMPTY_PROFILE.theme, ...(profile.theme || {}) },
    customLinks: Array.isArray(profile.customLinks) ? profile.customLinks : [],
    photos: Array.isArray(profile.photos) ? profile.photos : [],
    interests: Array.isArray(profile.interests) ? profile.interests : [],
    achievements: Array.isArray(profile.achievements) ? profile.achievements : [],
    isAuthenticated: Boolean(localStorage.getItem('linkme_token'))
  };
}

export function getStoredProfile() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const storedProfile = saved ? JSON.parse(saved) : {};
    if (storedProfile.isAuthenticated && !localStorage.getItem('linkme_token')) {
      return normalizeProfile();
    }
    return normalizeProfile(storedProfile);
  } catch {
    return normalizeProfile();
  }
}

export function saveStoredProfile(data) {
  const normalized = normalizeProfile(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  window.dispatchEvent(new Event(EVENT_NAME));
  return normalized;
}

export { EVENT_NAME };
