export const THEMES = [
  // 1. Keep Clean Minimal unchanged
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
    accentColor: '#18181b',
    badgeBg: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    buttonBg: 'bg-zinc-900 text-white hover:bg-zinc-800',
    secondaryButtonBg:
      'bg-zinc-50 border border-zinc-200 text-zinc-800 hover:bg-zinc-100',
    previewGradient: 'from-zinc-100 to-zinc-200',
    headerBadge: 'bg-zinc-100 text-zinc-700'
  },

  // 2. Professional dark theme
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Premium charcoal with refined silver accents',
    pageBg: 'bg-[#111318]',
    cardBg: 'bg-[#1b1e25]',
    cardBorder: 'border-white/10',
    cardShadow: 'shadow-xl shadow-black/20',
    textColor: 'text-[#f4f5f7]',
    textMuted: 'text-[#a1a7b3]',
    accentColor: '#a5b4fc',
    badgeBg: 'bg-[#292d38] text-[#d9defa] border-[#3b4050]',
    buttonBg: 'bg-[#e5e7eb] text-[#18181b] hover:bg-white',
    secondaryButtonBg:
      'bg-[#252934] border border-white/10 text-[#e5e7eb] hover:bg-[#303541]',
    previewGradient: 'from-[#252936] via-[#171a22] to-[#0b0d12]',
    headerBadge: 'bg-[#292d38] text-[#d9defa]'
  },

  // 3. Sophisticated warm gradient
  {
    id: 'sunset',
    name: 'Terracotta',
    description: 'Elegant clay, muted rose and warm ivory',
    pageBg: 'bg-gradient-to-br from-[#faf4f0] via-[#f8eeeb] to-[#f4e7df]',
    cardBg: 'bg-[#fffdfb]',
    cardBorder: 'border-[#e8d4cb]',
    cardShadow: 'shadow-md shadow-[#754b3c]/5',
    textColor: 'text-[#34231f]',
    textMuted: 'text-[#856b63]',
    accentColor: '#b85c46',
    badgeBg: 'bg-[#f5e6df] text-[#8e4535] border-[#e8c9bd]',
    buttonBg: 'bg-[#a94f3b] text-white hover:bg-[#8f4030]',
    secondaryButtonBg:
      'bg-[#fffaf7] border border-[#e8d4cb] text-[#754638] hover:bg-[#f8ece6]',
    previewGradient: 'from-[#d7a18d] via-[#c17b68] to-[#895347]',
    headerBadge: 'bg-[#f5e6df] text-[#8e4535]'
  },

  // 4. Refined blue business theme
  {
    id: 'ocean',
    name: 'Navy Executive',
    description: 'Deep navy, cool white and confident blue accents',
    pageBg: 'bg-[#101b2d]',
    cardBg: 'bg-[#19283d]',
    cardBorder: 'border-[#334761]',
    cardShadow: 'shadow-xl shadow-[#07101e]/30',
    textColor: 'text-[#f1f5f9]',
    textMuted: 'text-[#a9b8cb]',
    accentColor: '#60a5fa',
    badgeBg: 'bg-[#233750] text-[#bfdbfe] border-[#385576]',
    buttonBg: 'bg-[#60a5fa] text-[#0b1728] font-semibold hover:bg-[#93c5fd]',
    secondaryButtonBg:
      'bg-[#203149] border border-[#3b506a] text-[#e2e8f0] hover:bg-[#293e58]',
    previewGradient: 'from-[#416b9b] via-[#1e3a5f] to-[#101b2d]',
    headerBadge: 'bg-[#233750] text-[#bfdbfe]'
  },

  // 5. Keep Emerald Cyber unchanged
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
    accentColor: '#10b981',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50',
    buttonBg: 'bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400',
    secondaryButtonBg:
      'bg-emerald-950/60 border border-emerald-800 text-emerald-200 hover:bg-emerald-900/50',
    previewGradient: 'from-emerald-950 via-emerald-800 to-teal-900',
    headerBadge: 'bg-emerald-950 text-emerald-300'
  },

  // 6. Premium muted purple
  {
    id: 'lavender',
    name: 'Soft Indigo',
    description: 'Subtle lavender, clean whites and indigo accents',
    pageBg: 'bg-gradient-to-br from-[#f7f7ff] via-[#f1f0fb] to-[#eeedf8]',
    cardBg: 'bg-white/95',
    cardBorder: 'border-[#dedcf0]',
    cardShadow: 'shadow-md shadow-[#51458c]/5',
    textColor: 'text-[#24213a]',
    textMuted: 'text-[#77728f]',
    accentColor: '#6558b5',
    badgeBg: 'bg-[#eeebfb] text-[#514394] border-[#dcd5f5]',
    buttonBg: 'bg-[#55469e] text-white hover:bg-[#443681]',
    secondaryButtonBg:
      'bg-white border border-[#dedcf0] text-[#514394] hover:bg-[#f5f3ff]',
    previewGradient: 'from-[#c8c2ed] via-[#aaa5df] to-[#e0cfe9]',
    headerBadge: 'bg-[#eeebfb] text-[#514394]'
  },

  // 7. Premium neutral earth theme
  {
    id: 'latte',
    name: 'Linen & Espresso',
    description: 'Warm ivory, understated taupe and rich espresso',
    pageBg: 'bg-[#f5f2ec]',
    cardBg: 'bg-[#fffefa]',
    cardBorder: 'border-[#e4ddd1]',
    cardShadow: 'shadow-md shadow-[#4b3828]/5',
    textColor: 'text-[#30271f]',
    textMuted: 'text-[#817366]',
    accentColor: '#806044',
    badgeBg: 'bg-[#eee7dc] text-[#614a35] border-[#dfd2bf]',
    buttonBg: 'bg-[#443326] text-white hover:bg-[#302319]',
    secondaryButtonBg:
      'bg-[#fffefa] border border-[#dfd2bf] text-[#443326] hover:bg-[#f2ece2]',
    previewGradient: 'from-[#e8ddcc] via-[#cbb79d] to-[#a58b70]',
    headerBadge: 'bg-[#eee7dc] text-[#614a35]'
  },
  {
    // 8. Premium midnight sapphire theme
    id: 'sapphire',
    name: 'Midnight Sapphire',
    description: 'Deep navy, icy blue and crisp whites with sapphire accents',
    pageBg: 'bg-gradient-to-br from-[#f0f4fb] via-[#eaf0fa] to-[#e2eaf7]',
    cardBg: 'bg-white/95',
    cardBorder: 'border-[#d8e2f1]',
    cardShadow: 'shadow-lg shadow-[#243e70]/[0.06]',
    textColor: 'text-[#192d50]',
    textMuted: 'text-[#7185a5]',
    accentColor: '#426bb0',
    badgeBg: 'bg-[#e5edfa] text-[#294c83] border-[#d0def4]',
    buttonBg: 'bg-[#243e70] text-white hover:bg-[#192d50]',
    secondaryButtonBg:
      'bg-white border border-[#d8e2f1] text-[#294c83] hover:bg-[#f0f4fb]',
    previewGradient: 'from-[#c5d6f2] via-[#7396cf] to-[#243e70]',
    headerBadge: 'bg-[#e5edfa] text-[#294c83]'
  },
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
