import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { Menu, MenuItem, Checkbox, ListItemText } from "@mui/material";
import Button from "../../../../components/common/Button/Button";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import "./AllClients.css";

// Mock Data
const clientsData = [
    { id: 1, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscription: ["Beyond the Headlines", "Softs Weekly Report"], license: "3 Users" },
    { id: 2, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscription: ["Beyond the Headlines"], license: "1 User" },
    { id: 3, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscription: ["Softs Weekly Report"], license: "1 User" },
    { id: 4, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscription: ["Softs Weekly Report"], license: "1 User" },
];

const AllClients = () => {
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
        <div className="all-clients-page">
            <PageHeader title="All Clients" />

            <div className="all-clients-content">
                {/* Toolbar Section */}
                <div className="clients-toolbar">
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
                <div className="clients-table-container">
                    <table className="clients-table">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}></th> {/* Edit Column */}
                                <th>COMPANY</th>
                                <th>ADMIN</th>
                                <th>EMAIL</th>
                                <th>SUBSCRIPTION</th>
                                <th>LICENSE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientsData.map((client) => (
                                <tr key={client.id}>
                                    <td className="edit-cell"><a href="#" className="edit-link">Edit</a></td>
                                    <td>{client.company}</td>
                                    <td>{client.admin}</td>
                                    <td>{client.email}</td>
                                    <td className="subscription-cell">
                                        {client.subscription.map((sub, idx) => (
                                            <div key={idx}>{sub}</div>
                                        ))}
                                    </td>
                                    <td>{client.license}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllClients;
