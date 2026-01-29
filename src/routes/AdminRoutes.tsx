import { Route } from 'react-router-dom';

// Admin pages
import ReportLibrary from '../pages/admin/ReportLibrary/ReportLibrary';
import Clients from '../pages/admin/Clients/Clients';
import Users from '../pages/admin/Users/Users';
import Analytics from '../pages/admin/Analytics/Analytics';
import AddNewClient from '../pages/admin/ClientManagement/AddNewClient/AddNewClient';
import AllClients from '../pages/admin/ClientManagement/Clients/AllClients';

const AdminRoutes = (
  <>
    <Route index element={<ReportLibrary />} />
    <Route path="report-library" element={<ReportLibrary />} />
    <Route path="clients" element={<Clients />} />
    <Route path="client-management/users" element={<Users />} />
    <Route path="client-management/add-new" element={<AddNewClient />} /> 
    <Route path="client-management/clients" element={<AllClients />} /> 
    <Route path="analytics" element={<Analytics />} />
  </>
);

export default AdminRoutes; 
