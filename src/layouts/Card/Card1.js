import React from 'react'
import Cards from "../../components/Card/supermarket";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import { CircularProgress } from '@material-ui/core';

function Card1() {
    const [supermarket,setSupermarket] = useState([]);
    const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetchSupermarket();
  }, []);
  const fetchSupermarket = () => {
    axios({
      method: "GET",
      url: "https://shopnet-api.onrender.com/api/supermarket/all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    
      .then((response) => {
        setLoading(false);
       setSupermarket(response.data.result);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div>
         <div className="section-2-home">
        <h2>Neighbourhood</h2>
        {
        loading &&  <div style={{
            display: 'flex',
            position:"relative",
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px'
          }}>
          <CircularProgress />
          </div>
        }
        <div className="Card-Container">
          {supermarket && Object.values(supermarket).map((item, index) => {
            return (
              <Cards
                key={index}
                name={item.super_name}
                description={item.description}
                avatar={item.sup_images && item.sup_images[0]}
                address={item.address}
                id={item._id}
              />
            ); 
          })}
        </div>
      </div>
    </div>
  )
}

export default Card1