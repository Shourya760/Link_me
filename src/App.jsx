import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import { ProfileProvider } from './Context/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProfileProvider>
  );
}
