import React from 'react';
import './style.css';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Cards({avatar, name, description ,id,address}) {
  return (

    <div className="card-container" >
      <div className="avatar-container">
        <img src={avatar} alt="" className="avatar" />
      </div>
      <div className="description-container">
        <h2 className="name">
        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>{name}</Link></h2>
        <p className="description">{description}</p>
        <div style={{display:'flex'}}>
          <IoLocationSharp style={{ color: "#3270FC" ,marginTop:'5px'}} />
        <p style={{fontWeight:'lighter',fontStyle:'italic' }}>{address}</p></div>
      </div>
    </div>
  );
}
export default Cards;
