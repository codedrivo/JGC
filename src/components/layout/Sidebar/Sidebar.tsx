import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuicon1 from "../../../assets/sm1.svg";
import menuicon2 from "../../../assets/sm2.svg";
import menuicon3 from "../../../assets/sm3.svg";
import menuicon4 from "../../../assets/sm4.svg";
import {
  BsFileText,
  BsPerson,
 // BsCreditCard,
  BsGraphUp,
  BsX,
  BsChatDots,
  BsQuestionCircle,
  // BsShield,
  // BsFileLock
} from "react-icons/bs";
import "./Sidebar.css";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  // Determine if we are in the Admin section or Client section
  // Assumption: All admin routes start with /admin
  const isAdmin = location.pathname.startsWith('/admin');

  // State for collapsible Client Management menu
  const [isClientMenuOpen, setIsClientMenuOpen] = React.useState(false);

  // Auto-open if we are in a sub-page
  React.useEffect(() => {
    if (location.pathname.includes('/client-management')) {
      setIsClientMenuOpen(true);
    }
  }, [location.pathname]);

  return (
    <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header-mobile">
        <span className="sidebar-title-mobile">MENU</span>
        <button className="sidebar-close-btn" onClick={onClose}>
          <BsX size={24} />
        </button>
      </div>
      <div className="sidebar-menu">

        {/* ================= ADMIN MENU ================= */}
        {isAdmin ? (
          <>
            <Link to="/admin/reports" className={`sidebar-item ${isActive('/reports') ? 'active' : ''}`}>
              <img src={menuicon1} alt="Reports Icon" className="sidebar-icon-img" />
              <span className="sidebar-text">REPORT LIBRARY</span>
            </Link>

            {/* Client Management Section with Submenu */}
            <div className="sidebar-group">
              <div
                className={`sidebar-item ${isActive('/client-management') ? 'active-parent' : ''}`}
                onClick={() => setIsClientMenuOpen(!isClientMenuOpen)}
                style={{ cursor: 'pointer' }}
              >
                <BsPerson className="sidebar-icon" />
                <span className="sidebar-text">CLIENT MANAGEMENT</span>
              </div>

              {isClientMenuOpen && (
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
              )}
            </div>

            <Link to="/admin/analytics" className={`sidebar-item ${isActive('/analytics') ? 'active' : ''}`}>
              <BsGraphUp className="sidebar-icon" />
              <span className="sidebar-text">ANALYTICS</span>
            </Link>

            { /*<Link to="/admin/billing" className={`sidebar-item ${isActive('/billing') ? 'active' : ''}`}>
              <BsCreditCard className="sidebar-icon" />
              <span className="sidebar-text">BILLING</span>
            </Link> */ }
          </>
        ) : (
          /* ================= CLIENT MENU ================= */
          <>
            <Link to="/report-library" className={`sidebar-item ${isActive('/report-library') ? 'active' : ''}`}>
              <img src={menuicon1} alt="Reports Icon" className="sidebar-icon-img" />
              <span className="sidebar-text">REPORT LIBRARY</span>
            </Link>

            <Link to="/ask-judy-ai" className={`sidebar-item ${isActive('/ask-judy-ai') ? 'active' : ''}`}>
              <img src={menuicon2} alt="Ask Judy AI Icon" className="sidebar-icon-img" />
              <span className="sidebar-text">ASK JUDY AI</span>
            </Link>

            <Link to="/my-account" className={`sidebar-item ${isActive('/my-account') ? 'active' : ''}`}>
              <img src={menuicon3} alt="My Account Icon" className="sidebar-icon-img" />
              <span className="sidebar-text">MY ACCOUNT</span>
            </Link>

            { /*<Link to="/billing" className={`sidebar-item ${isActive('/billing') ? 'active' : ''}`}>
              <BsCreditCard className="sidebar-icon" />
              <span className="sidebar-text">BILLING</span>
            </Link> */ }

            <Link to="/faq" className={`sidebar-item ${isActive('/faq') ? 'active' : ''}`}>
              <img src={menuicon4} alt="FAQ Icon" className="sidebar-icon-img" />
              <span className="sidebar-text">FAQ</span>
            </Link>

            
          </>
        )}

      </div>

      <div className="sidebar-footer">
        <Link to="/privacy">PRIVACY POLICY</Link>
        <Link to="/terms">TERMS OF USE</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
