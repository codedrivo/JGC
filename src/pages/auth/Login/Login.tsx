import React from "react";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import InputField from "../../../components/common/forms/Input/Input";
import Button from "../../../components/common/Button/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

const Login: React.FC = () => {
  const { loginFormik } = useLogin();

  return (
    <div className="login-page-container">
      <Header />

      <div className="login-body-grid">
        <div className="login-image-section">
          <div className="login-image-overlay" />
        </div>

        <div className="login-form-section">
          <div className="login-content-wrapper">
            <div className="login-form-container">
              <div className="brand-subtitle">INSIGHTS HUB</div>
              <h1 className="login-title">Insights Hub Login</h1>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  loginFormik.handleSubmit();
                }}
              >
                <div className="form-fields">
                  <InputField
                    id="email"
                    type="email"
                    fullWidth
                    placeholder="EMAIL"
                    variant="outlined"
                    className="custom-input"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    errorMsg={loginFormik.errors.email}
                  />

                  <InputField
                    id="password"
                    type="password"
                    fullWidth
                    placeholder="PASSWORD"
                    variant="outlined"
                    className="custom-input"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.password}
                    errorMsg={loginFormik.errors.password}
                  />

                  <div className="forgot-password-link">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                </div>

                <div className="submit-btn-wrapper">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="login-submit-btn"
                  >
                    SIGN IN
                  </Button>
                </div>

                <div className="enroll-text">
                  Not a Client?
                  <a href="#enroll" className="enroll-link">
                    Enroll Today
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
