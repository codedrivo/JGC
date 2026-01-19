import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { Menu, MenuItem, Checkbox, ListItemText } from "@mui/material";
import Button from "../../../components/common/Button/Button";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import "./Users.css";

// Mock Data for Users
const usersData = [
  { id: 1, name: "Member Name", company: "Company Name", email: "email@companyname.com", subscription: ["Beyond the Headlines", "Softs Weekly Report"], role: "Director" },
  { id: 2, name: "Member Name", company: "Company Name", email: "email@companyname.com", subscription: ["Beyond the Headlines"], role: "VP" },
  { id: 3, name: "Member Name", company: "Company Name", email: "email@companyname.com", subscription: ["Softs Weekly Report"], role: "CEO" },
  { id: 4, name: "Member Name", company: "Company Name", email: "email@companyname.com", subscription: ["Softs Weekly Report"], role: "VP" },
];

const Users = () => {
  // Filter states
  const [activeStatus, setActiveStatus] = useState("All");
  const [activeSubscriptions, setActiveSubscriptions] = useState<string[]>(["Beyond the Headlines", "Softs Weekly"]);

  // Dropdown Anchors
  const [statusAnchorEl, setStatusAnchorEl] = useState<null | HTMLElement>(null);
  const [subAnchorEl, setSubAnchorEl] = useState<null | HTMLElement>(null);

  const handleStatusClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handleSubClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setSubAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setStatusAnchorEl(null);
    setSubAnchorEl(null);
  };

  const handleStatusSelect = (status: string) => {
    setActiveStatus(status);
    handleClose();
  };

  const toggleSubscription = (sub: string) => {
    if (activeSubscriptions.includes(sub)) {
      setActiveSubscriptions(activeSubscriptions.filter(s => s !== sub));
    } else {
      setActiveSubscriptions([...activeSubscriptions, sub]);
    }
  };

  return (
    <div className="users-page">
      <PageHeader title="All Users" />

      <div className="users-content">
        {/* Toolbar Section */}
        <div className="users-toolbar">
          <div className="toolbar-top">
            <div className="filter-labels">
              <span className="filter-label">FILTER:</span>

              {/* Status Dropdown */}
              <span
                className="filter-dropdown"
                onClick={handleStatusClick}
              >
                STATUS ▾
              </span>
              <Menu
                anchorEl={statusAnchorEl}
                open={Boolean(statusAnchorEl)}
                onClose={handleClose}
              >
                {['All', 'Active', 'Archived'].map((status) => (
                  <MenuItem key={status} onClick={() => handleStatusSelect(status)}>
                    {status}
                  </MenuItem>
                ))}
              </Menu>

              {/* Subscription Dropdown */}
              <span
                className="filter-dropdown"
                onClick={handleSubClick}
              >
                SUBSCRIPTION ▾
              </span>
              <Menu
                anchorEl={subAnchorEl}
                open={Boolean(subAnchorEl)}
                onClose={handleClose}
              >
                {['Beyond the Headlines', 'Softs In-Depth', 'Softs Weekly', 'Coffee In-Depth', 'Coffee Weekly'].map((sub) => (
                  <MenuItem key={sub} onClick={() => toggleSubscription(sub)}>
                    <Checkbox checked={activeSubscriptions.includes(sub)} />
                    <ListItemText primary={sub} />
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="action-buttons">
              <Button variant="outlined" style={{ borderRadius: 0, padding: '10px 30px', borderColor: '#999', color: '#999', backgroundColor: 'white' }}>
                EXPORT LIST
              </Button>
              <Button variant="contained" style={{ borderRadius: 0, padding: '10px 30px', backgroundColor: '#0D3E54' }}>
                + ADD CLIENT
              </Button>
            </div>
          </div>

          <div className="active-filters">
            <button className="filter-pill">
              STATUS: {activeStatus.toUpperCase()} <BsX />
            </button>
            {activeSubscriptions.map(sub => (
              <button key={sub} className="filter-pill" onClick={() => toggleSubscription(sub)}>
                SUBSCRIPTION: {sub.toUpperCase()} <BsX />
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}></th> {/* Edit Column */}
                <th>USER</th>
                <th>COMPANY</th>
                <th>EMAIL</th>
                <th>SUBSCRIPTION</th>
                <th>ROLE</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td className="edit-cell"><a href="#" className="edit-link">Edit</a></td>
                  <td>{user.name}</td>
                  <td>{user.company}</td>
                  <td>{user.email}</td>
                  <td className="subscription-cell">
                    {user.subscription.map((sub, idx) => (
                      <div key={idx}>{sub}</div>
                    ))}
                  </td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
