import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Settings from '../Pages/Settings';
import Portfolio from '../Pages/Portfolio';
import Login from '../Pages/Login';
import ProtectedLayout from '../Layout/ProtectedLayout';


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
