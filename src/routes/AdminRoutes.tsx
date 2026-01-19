import { Route } from 'react-router-dom';

// Admin Pages
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import ReportLibrary from '../pages/admin/ReportLibrary/ReportLibrary';
import Clients from '../pages/admin/Clients/Clients';
import Users from '../pages/admin/Users/Users';
import Billing from '../pages/admin/Billing/Billing';
import Analytics from '../pages/admin/Analytics/Analytics';

const AdminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<ReportLibrary />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/users" element={<Users />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/analytics" element={<Analytics />} />
    </>
  );
};

export default AdminRoutes;
