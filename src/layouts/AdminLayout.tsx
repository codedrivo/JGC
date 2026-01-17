import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Footer from '../components/layout/Footer/Footer';
import PageWrapper from '../components/layout/PageWrapper/PageWrapper';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-layout__container">
        <Sidebar />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
