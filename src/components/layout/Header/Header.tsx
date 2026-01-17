"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";
import Button from "../../common/Button/Button";
import logo from "../../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <img
            src={logo}
            alt="J.GANES CONSULTING"
            className="logo-image"
          />
        </div>

        {/* Navigation Section */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#reports">REPORTS</a></li>
            <li><a href="#courses">COURSES</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

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
            <LuSearch size={20} />
          </button>
          <Button
            className="header-login-btn"
            variant="contained"
            disableElevation
          >
            CLIENT LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
