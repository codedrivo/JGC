import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import PageWrapper from '../components/layout/PageWrapper/PageWrapper';

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <Header />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default ClientLayout;
