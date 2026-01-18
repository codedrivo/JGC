import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsFileText,
  BsPerson,
  BsCreditCard,
  BsGraphUp,
  BsX
} from "react-icons/bs";
import "./Sidebar.css";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header-mobile">
        <span className="sidebar-title-mobile">MENU</span>
        <button className="sidebar-close-btn" onClick={onClose}>
          <BsX size={24} />
        </button>
      </div>
      <div className="sidebar-menu">
        <Link to="/admin/reports" className={`sidebar-item ${isActive('/reports') ? 'active' : ''}`}>
          <BsFileText className="sidebar-icon" />
          <span className="sidebar-text">REPORT LIBRARY</span>
        </Link>

        {/* Client Management Section with Submenu */}
        <div className="sidebar-group">
          <div className={`sidebar-item ${isActive('/client-management') ? 'active-parent' : ''}`}>
            <BsPerson className="sidebar-icon" />
            <span className="sidebar-text">CLIENT MANAGEMENT</span>
          </div>
          <div className="sidebar-submenu">
            <Link to="/admin/client-management/add-new" className={`sidebar-subitem ${isActive('/add-new') ? 'active' : ''}`}>
              ADD NEW CLIENT
            </Link>
            <Link to="/admin/client-management/clients" className={`sidebar-subitem ${isActive('/clients') ? 'active' : ''}`}>
              CLIENTS
            </Link>
            <Link to="/admin/client-management/users" className={`sidebar-subitem ${isActive('/users') ? 'active' : ''}`}>
              USERS
            </Link>
          </div>
        </div>

        <Link to="/admin/analytics" className={`sidebar-item ${isActive('/analytics') ? 'active' : ''}`}>
          <BsGraphUp className="sidebar-icon" />
          <span className="sidebar-text">ANALYTICS</span>
        </Link>

        <Link to="/admin/billing" className={`sidebar-item ${isActive('/billing') ? 'active' : ''}`}>
          <BsCreditCard className="sidebar-icon" />
          <span className="sidebar-text">BILLING</span>
        </Link>
      </div>

      <div className="sidebar-footer">
        <a href="#privacy">PRIVACY POLICY</a>
        <a href="#terms">TERMS OF USE</a>
      </div>
    </aside>
  );
};

export default Sidebar;
