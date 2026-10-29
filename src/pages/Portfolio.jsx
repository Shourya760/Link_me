import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Check,
  Copy,
  ExternalLink,
  ArrowLeft,
  Star,
  QrCode,
  Share2,
  Download,
  BookOpen,
  Calendar,
  Code,
  ShoppingBag,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';
import {
  FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaGithub, FaTiktok,
  FaSpotify, FaDiscord, FaTwitch, FaWhatsapp, FaTelegram, FaEnvelope,
  FaGlobe, FaBehance, FaDribbble
} from 'react-icons/fa';
import { FaXTwitter, FaShareNodes } from 'react-icons/fa6';
import { useProfile } from '../Context/ProfileContext';
import { THEMES, BUTTON_STYLES, FONT_STYLES, PLATFORMS } from '../utils/storage';
import { getPublicProfile } from '../Services/profileServices';

const SOCIAL_ICONS = {
  instagram: FaInstagram, youtube: FaYoutube, facebook: FaFacebook,
  x: FaXTwitter, linkedin: FaLinkedin, github: FaGithub, tiktok: FaTiktok,
  spotify: FaSpotify, discord: FaDiscord, twitch: FaTwitch,
  whatsapp: FaWhatsapp, telegram: FaTelegram, email: FaEnvelope,
  website: FaGlobe, behance: FaBehance, dribbble: FaDribbble
};

export default function Portfolio() {
  const { username } = useParams();
  const { profile: localProfile } = useProfile();
  const [remoteProfile, setRemoteProfile] = useState(null);
  const [publicProfileError, setPublicProfileError] = useState('');
  const profile = remoteProfile || localProfile;
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState(null);

  useEffect(() => {
    if (!username || username.toLowerCase() === localProfile.username?.toLowerCase()) {
      setRemoteProfile(null);
      setPublicProfileError('');
      return;
    }
    let cancelled = false;
    getPublicProfile(username)
      .then(({ profile: fetchedProfile }) => { if (!cancelled) setRemoteProfile(fetchedProfile); })
      .catch((error) => { if (!cancelled) setPublicProfileError(error.message); });
    return () => { cancelled = true; };
  }, [username, localProfile.username]);

  const isOwner = Boolean(
    localProfile.isAuthenticated &&
    (!username || username.toLowerCase() === localProfile.username?.toLowerCase())
  );
  const shareUrl = `${window.location.origin}${profile.username ? `/p/${profile.username}` : '/portfolio'}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(shareUrl)}&margin=10`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeTheme = THEMES.find(t => t.id === profile?.theme?.id) || THEMES[0];
  const activeButtonStyle = BUTTON_STYLES.find(b => b.id === profile?.theme?.buttonStyle) || BUTTON_STYLES[1];
  const activeFontStyle = FONT_STYLES.find(f => f.id === profile?.theme?.fontStyle) || FONT_STYLES[0];
  const accentColor = profile?.theme?.accentColor || activeTheme.accentColor;

  if (publicProfileError) return <main className="min-h-screen grid place-items-center p-6 text-center"><div><h1 className="text-xl font-bold">Profile unavailable</h1><p className="text-sm text-zinc-500 mt-2">{publicProfileError}</p><Link to="/" className="inline-block mt-4 underline">Go home</Link></div></main>;

  // Active socials
  const activeSocials = PLATFORMS.filter(p => profile?.socials?.[p.id]?.trim());

  const getCustomLinkIcon = (iconName) => {
    switch (iconName) {
      case 'book': return <BookOpen size={16} />;
      case 'calendar': return <Calendar size={16} />;
      case 'code': return <Code size={16} />;
      case 'shop': return <ShoppingBag size={16} />;
      case 'sparkles': return <Sparkles size={16} />;
      default: return <LinkIcon size={16} />;
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

  const isPill = activeButtonStyle.id === 'pill';
  const isSquare = activeButtonStyle.id === 'square';
  const isOutline = activeButtonStyle.id === 'outline';

  return (
    <div className={`min-h-screen ${activeTheme.pageBg} ${activeFontStyle.styleClass} py-8 px-4 sm:px-6 flex flex-col justify-between transition-colors duration-300`}>

      {/* Top Floating Controls */}
      <div className="max-w-2xl w-full mx-auto flex items-center justify-between mb-8">
        {isOwner ? (
          <Link
            to="/"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-zinc-200/80 text-zinc-700 hover:text-zinc-950 hover:bg-white flex items-center gap-1.5 transition shadow-2xs"
          >
            <ArrowLeft size={14} />
            <span>Edit Profile</span>
          </Link>
        ) : null}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            className="flex items-center gap-1.5 text-xs font-medium bg-white/80 backdrop-blur-xs border border-zinc-200/80 px-3 py-1.5 rounded-full text-zinc-700 shadow-2xs hover:bg-white transition cursor-pointer"
            title="Show QR Code"
          >
            <QrCode size={14} />
            <span className="hidden sm:inline">QR Code</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full text-zinc-800 shadow-2xs hover:bg-zinc-50 transition active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-600 stroke-[2.5]" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-zinc-500" />
                <span>Share Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Portfolio Container Card */}
      <main className={`max-w-xl w-full mx-auto ${activeTheme.cardBg} ${activeTheme.cardBorder} ${activeTheme.cardShadow} border rounded-3xl p-6 sm:p-10 shadow-lg space-y-8 transition-all duration-300`}>

        {/* Profile Header */}
        <div className="text-center space-y-3">
          <div className="relative inline-block">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name || 'User'}
                className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-black/5 border-2 border-white shadow-sm"
              />
            ) : (
              <div
                className="w-24 h-24 rounded-full text-white text-3xl font-bold flex items-center justify-center mx-auto shadow-sm"
                style={{ backgroundColor: accentColor }}
              >
                {profile.name?.charAt(0) || 'U'}
              </div>
            )}
            <span
              className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-2xs"
              title="Active Creator"
            />
          </div>

          <div>
            <div className="flex items-center justify-center gap-2">
              <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight ${activeTheme.textColor}`}>
                {profile.name || 'Your Name'}
              </h1>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5 shadow-2xs"
                style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                title="Verified Creator"
              >
                ✓
              </span>
            </div>

            <p className="text-xs font-mono text-zinc-400 mt-1">
              {profile.username ? `linkme.to/${profile.username}` : 'Choose your username'}
            </p>

            {profile.title && (
              <p className={`text-sm font-semibold mt-2 leading-snug ${activeTheme.textColor} opacity-90`}>
                {profile.title}
              </p>
            )}

            {profile.bio && (
              <p className={`text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed ${activeTheme.textColor}`}>
                {profile.bio}
              </p>
            )}
          </div>

          {/* Social Icons Strip */}
          {activeSocials.length > 0 && (
            <div className="flex items-center justify-center flex-wrap gap-2 pt-3">
              {activeSocials.map(platform => {
                const val = profile.socials[platform.id];
                const Icon = SOCIAL_ICONS[platform.id] || FaShareNodes;
                return (
                  <a
                    key={platform.id}
                    href={getSocialUrl(platform.id, val)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition hover:scale-110 active:scale-95 ${activeTheme.textColor} `}
                    title={platform.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Custom Featured Links */}
        {
          profile.customLinks && profile.customLinks.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-center text-zinc-400">
                Featured Links & Actions
              </h2>
              <div className="space-y-2.5">
                {profile.customLinks.map(link => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full p-3.5 text-left transition duration-200 group relative border shadow-2xs hover:scale-[1.01] active:scale-[0.99] ${isPill ? 'rounded-full px-5' : isSquare ? 'rounded-lg' : isOutline ? 'rounded-2xl border-2' : 'rounded-2xl'
                      } ${link.highlight
                        ? 'ring-2 ring-amber-400/60 shadow-md'
                        : ''
                      } ${activeTheme.cardBg} ${activeTheme.cardBorder}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition"
                          style={{
                            backgroundColor: link.highlight ? accentColor : `${accentColor}15`,
                            color: link.highlight ? '#ffffff' : accentColor
                          }}
                        >
                          {getCustomLinkIcon(link.icon)}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate ${activeTheme.textColor} group-hover:underline flex items-center gap-1.5`}>
                            <span>{link.title}</span>
                            {link.highlight && (
                              <span className="text-[10px] bg-amber-400 text-zinc-950 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                ★ Hot
                              </span>
                            )}
                          </p>
                          {link.subtitle && (
                            <p className={`text-xs truncate ${activeTheme.textMuted} mt-0.5`}>
                              {link.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <ExternalLink size={15} className="text-zinc-400 group-hover:text-zinc-600 transition shrink-0 mr-1" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )
        }

        {/* Visual Photos Showcase */}
        {
          profile.photos && profile.photos.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-center text-zinc-400">
                Visual Showcase & Media
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.photos.map(photo => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhotoModal(photo)}
                    className={`group rounded-2xl border ${activeTheme.cardBorder} overflow-hidden bg-black/5 hover:shadow-md transition cursor-pointer`}
                  >
                    <div className="aspect-4/3 w-full overflow-hidden bg-zinc-200 relative">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <p className={`text-xs font-bold truncate ${activeTheme.textColor}`}>
                        {photo.title}
                      </p>
                      {photo.caption && (
                        <p className={`text-[11px] truncate ${activeTheme.textMuted} mt-0.5`}>
                          {photo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        }

        {/* Interests & Skills */}
        {
          profile.interests && profile.interests.length > 0 && (
            <section className="space-y-2.5 text-center">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Interests & Focus
              </h2>
              <div className="flex flex-wrap justify-center gap-1.5">
                {profile.interests.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${activeTheme.badgeBg}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )
        }

        {/* Achievements */}
        {
          profile.achievements && profile.achievements.length > 0 && (
            <section className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-center text-zinc-400">
                Milestones & Recognition
              </h2>
              <div className="space-y-2">
                {profile.achievements.map(ach => (
                  <div
                    key={ach.id}
                    className={`flex items-center justify-between p-3 rounded-xl border ${activeTheme.cardBorder} text-xs`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Star size={13} className="text-amber-500 fill-amber-500 shrink-0" />
                      <span className={`font-semibold truncate ${activeTheme.textColor}`}>
                        {ach.title}
                      </span>
                    </div>
                    {ach.year && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${activeTheme.badgeBg}`}>
                        {ach.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        }
      </main >

      {/* Footer Branding */}
      < footer className="text-center py-8" >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition"
        >
          <span>Powered by</span>
          <span className="font-bold text-zinc-800">linkme.</span>
          <span>• Create your own free link</span>
        </Link>
      </footer >

      {/* QR Code Modal */}
      {
        showQrModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full text-center space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-zinc-900">QR Code for @{profile.username}</h4>
                <button
                  type="button"
                  onClick={() => setShowQrModal(false)}
                  className="text-zinc-400 hover:text-zinc-700 text-lg font-bold p-1 cursor-pointer"
                >
                  ×
                </button>
              </div>

              <p className="text-xs text-zinc-500">
                Scan with camera to open {profile.name}'s linkme profile.
              </p>

              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex justify-center">
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="w-48 h-48 rounded-xl shadow-xs"
                />
              </div>

              <p className="text-xs font-mono font-medium text-zinc-600">
                linkme.to/{profile.username}
              </p>

              <div className="flex gap-2 pt-2">
                <a
                  href={qrCodeUrl}
                  download={`linkme-${profile.username}-qr.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white py-2 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <Download size={14} />
                  <span>Save Image</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowQrModal(false)}
                  className="px-4 py-2 border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-xl text-xs font-semibold transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* Photo Lightbox Modal */}
      {
        selectedPhotoModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedPhotoModal(null)}>
            <div className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-4/3 w-full bg-zinc-950 overflow-hidden">
                <img src={selectedPhotoModal.url} alt={selectedPhotoModal.title} className="w-full h-full object-contain" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">{selectedPhotoModal.title}</h3>
                  {selectedPhotoModal.caption && (
                    <p className="text-xs text-zinc-500 mt-0.5">{selectedPhotoModal.caption}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {selectedPhotoModal.link && (
                    <a
                      href={selectedPhotoModal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition text-xs font-semibold flex items-center gap-1"
                    >
                      <span>Visit Link</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedPhotoModal(null)}
                    className="px-3 py-1.5 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
