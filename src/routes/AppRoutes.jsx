import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../Layout/ProtectedLayout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import Home from '../pages/Home';
import Settings from '../pages/Settings.jsx';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Route>
            <Route path="/:username" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
