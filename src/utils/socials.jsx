import {
  BookOpen, Calendar, Code, ShoppingBag, Sparkles, Link as LinkIcon
} from 'lucide-react';
import {
  FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaTiktok,
  FaSpotify, FaDiscord, FaTwitch, FaWhatsapp, FaTelegram, FaEnvelope,
  FaGlobe, FaBehance, FaDribbble
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const SOCIAL_ICONS = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebook,
  x: FaXTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
  tiktok: FaTiktok,
  spotify: FaSpotify,
  discord: FaDiscord,
  twitch: FaTwitch,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  email: FaEnvelope,
  website: FaGlobe,
  behance: FaBehance,
  dribbble: FaDribbble,
};

export const CATEGORIES = [
  { id: 'all', label: 'All Platforms' },
  { id: 'social', label: 'Social Networks' },
  { id: 'tech', label: 'Tech & Code' },
  { id: 'media', label: 'Media & Streaming' },
  { id: 'contact', label: 'Contact & Chat' },
  { id: 'design', label: 'Design & Portfolios' },
];

export const CUSTOM_LINK_ICONS = [
  { id: 'link', label: 'Default Link', icon: LinkIcon },
  { id: 'book', label: 'Newsletter / Blog', icon: BookOpen },
  { id: 'calendar', label: 'Book a Call', icon: Calendar },
  { id: 'code', label: 'Code / Projects', icon: Code },
  { id: 'shop', label: 'Merch / Store', icon: ShoppingBag },
  { id: 'sparkles', label: 'Special / Event', icon: Sparkles },
];

export const getCustomLinkIcon = (iconName, size = 15) => {
  switch (iconName) {
    case 'book': return <BookOpen size={size} />;
    case 'calendar': return <Calendar size={size} />;
    case 'code': return <Code size={size} />;
    case 'shop': return <ShoppingBag size={size} />;
    case 'sparkles': return <Sparkles size={size} />;
    default: return <LinkIcon size={size} />;
  }
};

export const getSocialUrl = (platformId, val) => {
  if (!val) return '#';
  if (val.startsWith('http://') || val.startsWith('https://')) return val;
  const clean = val.replace(/^@/, '');
  switch (platformId) {
    case 'x': return `https://x.com/${clean}`;
    case 'instagram': return `https://instagram.com/${clean}`;
    case 'youtube': return val.startsWith('@') ? `https://youtube.com/${val}` : `https://youtube.com/@${val}`;
    case 'linkedin': return `https://linkedin.com/in/${clean}`;
    case 'github': return `https://github.com/${clean}`;
    case 'tiktok': return `https://tiktok.com/@${clean}`;
    case 'spotify': return `https://open.spotify.com/user/${clean}`;
    case 'discord': return `https://discord.gg/${clean}`;
    case 'twitch': return `https://twitch.tv/${clean}`;
    case 'whatsapp': return `https://wa.me/${val.replace(/[^0-9]/g, '')}`;
    case 'telegram': return `https://t.me/${clean}`;
    case 'email': return `mailto:${val}`;
    case 'behance': return `https://behance.net/${clean}`;
    case 'dribbble': return `https://dribbble.com/${clean}`;
    case 'facebook': return `https://facebook.com/${clean}`;
    default: return `https://${val}`;
  }
};
