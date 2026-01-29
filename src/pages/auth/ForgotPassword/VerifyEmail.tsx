import rightArrow from "../../../assets/images/right-arrow-long.svg"
import LeftPanel from "../../../components/LeftPanel";
import SubFooter from "../../../components/SubFooter";
import SubHeader from "../../../components/SubHeader";
import img2 from "../../../assets/images/img-2.png"
import Input from "../../../components/UI/input/Input";
import { useForgotPass } from "./useForgotPass";

const ForgotPassBox = () => {
    const { forgotPassFormik } = useForgotPass();
    return (
        <section className="auth-wrapper">
            <div className="right-panel">
                <div className="form-top">
                    <SubHeader />
                    <form onSubmit={forgotPassFormik.handleSubmit}>
                        <div className="auth-form">
                            <div className="mb-40">
                                <h4>Security Code</h4>
                                <p>We’ve sent a security code to your email address. Please check your inbox and enter the code below to continue.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-0">
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            label="Email Address *"
                                            placeholder="Enter Email"
                                            onChange={forgotPassFormik.handleChange}
                                            value={forgotPassFormik.values.email}
                                            errorMsg={forgotPassFormik.errors.email}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Send Button */}
                            <div className="text-center mt-40">
                                <button className="btn btn-secondary sm" type="submit">
                                Send Security Code <span><img src={rightArrow} alt="" /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <SubFooter />
            </div>
            <LeftPanel title="Do something today that your future self will thank you for." subtitle="Sean Patrick Flanery" img={img2} />
        </section>
    )
};
export default ForgotPassBox;
