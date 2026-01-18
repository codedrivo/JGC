"use client";

import React from "react";
import { LuSearch, LuChevronDown, LuMenu, LuX, LuChevronUp } from "react-icons/lu";
import Button from "../../common/Button/Button";
import logo from "../../../assets/logo.svg";
import "./Header.css";

import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isLoggedIn =
    window.location.pathname.includes('/admin') ||
    window.location.pathname.includes('/client') ||
    window.location.pathname.includes('/my-account') ||
    window.location.pathname.includes('/report-library') ||
    window.location.pathname.includes('/ask-judy-ai') ||
    window.location.pathname.includes('/billing') ||
    window.location.pathname.includes('/faq');
  const size = 20;

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-container">
          {/* Logo Section */}
          <div className="header-left">
            {/* Sidebar Toggle (Hamburger) - Only if logged in/onSidebarToggle provided */}
            {onSidebarToggle && (
              <button
                className="header-hamburger"
                onClick={onSidebarToggle}
                aria-label="Toggle sidebar"
              >
                <LuMenu size={24} />
              </button>
            )}

            <div className="header-logo">
              <img
                src={logo}
                alt="J.GANES CONSULTING"
                className="logo-image"
              />
            </div>

            {/* Top Menu Toggle (Arrow) - Mobile Only */}
            <button
              className="header-menu-arrow"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle top menu"
            >
              {isMobileNavOpen ? <LuChevronUp size={24} /> : <LuChevronDown size={24} />}
            </button>
          </div>


          {/* Navigation Section */}
          {/* Navigation Section */}
          <nav className={`header-nav ${isMobileNavOpen ? 'mobile-open' : ''}`}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">MENU</span>
              <button
                className="mobile-nav-close"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <LuX size={24} />
              </button>
            </div>
            <ul className="nav-list">
              <li><Link to="#about" onClick={() => setIsMobileNavOpen(false)}>ABOUT</Link></li>
              <li><Link to="#services" onClick={() => setIsMobileNavOpen(false)}>SERVICES</Link></li>
              <li><Link to="#reports" onClick={() => setIsMobileNavOpen(false)}>REPORTS</Link></li>
              <li><Link to="#courses" onClick={() => setIsMobileNavOpen(false)}>COURSES</Link></li>
              <li><Link to="#contact" onClick={() => setIsMobileNavOpen(false)}>CONTACT</Link></li>
            </ul>
          </nav>

          {/* Mobile Overlay */}
          {isMobileNavOpen && (
            <div
              className="mobile-nav-overlay"
              onClick={() => setIsMobileNavOpen(false)}
            />
          )}

          {/* Actions Section */}
          <div className="header-actions">
            {isSearchOpen && (
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="header-search-input"
                  autoFocus
                />
              </div>
            )}
            <button
              className="header-search-btn"
              aria-label="Search"
              onClick={handleSearchToggle}
            >
              <LuSearch size={size} />
            </button>

            {isLoggedIn ? (
              <>
                <div
                  className="header-user-menu"
                  onClick={handleMenuOpen}
                  style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontFamily: 'var(--ff-montserrat)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}
                >
                  <span>BROOKE</span>
                  <LuChevronDown />
                </div>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    style: {
                      marginTop: '10px',
                      minWidth: '150px'
                    }
                  }}
                >
                  <MenuItem onClick={handleMenuClose} style={{ fontSize: '0.85rem' }}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose} style={{ fontSize: '0.85rem' }}>My Account</MenuItem>
                  <MenuItem onClick={handleMenuClose} style={{ fontSize: '0.85rem' }}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                className="header-login-btn"
                variant="contained"
                disableElevation
              >
                CLIENT LOGIN
              </Button>
            )}


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
