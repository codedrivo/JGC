import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import InputField from "../../../components/common/forms/Input/Input";
import Button from "../../../components/common/Button/Button";
import "../ForgotPassword/ForgotPassword.css";
import { useResetPass } from "./useResetPass";

const ResetPassword = () => {
  const email = localStorage.getItem("email") || "";
  const { resetPasswordFormik } = useResetPass(email);
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
              <h1 className="login-title">Reset Password</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  resetPasswordFormik.handleSubmit();
                }}
              >
                 <div className="form-fields">
                  <InputField
                    id="password"
                    type="password"
                    fullWidth
                    placeholder="PASSWORD"
                    variant="outlined"
                    className="custom-input"
                    onChange={resetPasswordFormik.handleChange}
                    value={resetPasswordFormik.values.password}
                    errorMsg={resetPasswordFormik.errors.password}
                  />
                  <div>
                    <InputField
                      id="cpassword"
                      type="password"
                      fullWidth
                      placeholder="CONFIRM PASSWORD"
                      variant="outlined"
                      className="custom-input"
                      onChange={resetPasswordFormik.handleChange}
                      value={resetPasswordFormik.values.cpassword}
                      errorMsg={resetPasswordFormik.errors.cpassword}
                    />
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
                    RESET PASSWORD
                  </Button>
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
export default ResetPassword;

