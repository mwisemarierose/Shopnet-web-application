import React from "react";
import  Logo from "../../assets/Logo1.png"
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
       <div className="logo">
       <img src={Logo} alt="" className="w-100 img-thumb" />
       </div>
        
        <p className="footer-links">
          <a href="#">
            Home
          </a>
          <a href="#">Login</a>

          <a href="#">Faq</a>

          <a href="#">SignUp</a>
        </p>

       
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>KN 2 Ave, Kigali</span> Kigali || Rwanda
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+25078088888</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@shopnet.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
      <p >ShopNet © 2015</p>
      </div>
    </div>
  );
};

export default Footer;
