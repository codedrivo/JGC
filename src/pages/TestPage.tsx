import { Link } from 'react-router-dom';
import './TestPage.css';
import InputField from '../components/common/forms/Input/Input';

const TestPage = () => {
    return (
        <div className="test-page">
            <div className="test-page__container">
                <h1>🧪 Test Page - All Routes</h1>

                <section className="test-section">
                    <h2>Public Routes</h2>
                    <div className="test-links">
                        <Link to="/" className="test-link">Home</Link>
                        <Link to="/about" className="test-link">About</Link>
                        <Link to="/services" className="test-link">Services</Link>
                        <Link to="/contact" className="test-link">Contact</Link>
                    </div>
                </section>

                <section className="test-section">
                    <h2>Auth Routes</h2>
                    <div className="test-links">
                        <Link to="/login" className="test-link">Login</Link>
                        <Link to="/forgot-password" className="test-link">Forgot Password</Link>
                    </div>
                </section>

                <section className="test-section">
                    <h2>Admin Routes</h2>
                    <div className="test-links">
                        <Link to="/admin" className="test-link">Dashboard</Link>
                        <Link to="/admin/dashboard" className="test-link">Dashboard (explicit)</Link>
                        <Link to="/admin/reports" className="test-link">Report Library</Link>
                        <Link to="/admin/clients" className="test-link">Clients</Link>
                        <Link to="/admin/users" className="test-link">Users</Link>
                        <Link to="/admin/billing" className="test-link">Billing</Link>
                        <Link to="/admin/analytics" className="test-link">Analytics</Link>
                    </div>
                </section>

                <section className="test-section">
                    <h2>Client Routes</h2>
                    <div className="test-links">
                        <Link to="/client" className="test-link">My Reports</Link>
                        <Link to="/client/reports" className="test-link">My Reports (explicit)</Link>
                        <Link to="/client/account" className="test-link">My Account</Link>
                        <Link to="/client/billing" className="test-link">Billing</Link>
                        <Link to="/client/faq" className="test-link">FAQ</Link>
                    </div>
                </section>

                <section className="test-section">
                    <h2>Test This Page</h2>
                    <div className="test-links">
                        <Link to="/test" className="test-link">Back to Test Page</Link>
                    </div>
                </section>

            </div>
            <div className="form-holder">
                <InputField
                    label="Full Name"
                    type="text"
                    placeholder="Enter your name"
                />

                <InputField
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                />

                <InputField
                    label="Age"
                    type="number"
                    placeholder="Enter age"
                />
            </div>
        </div>
    );
};

export default TestPage;
