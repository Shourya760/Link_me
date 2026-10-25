import { useState } from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaSpotify,
  FaDiscord,
  FaTwitch,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGlobe,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';

import {
  FaXTwitter,
  FaLink,
  FaBookOpen,
  FaCalendarDays,
  FaCode,
  FaShop,
  FaWandMagicSparkles,
  FaPlus,
  FaTrash,
  FaStar,
  FaShareNodes,
} from 'react-icons/fa6';

import { PLATFORMS } from '../../utils/storage';

const SOCIAL_ICONS = {
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

const CATEGORIES = [
  { id: 'all', label: 'All Platforms' },
  { id: 'social', label: 'Social Networks' },
  { id: 'tech', label: 'Tech & Code' },
  { id: 'media', label: 'Media & Streaming' },
  { id: 'contact', label: 'Contact & Chat' },
  { id: 'design', label: 'Design & Portfolios' },
];

const CUSTOM_LINK_ICONS = [
  { id: 'link', label: 'Default Link', icon: FaLink },
  { id: 'book', label: 'Newsletter / Blog', icon: FaBookOpen },
  { id: 'calendar', label: 'Book a Call', icon: FaCalendarDays },
  { id: 'code', label: 'Code / Projects', icon: FaCode },
  { id: 'shop', label: 'Merch / Store', icon: FaShop },
  {
    id: 'sparkles',
    label: 'Special / Event',
    icon: FaWandMagicSparkles,
  },
];

export default function Step2Links({
  profile,
  updateSocial,
  toggleSocial,
  addCustomLink,
  updateCustomLink,
  removeCustomLink
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newIcon, setNewIcon] = useState('link');
  const [newHighlight, setNewHighlight] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Filter platforms by category
  const filteredPlatforms = PLATFORMS.filter(p =>
    selectedCategory === 'all' ? true : p.category === selectedCategory
  );

  const activeCount = PLATFORMS.filter(p => profile.socials?.[p.id]?.trim()).length;

  const handleCreateCustomLink = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    addCustomLink({
      title: newTitle.trim(),
      url: newUrl.trim(),
      subtitle: newSubtitle.trim(),
      icon: newIcon,
      highlight: newHighlight
    });

    setNewTitle('');
    setNewUrl('');
    setNewSubtitle('');
    setNewIcon('link');
    setNewHighlight(false);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
              2. Select Required Links & Platforms
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Select which social accounts and custom destination links you want to feature on your page.
            </p>
          </div>
          <span className="text-xs font-semibold bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full border border-zinc-200">
            {activeCount} Selected
          </span>
        </div>
      </div>



      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition cursor-pointer ${selectedCategory === cat.id
              ? 'bg-zinc-900 text-white shadow-2xs'
              : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Platforms Selector Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Choose Required Social Links
          </span>
          <span className="text-[11px] text-zinc-400">
            Click card to enable or disable
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredPlatforms.map(platform => {
            const currentValue = profile.socials?.[platform.id] || '';
            const isEnabled = Boolean(currentValue.trim());
            const Icon = SOCIAL_ICONS[platform.id] || FaShareNodes;

            return (
              <div
                key={platform.id}
                className={`p-3.5 rounded-2xl border transition-all ${isEnabled
                  ? 'bg-white border-zinc-900 ring-1 ring-zinc-900/10 shadow-xs'
                  : 'bg-zinc-50/70 border-zinc-200/80 hover:border-zinc-300'
                  }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition shrink-0 ${isEnabled ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'
                      }`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 leading-tight">
                        {platform.label}
                      </p>
                      <p className="text-[10px] text-zinc-400 capitalize">
                        {platform.category}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Checkbox Button */}
                  <button
                    type="button"
                    onClick={() => toggleSocial(platform.id, !isEnabled, profile.username)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition cursor-pointer ${isEnabled
                      ? 'bg-zinc-900 text-white'
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                      }`}
                  >
                    {isEnabled ? 'Selected ✓' : '+ Select'}
                  </button>
                </div>

                {/* Handle Input Field if Enabled */}
                {isEnabled && (
                  <div className="pt-1.5 border-t border-zinc-100">
                    <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                      Your {platform.label} handle / link
                    </label>
                    <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-2.5 py-1.5 text-xs focus-within:border-zinc-900 focus-within:bg-white transition">
                      {platform.prefix && (
                        <span className="text-zinc-400 font-mono text-[11px] select-none mr-0.5">
                          {platform.prefix}
                        </span>
                      )}
                      <input
                        type="text"
                        value={currentValue}
                        onChange={(e) => updateSocial(platform.id, e.target.value)}
                        placeholder={platform.placeholder}
                        className="w-full bg-transparent focus:outline-none text-zinc-900 font-medium text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Action Links Section */}
      <div className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-zinc-900">
              Custom Destination Links
            </h3>
            <p className="text-xs text-zinc-500">
              Add links to your portfolio projects, store, newsletter, bookings, or downloads.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddModal(!showAddModal)}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-2xs transition cursor-pointer"
          >
            <FaPlus size={14} />
            <span>Add Link</span>
          </button>
        </div>
        {/* Form to Add New Link */}
        {showAddModal && (
          <form onSubmit={handleCreateCustomLink} className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-zinc-800">New Custom Link</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-1">
                  Link Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Read My Substack Newsletter"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-600 mb-1">
                  Destination URL
                </label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-zinc-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-600 mb-1">
                Subtitle / Description (optional)
              </label>
              <input
                type="text"
                value={newSubtitle}
                onChange={(e) => setNewSubtitle(e.target.value)}
                placeholder="e.g. Weekly essays on design & code"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-200 bg-white focus:outline-none focus:border-zinc-900"
              />
            </div>
            {/* Icon picker */}
            <div>
              <label className="block text-xs font-medium text-zinc-600 mb-1">
                Link Icon
              </label>
              <div className="flex flex-wrap gap-2">
                {CUSTOM_LINK_ICONS.map(ic => {
                  const Icon = ic.icon;
                  const isSelected = newIcon === ic.id;
                  return (
                    <button
                      key={ic.id}
                      type="button"
                      onClick={() => setNewIcon(ic.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition cursor-pointer border ${isSelected
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                        }`}
                    >
                      <Icon size={13} />
                      <span>{ic.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Highlight Toggle */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="highlight"
                checked={newHighlight}
                onChange={(e) => setNewHighlight(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <label htmlFor="highlight" className="text-xs text-zinc-700 font-medium flex items-center gap-1 cursor-pointer">
                <FaStar size={13} className="text-amber-500 fill-amber-500" />
                <span>Feature with highlight badge ("Hot / Featured")</span>
              </label>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1.5 text-xs text-zinc-600 hover:text-zinc-900 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-1.5 rounded-xl text-xs font-semibold transition"
              >
                Save Custom Link
              </button>
            </div>
          </form>
        )}
        {/* Existing Custom Links List */}
        <div className="space-y-2">
          {profile.customLinks && profile.customLinks.length > 0 ? (
            profile.customLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/90 bg-zinc-50/50 hover:bg-zinc-50 transition gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-zinc-200/70 text-zinc-700 flex items-center justify-center shrink-0">
                    <FaLink size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 truncate flex items-center gap-1.5">
                      <span>{link.title}</span>
                      {link.highlight && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-full">
                          ★ Featured
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono truncate">
                      {link.url}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => updateCustomLink(link.id, { highlight: !link.highlight })}
                    className={`p-1.5 rounded-lg border text-xs transition cursor-pointer ${link.highlight
                      ? 'border-amber-300 bg-amber-50 text-amber-600'
                      : 'border-zinc-200 text-zinc-400 hover:text-amber-500 hover:bg-white'
                      }`}
                    title="Toggle featured status"
                  >
                    <FaStar size={13} className={link.highlight ? 'fill-amber-500' : ''} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeCustomLink(link.id)}
                    className="p-1.5 rounded-lg border border-zinc-200 text-zinc-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition cursor-pointer"
                    title="Delete link"
                  >
                    <FaTrash size={13} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 border border-dashed border-zinc-200 rounded-xl"><p className="text-xs text-zinc-400">No custom links added yet.</p>
              <button
                type="button"
                onClick={() => setShowAddModal(true)}
                className="mt-1.5 text-xs text-zinc-900 font-semibold hover:underline"
              >
                + Add your first custom link
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
