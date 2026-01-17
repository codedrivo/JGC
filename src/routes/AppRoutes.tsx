import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import ClientLayout from '../layouts/ClientLayout';
import AuthLayout from '../layouts/AuthLayout';

// Auth Pages
import Login from '../pages/auth/Login/Login';
import ForgotPassword from '../pages/auth/ForgotPassword/ForgotPassword';

// Public Pages
import Home from '../pages/public/Home/Home';
import About from '../pages/public/About/About';
import Services from '../pages/public/Services/Services';
import Contact from '../pages/public/Contact/Contact';

// Test Page
import TestPage from '../pages/TestPage';

// Admin Pages
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import ReportLibrary from '../pages/admin/ReportLibrary/ReportLibrary';
import Clients from '../pages/admin/Clients/Clients';
import Users from '../pages/admin/Users/Users';
import Billing from '../pages/admin/Billing/Billing';
import Analytics from '../pages/admin/Analytics/Analytics';

// Client Pages
import ClientReportLibrary from '../pages/client/ReportLibrary/ReportLibrary';
import MyAccount from '../pages/client/MyAccount/MyAccount';
import ClientBilling from '../pages/client/Billing/Billing';
import FAQ from '../pages/client/FAQ/FAQ';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Test Page Route */}
      <Route path="/test" element={<TestPage />} />

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth Routes */}
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/forgot-password" element={<AuthLayout />}>
        <Route index element={<ForgotPassword />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reports" element={<ReportLibrary />} />
        <Route path="clients" element={<Clients />} />
        <Route path="users" element={<Users />} />
        <Route path="billing" element={<Billing />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* Client Routes */}
      <Route path="/client" element={<ClientLayout />}>
        <Route index element={<ClientReportLibrary />} />
        <Route path="reports" element={<ClientReportLibrary />} />
        <Route path="account" element={<MyAccount />} />
        <Route path="billing" element={<ClientBilling />} />
        <Route path="faq" element={<FAQ />} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
