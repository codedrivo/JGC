import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import InputField from "../../../components/common/forms/Input/Input";
import Button from "../../../components/common/Button/Button";
import "./ForgotPassword.css";
import { useForgotPass } from "./useForgotPass";

const ForgotPassword = () => {
  const { forgotPassFormik } = useForgotPass();
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
              <h1 className="login-title">Forgot Password</h1>
              <form onSubmit={forgotPassFormik.handleSubmit}>
                <div className="form-fields">
                   <InputField
                    id="email"
                    type="email"
                    fullWidth
                    placeholder="EMAIL"
                    variant="outlined"
                    className="custom-input"
                    onChange={forgotPassFormik.handleChange}
                    value={forgotPassFormik.values.email}
                    errorMsg={forgotPassFormik.errors.email}
                  />
                </div>
                <div className="submit-btn-wrapper">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="login-submit-btn"
                  >
                    SEND
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
export default ForgotPassword;

