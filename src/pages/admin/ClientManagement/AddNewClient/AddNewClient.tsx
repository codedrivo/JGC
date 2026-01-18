import React, { useState } from "react";
import { BsCheck, BsCalendar3 } from "react-icons/bs";
import "./AddNewClient.css";

const initialReports = [
    { id: 1, name: "Beyond the Headlines", startDate: "", viewDate: "", endDate: "" },
    { id: 2, name: "Softs In-Depth Report", startDate: "12/5/25", viewDate: "12/5/20", endDate: "12/5/26", checked: true },
    { id: 3, name: "Softs Weekly Report", startDate: "", viewDate: "", endDate: "" },
    { id: 4, name: "Coffee In-Depth Report", startDate: "", viewDate: "", endDate: "" },
    { id: 5, name: "Coffee Weekly Report", startDate: "", viewDate: "", endDate: "" },
];

const teamMembers = [
    { name: "Member Name", email: "name@companytitle.com", role: "User", status: "Active" },
    { name: "Member Name", email: "name@companytitle.com", role: "User", status: "Active" },
    { name: "Member Name", email: "name@companytitle.com", role: "User", status: "Active" },
    { name: "Member Name", email: "name@companytitle.com", role: "User", status: "Archived" },
];

const AddNewClient = () => {
    const [reports, setReports] = useState(initialReports);

    const toggleReport = (id: number) => {
        setReports(reports.map(r => r.id === id ? { ...r, checked: !r.checked } : r));
    };

    return (
        <div className="add-client-container">
            {/* Grey Banner Background */}
            <div className="top-grey-banner"></div>

            {/* Main Content Area */}
            <div className="client-content-wrapper">

                {/* Title Section (White Background) */}
                <div className="title-section">
                    <h1 className="page-title">Add New Client</h1>
                </div>

                {/* Client Info Form */}
                <form>
                    <div className="form-grid-2">
                        <input type="text" className="form-input" placeholder="COMPANY NAME" />
                        <input type="text" className="form-input" placeholder="JGC CUSTOMER ID" />
                    </div>
                    <div className="form-grid-2">
                        <select className="form-select">
                            <option>LICENSING INFORMATION</option>
                            <option>Standard License</option>
                            <option>Premium License</option>
                        </select>
                        <input type="text" className="form-input" placeholder="STATUS: CURRENT CLIENT" />
                    </div>
                </form>

                {/* Reports Selection */}
                <div className="reports-section">
                    <div className="reports-header">
                        <span className="header-label">SELECT REPORTS</span>
                        <span className="header-label">Start Date</span>
                        <span className="header-label">View Date</span>
                        <span className="header-label">End Date</span>
                    </div>

                    {reports.map((report) => (
                        <div key={report.id} className="report-row">
                            <div className="report-name-col">
                                <div
                                    className={`checkbox-custom ${report.checked ? 'checked' : ''}`}
                                    onClick={() => toggleReport(report.id)}
                                >
                                    {report.checked && <BsCheck size={18} />}
                                </div>
                                <span className="report-name">{report.name}</span>
                            </div>

                            {/* Date Columns */}
                            <div className="date-col">
                                <div className="date-input-wrapper">
                                    {report.checked ? (
                                        <span className="date-text">{report.startDate}</span>
                                    ) : (
                                        <BsCalendar3 className="calendar-icon" />
                                    )}
                                </div>
                            </div>
                            <div className="date-col">
                                <div className="date-input-wrapper">
                                    {report.checked ? (
                                        <span className="date-text">{report.viewDate}</span>
                                    ) : (
                                        <BsCalendar3 className="calendar-icon" />
                                    )}
                                </div>
                            </div>
                            <div className="date-col">
                                <div className="date-input-wrapper">
                                    {report.checked ? (
                                        <span className="date-text">{report.endDate}</span>
                                    ) : (
                                        <BsCalendar3 className="calendar-icon" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="form-actions">
                    <button className="btn-save">SAVE</button>
                    <button className="btn-discard">DISCARD</button>
                </div>

                {/* Account Admin */}
                <div className="account-admin-section">
                    <h3 className="section-title">ACCOUNT ADMIN</h3>
                    <div className="form-grid-2">
                        <input type="text" className="form-input" placeholder="FIRST NAME" />
                        <input type="text" className="form-input" placeholder="LAST NAME" />
                    </div>
                    <div className="form-grid-2">
                        <input type="email" className="form-input" placeholder="EMAIL" />
                        <input type="text" className="form-input" placeholder="POSITION / TITLE" />
                    </div>
                    <div className="btn-send-wrapper">
                        <button className="btn-save" style={{ minWidth: '150px' }}>SEND</button>
                    </div>
                </div>

                {/* Team Members */}
                <div className="team-members-section">
                    <div className="team-header">
                        <h3 className="section-title" style={{ marginBottom: 0 }}>TEAM MEMBERS</h3>
                        <span className="user-count">3 USERS TOTAL</span>
                    </div>

                    {teamMembers.map((member, i) => (
                        <div key={i} className="member-row">
                            <span>{member.name}</span>
                            <span>{member.email}</span>
                            <span>{member.role}</span>
                            <span>{member.status}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AddNewClient;
