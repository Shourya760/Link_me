import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Settings from '../pages/Settings';
import Portfolio from '../pages/Portfolio';
import Login from '../pages/Login';



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/p/:username" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}