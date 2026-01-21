import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Footer from '../components/layout/Footer/Footer';
import './AdminLayout.css'; // Reusing layout styles for consistency

const ClientLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-layout"> {/* Reusing admin-layout class for sidebar structure */}
      <Header onSidebarToggle={toggleSidebar} />

      <div className="admin-layout__container">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="admin-main-content">
          <Outlet />
          <Footer />
        </main>

        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
        )}
      </div>
    </div>
  );
};

export default ClientLayout;
