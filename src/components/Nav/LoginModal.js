import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function LoginModal(props) {
    const {  error,setLogin,setUserEmail,setUserPassword,isLoading,handleLogin } = props;
  return (
      <div
          className="modal fade"
          id="LoginModal"
          aria-labelledby="LoginModalLabel"
          aria-hidden="true"
          open={true}
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  style={{ color: "black" }}
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  LOG IN
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p
                style={{
                  color: "red",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                {error}
              </p>
              <div className="modal-body">
                <div className="login-form">
                  <div className="social-login">
                    <button className="facebook-btn">
                      {" "}
                      <FaFacebook className="icon1" color="blue"/>
                      <span className="my-1 mx-1 px-1">
                        Login with Facebook
                      </span>
                    </button>
                    <button className="google-btn">
                      <FcGoogle className="icon1" />{" "}
                      <span className="my-1 mx-1 px-1">Login with Google</span>
                    </button>
                    <button className="google-btn">
                      {" "}
                      <BsFillTelephoneFill className="icon1" />{" "}
                      <span className="my-1 mx-1 px-1">Login with Phone</span>
                    </button>
                  </div>
                  <div className="manual-login">
                    <div className="top">
                      <div className="top-content">or</div>
                    </div>
                    <input
                      type="email"
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(event) => {
                        setUserPassword(event.target.value);
                      }}
                    />
                    <p
                      style={{ color: "black", fontWeight: "lighter" }}
                      className="forgot"
                    >
                      Forgot Password?<span className="green">Reset it</span>{" "}
                    </p>
                    <button
                     type="button"
                      className={`btn`}
                      onClick={ handleLogin }                    
                      disabled={isLoading}
                      style={{width:"100%"}}
                    >
                      Login
                    </button>
                  </div>
                  <p style={{ color: "black", fontWeight: "lighter" }}>
                    Don't have an account?
                  </p>
                  <p
                    className="green"
                    onClick={(e) => setLogin(true)}
                    style={{ alignContent: "center", cursor: "pointer" }}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    data-bs-toggle="modal"
                    data-bs-target="#SignupModal"
                  >
                    Sign Up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default LoginModal
