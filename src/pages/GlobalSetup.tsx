import InputField from "../components/common/forms/Input/Input";

const GlobalSetup = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="heading-holer">
                    <h1>Global Setup</h1>
                    <h2>Global Setup</h2>
                    <h3>Global Setup</h3>
                    <h4>Global Setup</h4>
                    <h5>Global Setup</h5>
                    <h6>Global Setup</h6>
                    <p>Global Setup</p>
                    <span>Global Setup</span>
                    <a href="#">Global Setup</a>
                    <button>Global Setup</button>
                    <ul>
                        <li>Global Setup</li>
                        <li>Global Setup</li>
                        <li>Global Setup</li>
                    </ul>
                    <ol>
                        <li>Global Setup</li>
                        <li>Global Setup</li>
                        <li>Global Setup</li>
                    </ol>
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
        </div>
    );
};

export default GlobalSetup;
