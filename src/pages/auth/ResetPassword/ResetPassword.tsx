import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import InputField from "../../../components/common/forms/Input/Input";
import Button from "../../../components/common/Button/Button";
import "../ForgotPassword/ForgotPassword.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
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
              <form>
                 <div className="form-fields">
                    <InputField
                      id="password"
                      type="password"
                      fullWidth
                      placeholder="PASSWORD"
                      variant="outlined"
                      className="custom-input"
                    />
                  <div>
                    <InputField
                      id="cnfpassword"
                      type="password"
                      fullWidth
                      placeholder="CONFIRM PASSWORD"
                      variant="outlined"
                      className="custom-input"
                    />
                  </div>
                  </div>
                <div className="submit-btn-wrapper">
                  <Button
                    //type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="login-submit-btn"
                    onClick={() => navigate("/login")}
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

