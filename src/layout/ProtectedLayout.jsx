import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedLayout() {
  const token = localStorage.getItem('linkme_token');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
