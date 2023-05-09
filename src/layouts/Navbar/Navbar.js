import React from "react";
import { CiLocationOn } from 'react-icons/ci'
import Logo from '../../assets/images/logo.png'
import './style.css'

const Navbar = () => {
    return(
        <nav className="navbar-category">
           <div>
        <img src={Logo} className="logo" />
      </div>
            <div>
        <div className="d-flex form-inputs">
          <input
            className="form-control"
            type="text"
            placeholder="Search product ,stores..."
          />
          <i className="bx bx-search"></i>
        </div>
      </div>
            <div className="location">
                <div>
                    <CiLocationOn style={{
                        color:'red',
                        height:'30px',
                    }}/>
                    Kk45A
                </div>
                <div>
                    <button>save</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;