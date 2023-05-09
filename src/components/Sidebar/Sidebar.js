import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './sidebar.css'
import { useParams } from "react-router-dom";
import { Skeleton } from "@material-ui/core";

function Sidebar() {
 const {id} = useParams();
  const [supermarket,setSupermarket] = useState([]);

  useEffect(() => {
    fetchSupermarket(id);
  }, [id]);
  const fetchSupermarket = (id) => {
    axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/supermarket/single/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    
      .then((response) => {
       setSupermarket(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    
    <div id="wrapper" className="toggled" style={{paddingTop:"0px"}}>
      <div id="sidebar-wrapper" style={{paddingTop:"30px"}}>
      {
        !supermarket.sup_images &&(<Skeleton variant="rectungular" height={"200px"} margin={0} />)
      }
      
      {
          supermarket.sup_images && (
            <div className="avatari-container">
               <img style ={{border:'none'}} src={supermarket.sup_images} alt="" className="avatari" />
            </div>
           )
       }
      {!supermarket.super_name && <Skeleton variant="text"/>}
      {supermarket.super_name && <h3 className="supermarket">{supermarket.super_name}</h3>}
      
      <p className="satisf">100% Satisfaction guarantee<span></span></p>
      <div className="border-top"></div>
        <ul className="sidebar-nav">
          <li>
            <a href="">Fresh Fruit</a>
          </li>
          <li>
            <a href="">Fresh vegetable</a>
          </li>
          <li>
            <a href="">Snacks</a>
          </li> 
          <li>
            <a href="">Alcohol</a>
          </li>
          <li>
            <a href="">Soft Drinks</a>
          </li>
        </ul>
      </div>
      </div>
  );
}
export default Sidebar;

    