import { Link } from "react-router-dom";
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import img3 from "../../../assets/images/img-3.png";
import { useVerifySecurityCode } from "./useVerifySecurityCode";
import { useResendCode } from "./useResendCode";

const VerifySecurityCode = () => {
  const { formik, email } = useVerifySecurityCode();
  const { resendCode } = useResendCode();

  // Handle OTP change (STRING based)
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

  // Resend code
  const handleResendCode = async () => {
    try {
      await resendCode();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="right-panel">
        <div className="form-top">
          <SubHeader />

          <form onSubmit={formik.handleSubmit}>
            <div className="auth-form">
              <div className="mb-40">
                <h4>Enter Security Code</h4>
                <p>
                  Check your email for the 4-digit security code and enter it
                  below to continue.
                </p>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="text-center security-code">
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
                      <p className="text-danger mt-2">
                        {formik.errors.otp}
                      </p>
                    )}

                    <p className="mt-10">
                      We sent a code to{" "}
                      <span>
                        {email.replace(/(.{2}).+(@.+)/, "$1********$2")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-40">
                <button type="submit" className="btn btn-secondary sm">
                  Verify Code
                </button>
              </div>

              <ul className="resend-code">
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleResendCode();
                    }}
                  >
                    Resend Code
                  </Link>
                </li>
                <li>
                  <Link to="/">Get Help</Link>
                </li>
              </ul>
            </div>
          </form>
        </div>

        <SubFooter />
      </div>

      <LeftPanel
        title="We’re setting the standard for what insurance tech should look like."
        subtitle="Selena, Founder of CTG Quotes"
        img={img3}
      />
    </section>
  );
};

export default VerifySecurityCode;
