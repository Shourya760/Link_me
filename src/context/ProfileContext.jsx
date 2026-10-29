import { createContext, useContext, useState, useEffect } from 'react';
import { getStoredProfile, saveStoredProfile, EMPTY_PROFILE, normalizeProfile, EVENT_NAME } from '../utils/storage';
import { getMyProfile, updateMyProfile } from '../services/profileServices';
import { logoutUser as logoutRequest } from '../services/userServices';

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(getStoredProfile);
  const [loading, setLoading] = useState(Boolean(localStorage.getItem('linkme_token')));
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('linkme_token')) {
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    getMyProfile()
      .then(({ profile: remoteProfile }) => {
        if (cancelled) return;
        const nextProfile = normalizeProfile({ ...remoteProfile, email: remoteProfile.email || getStoredProfile().email });
        saveStoredProfile(nextProfile);
        setProfile(nextProfile);
      })
      .catch((error) => {
        if (!cancelled && error.status === 401) {
          localStorage.removeItem('linkme_token');
          setProfile(normalizeProfile(EMPTY_PROFILE));
        }
      })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const handleSync = () => setProfile(getStoredProfile());
    window.addEventListener(EVENT_NAME, handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener(EVENT_NAME, handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const commitProfile = (updated) => {
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const updateProfile = (fields) => commitProfile({ ...profile, ...fields });
  const updateList = (key, update) => commitProfile({
    ...profile,
    [key]: update(profile[key] || [])
  });

  const saveProfile = async () => {
    if (loading) throw new Error('Your profile is still loading. Please try again.');
    setSaving(true);
    try {
      const { email } = profile;
      const excludedFields = ['email', 'isAuthenticated', 'userId', '_id', 'createdAt', 'updatedAt', '__v'];
      const profileData = Object.fromEntries(
        Object.entries(profile).filter(([field]) => !excludedFields.includes(field))
      );
      const { profile: savedProfile } = await updateMyProfile(profileData);
      const updated = normalizeProfile({ ...savedProfile, email });
      commitProfile(updated);
      return updated;
    } finally {
      setSaving(false);
    }
  };

  const updateTheme = (fields) => updateProfile({ theme: { ...profile.theme, ...fields } });
  const updateSocial = (network, handle) => updateProfile({ socials: { ...profile.socials, [network]: handle } });

  const toggleSocial = (network, enable, defaultHandle = '') => {
    const current = profile.socials?.[network] || '';
    const newHandle = enable ? (current || defaultHandle || profile.username || '') : '';
    updateSocial(network, newHandle);
  };

  const addCustomLink = (link) => {
    const newLink = {
      id: Date.now().toString(),
      title: link.title || 'My Featured Link',
      url: link.url || 'https://',
      subtitle: link.subtitle || '',
      highlight: Boolean(link.highlight),
      icon: link.icon || 'link'
    };
    updateList('customLinks', (links) => [...links, newLink]);
  };

  const updateCustomLink = (id, fields) => {
    updateList('customLinks', (links) => links.map((item) => item.id === id ? { ...item, ...fields } : item));
  };

  const removeCustomLink = (id) => {
    updateList('customLinks', (links) => links.filter((item) => item.id !== id));
  };

  const addPhoto = (photo) => {
    const newPhoto = {
      id: Date.now().toString(),
      url: photo.url,
      title: photo.title || 'Featured Work',
      caption: photo.caption || '',
      link: photo.link || ''
    };
    updateList('photos', (photos) => [...photos, newPhoto]);
  };

  const updatePhoto = (id, fields) => {
    updateList('photos', (photos) => photos.map((photo) => photo.id === id ? { ...photo, ...fields } : photo));
  };

  const removePhoto = (id) => {
    updateList('photos', (photos) => photos.filter((photo) => photo.id !== id));
  };

  const addInterest = (interest) => {
    const trimmed = interest.trim();
    if (!trimmed) return;
    updateList('interests', (items) => items.includes(trimmed) ? items : [...items, trimmed]);
  };

  const removeInterest = (interest) => {
    updateList('interests', (items) => items.filter((item) => item !== interest));
  };

  const addAchievement = (title, year) => {
    if (!title.trim()) return;
    const item = {
      id: Date.now().toString(),
      title: title.trim(),
      year: year.trim() || new Date().getFullYear().toString()
    };
    updateList('achievements', (items) => [item, ...items]);
  };

  const removeAchievement = (id) => {
    updateList('achievements', (items) => items.filter((item) => item.id !== id));
  };

  const login = (email, serverProfile) => {
    const updated = normalizeProfile({ ...(serverProfile || EMPTY_PROFILE), email: email || '', isAuthenticated: true });
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const register = (name, username, email, serverProfile) => {
    const updated = {
      ...profile,
      ...(serverProfile || {}),
      name: name || profile.name,
      username: username || profile.username,
      email: email || profile.email,
      isAuthenticated: true
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const logout = async () => {
    try { await logoutRequest(); } catch { /* clear local session even if the API is unavailable */ }
    localStorage.removeItem('linkme_token');
    const updated = normalizeProfile(EMPTY_PROFILE);
    setProfile(updated);
    localStorage.removeItem('linkme_profile');
    window.dispatchEvent(new Event(EVENT_NAME));
  };

  const resetToDefault = () => {
    const clearedProfile = normalizeProfile({
      ...EMPTY_PROFILE,
      username: profile.username,
      email: profile.email,
    });
    setProfile(clearedProfile);
    saveStoredProfile(clearedProfile);
  };

  const value = {
    profile,
    loading,
    saving,
    saveProfile,
    updateProfile,
    updateTheme,
    updateSocial,
    toggleSocial,
    addCustomLink,
    updateCustomLink,
    removeCustomLink,
    addPhoto,
    updatePhoto,
    removePhoto,
    addInterest,
    removeInterest,
    addAchievement,
    removeAchievement,
    login,
    register,
    logout,
    resetToDefault
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used inside ProfileProvider');
  return context;
}
