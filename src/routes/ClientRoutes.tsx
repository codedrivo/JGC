import { Route } from 'react-router-dom';

// Client pages
import ReportLibrary from '../pages/client/ReportLibrary/ReportLibrary';
import MyAccount from '../pages/client/MyAccount/MyAccount';
import FAQ from '../pages/client/FAQ/FAQ';
import PrivacyPolicy from '../pages/public/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from '../pages/public/TermsOfUse/TermsOfUse';

const ClientRoutes = (
  <>
    <Route index element={<ReportLibrary />} />
    <Route path="report-library" element={<ReportLibrary />} />
    <Route path="my-account" element={<MyAccount />} />
    <Route path="faq" element={<FAQ />} />
    <Route path="privacy" element={<PrivacyPolicy />} />
    <Route path="terms" element={<TermsOfUse />} />
  </>
);

export default ClientRoutes;
