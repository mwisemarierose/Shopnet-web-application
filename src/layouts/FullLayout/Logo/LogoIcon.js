import React from "react";
import Logo from "../../../assets/Logo.png";
const LogoIcon = (props) => {
  return <img alt="Logo" src={Logo} {...props} style={{height:'50px'}} />;
};

export default LogoIcon;
