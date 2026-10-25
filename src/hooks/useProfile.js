import { useState, useEffect } from 'react';
import { getStoredProfile, saveStoredProfile, resetStoredProfile, EVENT_NAME } from '../utils/storage';

export function useProfile() {
  const [profile, setProfile] = useState(getStoredProfile);

  useEffect(() => {
    const handleSync = () => setProfile(getStoredProfile());
    window.addEventListener(EVENT_NAME, handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener(EVENT_NAME, handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const updateProfile = (fields) => {
    const updated = { ...profile, ...fields };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const updateTheme = (themeFields) => {
    const updated = {
      ...profile,
      theme: { ...profile.theme, ...themeFields }
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const updateSocial = (network, handle) => {
    const updated = {
      ...profile,
      socials: { ...profile.socials, [network]: handle }
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const toggleSocial = (network, enable, defaultHandle = '') => {
    const current = profile.socials?.[network] || '';
    const newHandle = enable ? (current || defaultHandle || profile.username || 'user') : '';
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
    const updated = {
      ...profile,
      customLinks: [...(profile.customLinks || []), newLink]
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const updateCustomLink = (id, fields) => {
    const updatedLinks = (profile.customLinks || []).map(item =>
      item.id === id ? { ...item, ...fields } : item
    );
    const updated = { ...profile, customLinks: updatedLinks };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const removeCustomLink = (id) => {
    const updated = {
      ...profile,
      customLinks: (profile.customLinks || []).filter(item => item.id !== id)
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const addPhoto = (photo) => {
    const newPhoto = {
      id: Date.now().toString(),
      url: photo.url,
      title: photo.title || 'Featured Work',
      caption: photo.caption || '',
      link: photo.link || ''
    };
    const updated = {
      ...profile,
      photos: [...(profile.photos || []), newPhoto]
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const updatePhoto = (id, fields) => {
    const updatedPhotos = (profile.photos || []).map(p =>
      p.id === id ? { ...p, ...fields } : p
    );
    const updated = { ...profile, photos: updatedPhotos };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const removePhoto = (id) => {
    const updated = {
      ...profile,
      photos: (profile.photos || []).filter(p => p.id !== id)
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const addInterest = (interest) => {
    const trimmed = interest.trim();
    if (!trimmed || (profile.interests || []).includes(trimmed)) return;
    const updated = { ...profile, interests: [...(profile.interests || []), trimmed] };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const removeInterest = (interest) => {
    const updated = {
      ...profile,
      interests: (profile.interests || []).filter(i => i !== interest)
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const addAchievement = (title, year) => {
    if (!title.trim()) return;
    const item = {
      id: Date.now().toString(),
      title: title.trim(),
      year: year.trim() || new Date().getFullYear().toString()
    };
    const updated = { ...profile, achievements: [item, ...(profile.achievements || [])] };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const removeAchievement = (id) => {
    const updated = {
      ...profile,
      achievements: (profile.achievements || []).filter(a => a.id !== id)
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const login = (email) => {
    const updated = { ...profile, email: email || profile.email, isAuthenticated: true };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const register = (name, username, email) => {
    const updated = {
      ...profile,
      name: name || profile.name,
      username: username || profile.username,
      email: email || profile.email,
      isAuthenticated: true
    };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const logout = () => {
    const updated = { ...profile, isAuthenticated: false };
    setProfile(updated);
    saveStoredProfile(updated);
  };

  const resetToDefault = () => {
    const def = resetStoredProfile();
    setProfile(def);
  };

  return {
    profile,
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
}
