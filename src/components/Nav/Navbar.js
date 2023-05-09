import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authenticationSlice";
import Button from '@mui/material/Button';
import "./style.css";
import CustomizedMenus from "./Location";
import SearchInput from "./SearchInput";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Cookies from "js-cookie";
import UserAccount from "./UserAccount";

function Navbar(props) {
  const {menu}=props;
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [image, setImage] = useState("");
  const [registered, setRegistered] = useState(false);
  const [location,setLocation]=useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userData, error, login } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(Object.keys(userData).length>0){
      console.log(userData);
      Cookies.set("role",userData.role,{expires:7});
      Cookies.set("profile",userData.profile,{expires:7});
    }
    if (isLoggedIn) {
      switch (userData.role) {
        case "Admin":
          navigate("/dashboard");
          break;
        case "Manager":
          navigate("/manager");
          break;
        case "Customer":
          navigate("/homepage");
          break;
        default:
          navigate("/landing");
      }
    }
    if (error) {
      setisLoading(false);
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    setisLoading(true);
const data={ email: userEmail, password: userPassword};
    dispatch(
      loginUser(data,setisLoading)
    );
  };

  function handleRegister() {
    setIsSignupLoading(true);
    const Data = new FormData();
    Data.append("full_name", fullname);
    Data.append("email", email);
    Data.append("profile", image);
    Data.append("password", password);

    fetch("https://shopnet-api.onrender.com/api/users/signup", {
      method: "POST",
      body: Data,
    }).then((response) => {
      setIsSignupLoading(false);
      if (response.ok) {
        setRegistered(true);
      } else {
        throw new Error("Failed to Register");
      }
    });
  }

  const handleLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const coordinates = [latitude, longitude];
      console.log(coordinates);
      localStorage.setItem("coordinates", JSON.stringify(coordinates));
    });
  };

  const handleNavigate = () => {
    navigate("/landing/?query=" + searchQuery);
  };

  const handleLocationChange=(locat)=>{
    setLocation(locat)
  }

  const handleSetMenu=(menus)=>{
    props.setMenu(menus);
  }
  return (
    <nav style={{width:"100vw"}}>

      {/* Logo Image that Appear on Web */}

      <div>
        <img src={Logo} className="logo" onClick={()=>navigate("/homepage")} style={{cursor:"pointer"}}/>
      </div>

      {/* Input Search */}

      {/* <div className="d-flex form-inputs" style={{maxWidth:"700px"}}>
        <input
          className="form-control"
          type="text"
          placeholder="Search product ,stores..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <i onClick={handleNavigate} className="bx bx-search"></i>
      </div> */}
        <SearchInput location={location} menu={menu} setMenu={handleSetMenu}/>

      {/* Signup and Login */}

        <div style={{ display: "flex",marginRight:"25px" }}>

        {Cookies.get("role") !== "Customer" ? (
          <>
          {/* Select Button */}

          <div className="md-dropdown">
            <CustomizedMenus changedLocation={handleLocationChange}/>
          </div>
          {/* Login */}
          <div
            style={{ padding: "15px", cursor: "pointer",marginRight:"20px",fontSize: "18px"}}
            data-bs-toggle="modal"
            data-bs-target="#LoginModal"
            onClick={() => setIsOpen(true)}
          >
            Log in
          </div>
          {/* Signup */}
          <div className="md-dropdown" style={{margin:"10px 30px 10px 0px"}}>
             <Button 
                type="button" 
                variant="contained" 
                style={{background:"#0AAD0A"}}
                onClick={() => setIsOpen(true)}
                data-bs-toggle="modal"
                data-bs-target="#SignupModal"
              >
                Sign up
            </Button>
          </div>
          </>
          ):(<>
            <UserAccount/>
            </>)}

        </div>

      {/* Login Modals */}

        <LoginModal 
              error={ error }
              setUserEmail={setUserEmail}
              isLoading={isLoading}
              setUserPassword={setUserPassword}
              handleLogin={handleLogin}
              setLogin={setLogin}
          />
        
      {/* Signup Modal */}

        <SignupModal
            registered={registered} 
            setfullname={setfullname}
            setEmail={setEmail}
            setPassword={setPassword}
            setImage={setImage}
            handleRegister={handleRegister}
            setLogin={setLogin}
            isSignupLoading={isSignupLoading}
        />
    </nav>
  );
}
export default Navbar;
