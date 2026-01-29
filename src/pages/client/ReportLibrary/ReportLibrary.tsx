import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsDownload, BsBoxArrowUpRight, BsChatDots } from "react-icons/bs";
import { LuChevronLeft, LuChevronRight, LuArrowRight } from "react-icons/lu";
import { TextField, MenuItem, Select, FormControl } from "@mui/material";
import FilterBar from "../../../components/common/FilterBar/FilterBar";
import Modal from "../../../components/common/Modal/Modal";
import Button from "../../../components/common/Button/Button";
import "./ReportLibrary.css";

const reports = [
  // ... existing reports
  {
    id: 1,
    title: "Beyond the Headlines",
    date: "3.18.25",
    summary: "Coffee prices retreated as roasters shifted to Robusta blends. Brazilian 2023/24 crop shows modest recovery from weather challenges. Physical supplies remain tight while certified stocks rebuild slowly.",
  },
  {
    id: 2,
    title: "Softs In-Depth Report",
    date: "3.11.25",
    summary: "Coffee prices retreated as roasters shifted to Robusta blends. Brazilian 2023/24 crop shows modest recovery from weather challenges. Physical supplies remain tight while certified stocks rebuild slowly.",
  },
  {
    id: 3,
    title: "Softs Weekly Report",
    date: "3.4.25",
    summary: "Coffee prices retreated as roasters shifted to Robusta blends. Brazilian 2023/24 crop shows modest recovery from weather challenges. Physical supplies remain tight while certified stocks rebuild slowly.",
  },
  {
    id: 4,
    title: "Coffee In-Depth Report",
    date: "2.25.25",
    summary: "Coffee prices retreated as roasters shifted to Robusta blends. Brazilian 2023/24 crop shows modest recovery from weather challenges. Physical supplies remain tight while certified stocks rebuild slowly.",
  },
];

const ReportLibrary = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const [filterType, setFilterType] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const filterOptions = [
    { label: "Weekly Report", value: "weekly" },
    { label: "In-Depth Report", value: "indepth" },
    { label: "Market Update", value: "update" },
  ];

  const sortOptions = [
    { label: "Date, New to Old", value: "newToOld" },
    { label: "Date, Old to New", value: "oldToNew" },
  ];

  const handleReset = () => {
    setFilterType("");
    setSortOrder("");
  };

  return (
    <div className="report-library-container">
      <div className="report-library-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="report-library-title">Report Library</h1>
          {isAdmin && (
            <Button
              variant="contained"
              onClick={() => setIsUploadModalOpen(true)}
              style={{ backgroundColor: '#0D3E54', borderRadius: '0', padding: '10px 24px' }}
            >
              + UPLOAD
            </Button>
          )}
        </div>

        <FilterBar
          filterOptions={filterOptions}
          sortOptions={sortOptions}
          filterValue={filterType}
          sortValue={sortOrder}
          onFilterChange={setFilterType}
          onSortChange={setSortOrder}
          onReset={handleReset}
        />
      </div>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Add Report"
      >
        <div className="add-report-form">
          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">REPORT NAME</label>
              <FormControl fullWidth variant="standard">
                <Select
                  defaultValue=""
                  displayEmpty
                  className="custom-select"
                >
                  <MenuItem value="" disabled>Select Report</MenuItem>
                  <MenuItem value="weekly">Softs Weekly Report</MenuItem>
                  <MenuItem value="indepth">Softs In-Depth Report</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">PUBLICATION DATE</label>
              <TextField
                type="date"
                variant="standard"
                fullWidth
              />
            </div>
          </div>

          <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Button
              variant="outlined"
              fullWidth
              style={{ borderColor: '#ccc', color: '#666' }}
              onClick={() => setIsUploadModalOpen(false)}
            >
              UPLOAD
            </Button>
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: '#0D3E54' }}
            >
              PUBLISH
            </Button>
          </div>
        </div>
      </Modal>

      <div className="reports-list">
        {reports.map((report) => (
          <div key={report.id} className="report-item">
            <div className="report-info">
              <div className="report-heading-row">
                <span className="report-title">{report.title}</span>
                <span className="report-title"> | </span>
                <span className="report-date">{report.date}</span>
              </div>
              <p className="report-description">{report.summary}</p>
            </div>
            <div className="report-actions">
              <a href="#" className="action-btn">
                <BsDownload /> DOWNLOAD
              </a>
              <a href="#" className="action-btn">
                <BsBoxArrowUpRight /> OPEN
              </a>
            </div>
          </div>
        ))}
        {/* Repeating items to fill the list like the image */}
        {reports.slice(0, 3).map((report) => (
          <div key={`dup-${report.id}`} className="report-item">
            <div className="report-info">
              <div className="report-heading-row">
                <span className="report-title">{report.title}</span>
                <span className="report-title"> | </span>
                <span className="report-date">{report.date}</span>
              </div>
              <p className="report-description">{report.summary}</p>
            </div>
            <div className="report-actions">
              <a href="#" className="action-btn">
                <BsDownload /> DOWNLOAD
              </a>
              <a href="#" className="action-btn">
                <BsBoxArrowUpRight /> OPEN
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <div className="page-arrow"><LuChevronLeft /></div>
        <div className="page-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>...</span>
          <span>11</span>
        </div>
        <div className="page-arrow"><LuChevronRight /></div>
      </div>

      <div className="additional-services">
        <h2 className="services-title">Additional Services</h2>
        <div className="services-grid">
          <div className="service-card consultations">
            <h3>Consultations</h3>
            <a href="#" className="service-link">SCHEDULE NOW <LuArrowRight /></a>
          </div>
          <div className="service-card advisory">
            <h3>Strategic Advisory</h3>
            <a href="#" className="service-link">LEARN MORE <LuArrowRight /></a>
          </div>
          <div className="service-card speaking">
            <h3>Speaking & Events</h3>
            <a href="#" className="service-link">DISCOVER MORE <LuArrowRight /></a>
          </div>
        </div>
      </div>

      {/* Ask Judy AI Floating Button */}
      <button className="ask-judy-btn">
        <BsChatDots size={20} /> ASK JUDY AI
      </button>
    </div>
  );
};

export default ReportLibrary;
