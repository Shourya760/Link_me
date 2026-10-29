const PORTFOLIO_ORIGIN = (import.meta.env.VITE_PUBLIC_URL || 'https://linkme-k4qb.onrender.com')
  .replace(/\/+$/, '');

export const getPortfolioUrl = (username) => (
  username ? `${PORTFOLIO_ORIGIN}/${encodeURIComponent(username)}` : `${PORTFOLIO_ORIGIN}/portfolio`
);
