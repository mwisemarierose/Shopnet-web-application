import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";



const Card = ({image,name ,id}) => {
 
  return (
    
     
      <div className="CardMain">
        <div className="card1">
          <div className="text-card">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to={`/products/${id}`}
            >
              <h3>{name}</h3>
            </NavLink>
            <p>Free search with ShopNet</p>
            <div className="litle-supermarkets-image">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
          </div>
          <div className="image-card">
            <img src={image} />
          </div>
        </div>
      </div>
  );
};

export default Card;