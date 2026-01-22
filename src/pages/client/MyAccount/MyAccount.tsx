"use client";

import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { BsCalendar } from "react-icons/bs";
import InputField from "../../../components/common/forms/Input/Input";
import Table from "../../../components/common/Table/Table";
import Button from "../../../components/common/Button/Button";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import "./MyAccount.css";

const MyAccount = () => {
  // Form States
  const [reports, setReports] = useState({
    beyondHeadlines: false,
    softsInDepth: true,
    softsWeekly: false,
    coffeeInDepth: false,
    coffeeWeekly: false,
  });

  const handleCheck = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setReports({ ...reports, [name]: event.target.checked });
  };

  return (
    <div className="my-account-container">
      <PageHeader title="My Account" />

      <div className="account-content-wrapper" style={{ padding: '2rem 4rem' }}>

        {/* Company Info Form */}
        <div className="account-section">
          <div className="form-grid-2">
            <InputField label="COMPANY NAME" value="COMPANY NAME" />
            <InputField label="#999999999" value="#999999999" />
            <InputField label="SINGLE USER" value="SINGLE USER" />
            <InputField label="STATUS" value="CURRENT CLIENT" />
          </div>
        </div>

        {/* Select Reports Table */}
        <div className="account-section">
          <h3 className="section-header">SELECT REPORTS</h3>
          <div className="reports-table-header">
            <span>SELECT REPORTS</span>
            <span>Start Date</span>
            <span>View Date</span>
            <span>End Date</span>
          </div>

          <div className="report-row">
            <FormControlLabel
              control={<Checkbox checked={reports.beyondHeadlines} onChange={handleCheck('beyondHeadlines')} />}
              label="Beyond the Headlines"
            />
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
          </div>

          <div className="report-row">
            <FormControlLabel
              control={<Checkbox checked={reports.softsInDepth} onChange={handleCheck('softsInDepth')} />}
              label="Softs In-Depth Report"
            />
            <div className="date-text">12/5/25</div>
            <div className="date-text">12/5/20</div>
            <div className="date-text">12/5/26</div>
          </div>

          {/* Repeat for other reports as mock rows */}
          <div className="report-row">
            <FormControlLabel control={<Checkbox />} label="Softs Weekly Report" />
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
          </div>
          <div className="report-row">
            <FormControlLabel control={<Checkbox />} label="Coffee In-Depth Report" />
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
          </div>
          <div className="report-row">
            <FormControlLabel control={<Checkbox />} label="Coffee Weekly Report" />
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
            <div className="date-cell"><BsCalendar className="date-icon" /></div>
          </div>

          {/* <div className="form-actions-right">
            <Button variant="contained" style={{ backgroundColor: '#0D3E54', borderRadius: 0, padding: '10px 30px' }}>SAVE</Button>
            <Button variant="outlined" style={{ borderRadius: 0, padding: '10px 30px', color: '#666', borderColor: '#ccc' }}>DISCARD</Button>
          </div> */}
        </div>

        {/* Add User */}
        <div className="account-section">
          <h3 className="section-header">ADD USER</h3>
          <div className="form-grid-2">
            <InputField label="FIRST NAME" />
            <InputField label="LAST NAME" />
            <InputField label="EMAIL" />
            <InputField label="POSITION / TITLE" />
          </div>
          <div className="form-actions-right" style={{ marginTop: '1.5rem' }}>
            <Button variant="contained" style={{ backgroundColor: '#0D3E54', borderRadius: 0, padding: '10px 30px' }}>SEND INVITE</Button>
          </div>
        </div>

        {/* Team Members */}
        <div className="account-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 className="section-header">TEAM MEMBERS</h3>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>3 USERS TOTAL</span>
          </div>

          <Table
            columns={[
              { key: 'name', header: 'Member Name', align: 'left' },
              { key: 'email', header: 'name@companytitle.com', align: 'center', render: (row: any) => row.email },
              { key: 'role', header: 'User', align: 'center' },
              { key: 'status', header: 'Active', align: 'center' },
              {
                key: 'actions',
                header: 'Action',
                align: 'right',
                render: () => (
                  <div className="actions-cell">
                    <span className="action-link">RESET PASSWORD</span>
                    <span className="action-link underline">REMOVE USER</span>
                  </div>
                )
              }
            ]}
            data={[
              { name: 'Member Name', email: 'name@companytitle.com', role: 'User', status: 'Active' },
              { name: 'Member Name', email: 'name@companytitle.com', role: 'User', status: 'Active' },
              { name: 'Member Name', email: 'name@companytitle.com', role: 'User', status: 'Archived' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
