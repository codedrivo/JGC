import React from "react";
import { BsDownload, BsBoxArrowUpRight, BsChevronDown } from "react-icons/bs";
import { LuChevronLeft, LuChevronRight, LuArrowRight } from "react-icons/lu";
import "./ReportLibrary.css";

const reports = [
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
  return (
    <div className="report-library-container">
      <div className="report-library-header">
        <h1 className="report-library-title">Report Library</h1>

        <div className="report-filters">
          <div className="filter-group">
            <button className="filter-btn">
              FILTER BY: TYPE <BsChevronDown size={10} />
            </button>
          </div>
          <div className="filter-group">
            <button className="filter-btn">
              SORT BY: DATE, NEW TO OLD <BsChevronDown size={10} />
            </button>
          </div>
          <span className="reset-btn">RESET</span>
        </div>
      </div>

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
          <div className="service-card" style={{ backgroundColor: '#eaeff2' }}>
            <h3>Consultations</h3>
            <a href="#" className="service-link">SCHEDULE NOW <LuArrowRight /></a>
          </div>
          <div className="service-card" style={{ backgroundColor: '#f3f2e8' }}>
            <h3>Strategic Advisory</h3>
            <a href="#" className="service-link">LEARN MORE <LuArrowRight /></a>
          </div>
          <div className="service-card" style={{ backgroundColor: '#f2eaee' }}>
            <h3>Speaking & Events</h3>
            <a href="#" className="service-link">DISCOVER MORE <LuArrowRight /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLibrary;
