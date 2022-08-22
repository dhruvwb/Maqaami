import "./login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="LoginContent">
        <h1>Login to Your Account.</h1>
        <div className="PhoneContact">
          <small>
            <img
              src="https://www.maqaami.com/public/assets/img/flags/ae.svg"
              alt=""
            />
            +971
          </small>
          <input type="Phone" placeholder="Phone" />
        </div>
        {/* This is the checkbox */}
        <div className="Checkbox">
          <input type="checkbox" name="" id="" />
          <label htmlFor="Remeber me">Remeber me</label>
        </div>
        {/* Button */}
        <div>
          <button className="Loginbtn">Request Otp</button>
        </div>
        {/* Don't have an account section */}
        <div className="HrText">
          <span>
            <span>Don't have an account</span>
            <div className="Hrup">
              <hr />
            </div>
          </span>
        </div>
        {/* THis is button */}
        <button className="CreateBtn">CREATE AN ACCOUNT</button>
      </div>
    </div>
  );
};

export default Login;
