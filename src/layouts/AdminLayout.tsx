import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import './AdminLayout.css';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      {/* Header at the top (Full Width) */}
      <Header onSidebarToggle={toggleSidebar} />

      {/* Main Container: Sidebar (Left) | Content (Right) */}
      <div className="admin-layout__container">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="admin-main-content">
          <Outlet />
        </main>

        {/* Mobile Overlay for Sidebar */}
        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
        )}
      </div>
    </div>
  );
};

export default AdminLayout;
