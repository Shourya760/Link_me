export const getPortfolioOrigin = () => {
  if (import.meta.env.VITE_PUBLIC_URL) {
    return import.meta.env.VITE_PUBLIC_URL.replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://linkme-k4qb.onrender.com';
};

export const getPortfolioHost = () => {
  try {
    const origin = getPortfolioOrigin();
    return new URL(origin).host;
  } catch {
    return 'linkme-k4qb.onrender.com';
  }
};

export const getPortfolioUrl = (username) => {
  const origin = getPortfolioOrigin();
  const cleanUsername = String(username || '').trim();
  return cleanUsername ? `${origin}/${encodeURIComponent(cleanUsername)}` : `${origin}/portfolio`;
};
