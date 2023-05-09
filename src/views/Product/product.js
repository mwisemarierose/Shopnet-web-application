import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Nav/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Product from "../../components/Product-card/Product";
import "./style.css";
import { CircularProgress } from "@material-ui/core";

const ProductsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [ loading,setLoading ] = useState(true);

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const fetchProduct = async (id) => {
    await axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/product/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        setProducts(response.data.result);
        setLoading(false);
        // console.log(response.data.result);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div style={{marginTop:"68px"}}>
      <Sidebar />
      <h3
        style={{
          marginLeft: "350px",
          marginTop: "80px",
          marginBottom: "40px",
          color: "green",
        }}
      >
        Fresh Fruits
      </h3>
      {
        loading &&  <div style={{
            display: 'flex',
            marginLeft:"300px",
            position:"relative",
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px'
          }}>
          <CircularProgress />
          </div>
      }
      
        {
        products &&<div className="card-container1">
          {products.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
          </div>
          }
      
      <h3
        style={{
          marginLeft: "350px",
          marginTop: "10px",
          marginBottom: "40px",
          color: "green",
        }}
      >
        Fresh Vegetable
      </h3>
      {
        loading &&  <div style={{
            display: 'flex',
            marginLeft:"300px",
            position:"relative",
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px'
          }}>
          <CircularProgress />
          </div>
      }
      <div className="card-container1">
        {products &&
          products.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
      </div>
    </div>
  );
};
export default ProductsPage;
