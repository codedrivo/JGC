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
import AllClients from '../pages/admin/ClientManagement/Clients/AllClients';
import Users from '../pages/admin/Users/Users';
import Billing from '../pages/admin/Billing/Billing';
import Analytics from '../pages/admin/Analytics/Analytics';
import AddNewClient from '../pages/admin/ClientManagement/AddNewClient/AddNewClient';

// Client Pages
import MyAccount from '../pages/client/MyAccount/MyAccount';
import ClientBilling from '../pages/client/Billing/Billing';
import FAQ from '../pages/client/FAQ/FAQ';
import GlobalSetup from '../pages/GlobalSetup';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Test Page Route */}
      <Route path="/test" element={<TestPage />} />
      <Route path="/global-setup" element={<GlobalSetup />} />

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
        <Route path="client-management/add-new" element={<AddNewClient />} />
        <Route path="client-management/clients" element={<AllClients />} />
        <Route path="client-management/users" element={<Users />} />
        <Route path="billing" element={<Billing />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* Client Routes - Top level paths as per Sidebar */}
      <Route element={<ClientLayout />}>
        <Route path="/report-library" element={<ReportLibrary />} />
        <Route path="/ask-judy-ai" element={<div>Ask Judy AI Page</div>} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/billing" element={<ClientBilling />} />
        <Route path="/faq" element={<FAQ />} />
      </Route>

      <Route path="/client" element={<ClientLayout />}>
        {/* Keep /client base routes just in case, but redirect or map to same components */}
        <Route index element={<ReportLibrary />} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
