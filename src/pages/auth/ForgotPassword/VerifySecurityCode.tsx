import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import Button from "../../../components/common/Button/Button";
import "./ForgotPassword.css"; // reuse same CSS
import { useVerifySecurityCode } from "./useVerifySecurityCode";
import { useResendCode } from "./useResendCode";

const VerifySecurityCode = () => {
  const { formik, email } = useVerifySecurityCode();
  const { resendCode } = useResendCode();

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const otpArr = formik.values.otp.split("");
    otpArr[index] = value;

    const otp = otpArr.join("").slice(0, 4);
    formik.setFieldValue("otp", otp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleResendCode = async () => {
    try {
      await resendCode();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page-container">
      <Header />

      <div className="login-body-grid">
        {/* Left Image Section */}
        <div className="login-image-section">
          <div className="login-image-overlay" />
        </div>

        {/* Right Form Section */}
        <div className="login-form-section">
          <div className="login-content-wrapper">
            <div className="login-form-container">
              <div className="brand-subtitle">INSIGHTS HUB</div>
              <h1 className="login-title">Verify Security Code</h1>

              <p className="login-description">
                Enter the 4-digit code sent to{" "}
                <strong>
                  {email.replace(/(.{2}).+(@.+)/, "$1********$2")}
                </strong>
              </p>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-fields otp-wrapper">
                  <div className="otp-container">
                    {[0, 1, 2, 3].map((_, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        className="otp-input"
                        value={formik.values.otp[index] || ""}
                        onChange={(e) => handleOtpChange(e, index)}
                      />
                    ))}
                  </div>

                  {formik.touched.otp && formik.errors.otp && (
                    <p className="error-text">{formik.errors.otp}</p>
                  )}
                </div>

                <div className="submit-btn-wrapper">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    className="login-submit-btn"
                  >
                    VERIFY
                  </Button>
                </div>

                <div className="auth-links">
                  <button
                    type="button"
                    className="link-btn"
                    onClick={handleResendCode}
                  >
                    Resend Code
                  </button>
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

export default VerifySecurityCode;
