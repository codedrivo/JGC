import React, { useState } from "react";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import InputField from "../../../components/common/forms/Input/Input";
import Button from "../../../components/common/Button/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      // Map id to state key. Since Header/Footer are simple, I assume InputField passes 'id' correctly or 'name'.
      // InputField component uses 'id' prop and passes it to underlying MUI input.
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="login-page-container">
      <Header />

      <div className="login-body-grid">
        {/* Left Column: Image */}
        <div className="login-image-section">
          <div className="login-image-overlay" />
        </div>

        {/* Right Column: Content */}
        <div className="login-form-section">
          <div className="login-content-wrapper">
            <div className="login-form-container">
              <div className="brand-subtitle">INSIGHTS HUB</div>
              <h1 className="login-title">Insights Hub Login</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-fields">
                  <InputField
                    id="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    variant="outlined"
                    className="custom-input"
                  />

                  <div>
                    <InputField
                      id="password"
                      type="password"
                      fullWidth
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="PASSWORD"
                      variant="outlined"
                      className="custom-input"
                    />
                    <div className="forgot-password-link">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                  </div>
                </div>

                <div className="submit-btn-wrapper">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="login-submit-btn"
                    onClick={() => navigate("/admin/reports")}
                  >
                    SIGN IN
                  </Button>
                </div>

                <div className="enroll-text">
                  Not a Client?
                  <a href="#enroll" className="enroll-link">Enroll Today</a>
                </div>
              </form>
            </div>
          </div>
          {/* Footer removed from here or moved to bottom? 
              User asked for "Header is top". Footer usually goes to bottom.
              I will place Footer outside the split grid to be at the page bottom.
          */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
