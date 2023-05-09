import React from "react";
import Card from "../../layouts/Card/Card";
import Footer from "../../components/Footer/Footer";
import Card1 from "../../layouts/Card/Card1";
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Home = () => {
    const [category,setCategory] = useState([]);
    const [loading,setLoading] =useState(true);

    useEffect(() => {
      fetchCategory();
    }, []);
    const fetchCategory = () => {
      axios({
        method: "GET",
        url: "https://shopnet-api.onrender.com/api/category/all",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      
        .then((response) => {
          setLoading(false);
         setCategory(response.data.result);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };

  return (
    <div style={{marginTop:"68px"}}>
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
      {category && Object.values(category).map((item, index) => {
            return (
              <Card
                key={index}
                image ={item.category_image.original}
                name={item.category_name}
                id={item._id}
              />
            ); 
          })}
      </div>
      <Card1 />
      <Footer />
    </div>
  );
};

export default Home;
