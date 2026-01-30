import { Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from '../layouts/AdminLayout';
import ClientLayout from '../layouts/ClientLayout';
import AuthLayout from '../layouts/AuthLayout';

// Auth pages
import Login from '../pages/auth/Login/Login';
import ForgotPassword from '../pages/auth/ForgotPassword/ForgotPassword';
import VerifySecurityCode from '../pages/auth/ForgotPassword/VerifySecurityCode';
import ResetPassword from '../pages/auth/ResetPassword/ResetPassword';

// Public pages
import About from '../pages/public/About/About';
import Services from '../pages/public/Services/Services';
import Contact from '../pages/public/Contact/Contact';

// Route groups
import AdminRoutes from './AdminRoutes';
import ClientRoutes from './ClientRoutes';

import RequireRole from './RequireRole';

const AppRoutes = () => {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth */}
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/forgot-password" element={<AuthLayout />}>
        <Route index element={<ForgotPassword />} />
      </Route>

      <Route path="/verify-security-code" element={<AuthLayout />}>
        <Route index element={<VerifySecurityCode />} />
      </Route>

      <Route path="/reset-password" element={<AuthLayout />}>
        <Route index element={<ResetPassword />} />
      </Route>

      {/* Public */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />


      {/* ADMIN */}
      <Route element={<RequireRole allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          {AdminRoutes}
        </Route>
      </Route>

      {/* CLIENT */}
      <Route element={<RequireRole allowedRole="user" />}>
        <Route path="/client" element={<ClientLayout />}>
          {ClientRoutes}
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />

    </Routes>
  );
};

export default AppRoutes;
