import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function SignupModal(props) {
    const {
        registered,
        setfullname,
        setEmail,
        setPassword,
        setImage,
        isSignupLoading,
        handleRegister,
        setLogin} =props;
        console.log(isSignupLoading);
  return (
    <div
          className="modal fade"
          id="SignupModal"
          tabIndex="-1"
          aria-labelledby="SignupModalLabel"
          aria-hidden="true"
          style={{
            zIndex:"800"
          }}
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  style={{ color: "black" }}
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  SIGN UP
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {registered && <p style={{ color: "green" }}>User Created</p>}
              <div className="modal-body">
                <div className="login-form">
                  <div className="social-login">
                    <button className="facebook-btn">
                      {" "}
                      <FaFacebook className="icon1" color="blue"/>
                      <span className="my-1 mx-1 px-1">
                        Signup with Facebook
                      </span>
                    </button>
                    <button className="google-btn">
                      <FcGoogle className="icon1" />{" "}
                      <span className="my-1 mx-1 px-1">Signup with Google</span>
                    </button>
                    <button className="google-btn">
                      {" "}
                      <BsFillTelephoneFill className="icon1" />{" "}
                      <span className="my-1 mx-1 px-1">Signup with Phone</span>
                    </button>
                  </div>
                  <div className="manual-login">
                    <div className="top">
                      <div className="top-content">or</div>
                    </div>
                    <input
                      type="email"
                      onChange={(e) => {
                        setfullname(e.target.value);
                      }}
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                      id="login_password"
                    />
                    <input
                      type="file"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      placeholder="your profile"
                    />
                    <button type="submit" onClick={handleRegister} disabled={isSignupLoading}>
                      Sign up
                    </button>
                  </div>
                  <p style={{ color: "black", fontWeight: "lighter" }}>
                    Already have an account?
                  </p>
                  <p
                    style={{
                      alignContent: "center",
                      color: "#0AAD0A",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={(e) => setLogin(false)}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                  >
                    Log in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default SignupModal
