import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Smartphone,
  Laptop,
  Star,
  Sparkles,
  Link as LinkIcon,
  BookOpen,
  Calendar,
  Code,
  ShoppingBag,
} from 'lucide-react';
import {
  FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaTiktok,
  FaSpotify, FaDiscord, FaTwitch, FaWhatsapp, FaTelegram, FaEnvelope,
  FaGlobe, FaBehance, FaDribbble
} from 'react-icons/fa';
import { FaXTwitter, FaShareNodes } from 'react-icons/fa6';
import { THEMES, BUTTON_STYLES, FONT_STYLES, PLATFORMS } from '../utils/storage';

const SOCIAL_ICONS = {
  instagram: FaInstagram, youtube: FaYoutube, facebook: FaFacebook,
  x: FaXTwitter, linkedin: FaLinkedin, github: FaGithub, tiktok: FaTiktok,
  spotify: FaSpotify, discord: FaDiscord, twitch: FaTwitch,
  whatsapp: FaWhatsapp, telegram: FaTelegram, email: FaEnvelope,
  website: FaGlobe, behance: FaBehance, dribbble: FaDribbble
};

export default function DevicePreview({ profile }) {
  const [deviceMode, setDeviceMode] = useState('mobile'); // 'mobile' | 'desktop'
  const [copied, setCopied] = useState(false);

  const activeTheme = THEMES.find(t => t.id === profile?.theme?.id) || THEMES[0];
  const activeButtonStyle = BUTTON_STYLES.find(b => b.id === profile?.theme?.buttonStyle) || BUTTON_STYLES[1];
  const activeFontStyle = FONT_STYLES.find(f => f.id === profile?.theme?.fontStyle) || FONT_STYLES[0];
  const accentColor = profile?.theme?.accentColor || activeTheme.accentColor;

  const shareUrl = `${window.location.origin}${profile?.username ? `/p/${profile.username}` : '/portfolio'}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get active socials
  const activeSocials = PLATFORMS.filter(p => profile?.socials?.[p.id]?.trim());

  const getCustomLinkIcon = (iconName) => {
    switch (iconName) {
      case 'book': return <BookOpen size={15} />;
      case 'calendar': return <Calendar size={15} />;
      case 'code': return <Code size={15} />;
      case 'shop': return <ShoppingBag size={15} />;
      case 'sparkles': return <Sparkles size={15} />;
      default: return <LinkIcon size={15} />;
    }
  };

  const getSocialUrl = (platformId, val) => {
    if (!val) return '#';
    if (val.startsWith('http://') || val.startsWith('https://')) return val;
    switch (platformId) {
      case 'x': return `https://x.com/${val.replace('@', '')}`;
      case 'instagram': return `https://instagram.com/${val.replace('@', '')}`;
      case 'youtube': return val.startsWith('@') ? `https://youtube.com/${val}` : `https://youtube.com/@${val}`;
      case 'linkedin': return `https://linkedin.com/in/${val}`;
      case 'github': return `https://github.com/${val}`;
      case 'tiktok': return `https://tiktok.com/@${val.replace('@', '')}`;
      case 'spotify': return `https://open.spotify.com/user/${val}`;
      case 'discord': return `https://discord.gg/${val}`;
      case 'twitch': return `https://twitch.tv/${val}`;
      case 'whatsapp': return `https://wa.me/${val.replace(/[^0-9]/g, '')}`;
      case 'telegram': return `https://t.me/${val.replace('@', '')}`;
      case 'email': return `mailto:${val}`;
      case 'behance': return `https://behance.net/${val}`;
      case 'dribbble': return `https://dribbble.com/${val}`;
      case 'facebook': return `https://facebook.com/${val}`;
      case 'website': return val.startsWith('http') ? val : `https://${val}`;
      default: return `https://${val}`;
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Preview Controls Bar */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition ${deviceMode === 'mobile'
              ? 'bg-white text-zinc-900 shadow-2xs'
              : 'text-zinc-500 hover:text-zinc-800'
              }`}
            title="Mobile Screen Preview"
          >
            <Smartphone size={13} />
            <span>Mobile</span>
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition ${deviceMode === 'desktop'
              ? 'bg-white text-zinc-900 shadow-2xs'
              : 'text-zinc-500 hover:text-zinc-800'
              }`}
            title="Desktop Card Preview"
          >
            <Laptop size={13} />
            <span>Card</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-medium text-zinc-600 bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1 rounded-lg transition"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-zinc-500" />
                <span>Copy URL</span>
              </>
            )}
          </button>
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1 rounded-lg transition"
            title="Open in new window"
          >
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Frame Container */}
      <div
        className={`w-full transition-all duration-300 ${deviceMode === 'mobile'
          ? 'max-w-[340px] sm:max-w-[360px]'
          : 'max-w-full'
          }`}
      >
        <div
          className={`relative transition-all duration-300 ${deviceMode === 'mobile'
            ? `rounded-[38px] p-3 shadow-2xl ${['clean', 'sunset', 'lavender', 'latte'].includes(activeTheme.id)
              ? 'bg-zinc-900 shadow-zinc-900/20 ring-1 ring-zinc-800'
              : 'bg-zinc-800 shadow-black/60 ring-1 ring-zinc-700'}`
            : 'rounded-2xl'
            }`}
        >
          {/* Top Speaker / Dynamic Island */}
          {deviceMode === 'mobile' && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-between px-2">
              <span className="w-2 h-2 rounded-full bg-zinc-900" />
              <span className="w-2 h-2 rounded-full bg-blue-900/60" />
            </div>
          )}

          {/* Inner Phone Screen */}
          <div
            className={`w-full ${deviceMode === 'mobile' ? 'rounded-[30px] overflow-hidden border border-black/10' : 'rounded-2xl'} ${activeTheme.pageBg} ${activeFontStyle.styleClass} transition-colors duration-300 relative`}
            style={deviceMode === 'mobile'
              ? { minHeight: '560px', maxHeight: '680px', overflowY: 'auto' }
              : { minHeight: '320px' }}
          >
            {/* Status Bar */}
            {deviceMode === 'mobile' && (
              <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold tracking-tight opacity-75 select-none">
                <span className={activeTheme.textColor}>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span className={`w-3 h-2 rounded-2xs border ${activeTheme.textColor === 'text-white' || activeTheme.textColor === 'text-slate-50' || activeTheme.textColor === 'text-emerald-50' ? 'border-white' : 'border-zinc-800'}`} />
                  <span className={`text-[10px] ${activeTheme.textColor}`}>5G</span>
                </div>
              </div>
            )}

            {/* Screen Content Wrapper */}
            <div className="p-4 sm:p-5 space-y-4">

              {/* Profile Card */}
              <div className={`${activeTheme.cardBg} ${activeTheme.cardBorder} ${activeTheme.cardShadow} border rounded-2xl p-4 text-center relative transition-all duration-300`}>

                {/* Avatar with Status */}
                <div className="relative inline-block mb-2.5">
                  {profile?.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name || 'User'}
                      className="w-18 h-18 rounded-full object-cover mx-auto ring-3 ring-black/5 shadow-xs"
                    />
                  ) : (
                    <div
                      className="w-18 h-18 rounded-full text-white text-xl font-bold flex items-center justify-center mx-auto shadow-xs"
                      style={{ backgroundColor: accentColor }}
                    >
                      {profile?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                  <span
                    className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-2xs"
                    title="Active"
                  />
                </div>

                {/* Name & Handle */}
                <div>
                  <div className="flex items-center justify-center gap-1.5">
                    <h2 className={`text-base font-bold tracking-tight ${activeTheme.textColor}`}>
                      {profile?.name || 'Your Name'}
                    </h2>
                    <span
                      className="text-[10px] px-1 py-0.2 rounded-full font-semibold"
                      style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                    >
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                    {profile?.username ? <>linkme.to/<span className="font-medium">{profile.username}</span></> : 'Choose your username'}
                  </p>

                  {profile?.title && (
                    <p className={`text-xs font-medium mt-1 leading-snug ${activeTheme.textColor} opacity-90`}>
                      {profile.title}
                    </p>
                  )}

                  {profile?.bio && (
                    <p className={`text-[11px] mt-1.5 leading-relaxed line-clamp-3 ${activeTheme.textMuted}`}>
                      {profile.bio}
                    </p>
                  )}
                </div>

                {/* Social Icons Strip */}
                {activeSocials.length > 0 && (
                  <div className="flex items-center justify-center flex-wrap gap-1.5 mt-3 pt-3 border-t border-black/5">
                    {activeSocials.map(platform => {
                      const val = profile.socials[platform.id];
                      const Icon = SOCIAL_ICONS[platform.id] || FaShareNodes;
                      return (
                        <a
                          key={platform.id}
                          href={getSocialUrl(platform.id, val)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition hover:scale-105"
                          title={platform.label}
                          style={{ color: activeTheme.textColor.includes('white') || activeTheme.textColor.includes('slate-50') ? '#ffffff' : '#18181b' }}
                        >
                          <Icon size={14} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Custom Featured Links */}
              {profile?.customLinks && profile.customLinks.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Featured Links
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      {profile.customLinks.length} Links
                    </span>
                  </div>

                  {profile.customLinks.map(link => {
                    const isPill = activeButtonStyle.id === 'pill';
                    const isSquare = activeButtonStyle.id === 'square';
                    const isOutline = activeButtonStyle.id === 'outline';

                    return (
                      <a
                        key={link.id}
                        href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full p-2.5 text-left transition duration-200 group relative border shadow-2xs ${isPill ? 'rounded-full px-4' : isSquare ? 'rounded-md' : isOutline ? 'rounded-xl border-2' : 'rounded-xl'
                          } ${link.highlight
                            ? 'ring-1 ring-amber-400/50'
                            : ''
                          } ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition"
                              style={{
                                backgroundColor: link.highlight ? accentColor : `${accentColor}15`,
                                color: link.highlight ? '#ffffff' : accentColor
                              }}
                            >
                              {getCustomLinkIcon(link.icon)}
                            </div>
                            <div className="min-w-0">
                              <p className={`text-xs font-semibold truncate ${activeTheme.textColor} group-hover:underline flex items-center gap-1`}>
                                <span>{link.title}</span>
                                {link.highlight && (
                                  <span className="text-[9px] bg-amber-400 text-zinc-950 font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                                    ★ Hot
                                  </span>
                                )}
                              </p>
                              {link.subtitle && (
                                <p className={`text-[10px] truncate ${activeTheme.textMuted}`}>
                                  {link.subtitle}
                                </p>
                              )}
                            </div>
                          </div>

                          <ExternalLink size={12} className="text-zinc-400 group-hover:text-zinc-600 transition shrink-0" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Photos & Portfolio Showcase */}
              {profile?.photos && profile.photos.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-1">
                    Visual Showcase & Photos
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {profile.photos.slice(0, 4).map(photo => (
                      <div
                        key={photo.id}
                        className={`${activeTheme.cardBg} ${activeTheme.cardBorder} border rounded-xl overflow-hidden group shadow-2xs`}
                      >
                        <div className="aspect-4/3 w-full bg-zinc-200 overflow-hidden relative">
                          <img
                            src={photo.url}
                            alt={photo.title || 'Work'}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        </div>
                        <div className="p-1.5">
                          <p className={`text-[11px] font-semibold truncate ${activeTheme.textColor}`}>
                            {photo.title}
                          </p>
                          {photo.caption && (
                            <p className={`text-[9px] truncate ${activeTheme.textMuted}`}>
                              {photo.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interests Tags */}
              {profile?.interests && profile.interests.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-1">
                    Interests & Focus
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {profile.interests.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${activeTheme.badgeBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {profile?.achievements && profile.achievements.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-1">
                    Milestones
                  </span>
                  <div className="space-y-1">
                    {profile.achievements.slice(0, 3).map(ach => (
                      <div
                        key={ach.id}
                        className={`flex items-center justify-between p-2 rounded-lg border text-[11px] ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Star size={11} className="text-amber-500 fill-amber-500 shrink-0" />
                          <span className={`truncate font-medium ${activeTheme.textColor}`}>{ach.title}</span>
                        </div>
                        {ach.year && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border shrink-0 ${activeTheme.badgeBg}`}>
                            {ach.year}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer inside mobile preview */}
              <div className="text-center pt-2 pb-1">
                <span className="text-[10px] text-zinc-400 flex items-center justify-center gap-1">
                  Powered by <span className="font-bold text-zinc-600">linkme.</span>
                </span>
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            {deviceMode === 'mobile' && (
              <div className="pb-2 pt-1 flex justify-center">
                <div className="w-28 h-1 bg-zinc-300 rounded-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
