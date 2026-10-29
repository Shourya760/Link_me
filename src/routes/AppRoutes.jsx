import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../Layout/ProtectedLayout.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Portfolio from '../Pages/Portfolio.jsx';
import Home from '../Pages/Home.jsx';
import Settings from '../Pages/Settings.jsx';


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
            <Route path="/p/:username" element={<Portfolio />} />
            <Route path="/:username" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
