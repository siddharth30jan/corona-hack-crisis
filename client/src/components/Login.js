import React from "react";

const login = () => {
  console.log("Inside login component");
  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-48">
                <img
                  src="images/Logo 2.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
              </span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Invalid Email Id "
              >
                <input className="input100" type="text" name="email" />
                <span
                  className="focus-input100"
                  data-placeholder="Email"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Invalid password"
              >
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className="input100" type="password" name="pass" />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn vButton4">Login</button>
                </div>
                <span className="login100-form-title googleLogin">
                  <img
                    src="images/Or login with.png"
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </span>
              </div>
              <div>
                <span className="login100-form-title googleLogo">
                  <img
                    src="images/google-plus.png"
                    className="img-fluid"
                    alt="Responsive image"
                  />
                </span>
              </div>

              <div className="text-center p-t-30">
                <span className="txt1">Don’t have an account?</span>

                <a className="txt2" href="signup">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </div>
  );
};

export default login;
