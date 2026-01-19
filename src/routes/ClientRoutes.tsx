import { Route } from 'react-router-dom';

// Client Pages
import ReportLibrary from '../pages/client/ReportLibrary/ReportLibrary';
import MyAccount from '../pages/client/MyAccount/MyAccount';
import Billing from '../pages/client/Billing/Billing';
import FAQ from '../pages/client/FAQ/FAQ';

const ClientRoutes = () => {
  return (
    <>
      <Route path="/" element={<ReportLibrary />} />
      <Route path="/reports" element={<ReportLibrary />} />
      <Route path="/account" element={<MyAccount />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/faq" element={<FAQ />} />
    </>
  );
};

export default ClientRoutes;
