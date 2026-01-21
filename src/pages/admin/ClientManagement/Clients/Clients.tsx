import { Link } from "react-router-dom";
import { BsChevronDown, BsX } from "react-icons/bs";
import "./Clients.css";

const clientsData = [
    { id: 1, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscriptions: ["Beyond the Headlines", "Softs Weekly Report"], license: "3 Users" },
    { id: 2, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscriptions: ["Beyond the Headlines"], license: "1 User" },
    { id: 3, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscriptions: ["Softs Weekly Report"], license: "1 User" },
    { id: 4, company: "Company Name", admin: "Member Name", email: "email@companyname.com", subscriptions: ["Softs Weekly Report"], license: "1 User" },
];

const Clients = () => {
    return (
        <div className="clients-container">
            {/* Grey Banner Background */}
            <div className="top-grey-banner"></div>

            {/* Main Content Area */}
            <div className="client-content-wrapper">

                {/* Title Section (White Background) */}
                <div className="title-section">
                    <h1 className="page-title">All Clients</h1>
                </div>

                {/* Actions Row */}
                <div className="actions-row">
                    <div className="filters-group">
                        <span className="filter-label">FILTER:</span>
                        <div className="filter-trigger">STATUS <BsChevronDown size={10} /></div>
                        <div className="filter-trigger">SUBSCRIPTION <BsChevronDown size={10} /></div>
                    </div>

                    <div className="buttons-group">
                        <button className="btn-export">EXPORT LIST</button>
                        <Link to="/admin/client-management/add-new" className="btn-add-client">
                            + ADD CLIENT
                        </Link>
                    </div>
                </div>

                {/* Active Filter Pills */}
                <div className="active-filters-row">
                    <div className="filter-pill">
                        <span className="filter-pill-label">STATUS:</span>
                        <span>ALL</span>
                        <BsX className="pill-close" />
                    </div>
                    <div className="filter-pill">
                        <span className="filter-pill-label">SUBSCRIPTION:</span>
                        <span>BEYOND THE HEADLINES</span>
                        <BsX className="pill-close" />
                    </div>
                    <div className="filter-pill">
                        <span className="filter-pill-label">SUBSCRIPTION:</span>
                        <span>SOFTS WEEKLY</span>
                        <BsX className="pill-close" />
                    </div>
                </div>

                {/* Clients Table */}
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
                            <tr key={client.id} className="client-row">
                                <td><span className="edit-link">Edit</span></td>
                                <td>{client.company}</td>
                                <td>{client.admin}</td>
                                <td>{client.email}</td>
                                <td className="subscription-cell">
                                    {client.subscriptions.map((sub, idx) => (
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
    );
};

export default Clients;
