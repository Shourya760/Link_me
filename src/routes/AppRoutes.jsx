import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../Layout/ProtectedLayout.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Portfolio from '../Pages/Portfolio.jsx';
import Home from '../pages/Home';
import Settings from '../Pages/Settings.jsx';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/p/:username" element={<Portfolio />} />
            <Route element={<ProtectedLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
