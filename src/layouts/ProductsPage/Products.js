import React,{useEffect ,useState} from "react";
import Footer from "../../components/Footer/Footer";
import drinkbanner from "../../assets/images/drinkbanner.png"
import simba from "../../assets/images/simba.png"
import vodka from "../../assets/images/alcohol/vodka.png"
import vodka1 from "../../assets/images/alcohol/vodka1.png"
import russia from "../../assets/images/alcohol/russia.png"
import Gin from "../../assets/Gin.png"
import smirnoff from "../../assets/images/alcohol/smirnoff.png"
import waragi from "../../assets/images/alcohol/waragi.png"
import supermarket from "../../assets/images/supermarket.png"
import no18 from "../../assets/images/no18.png"
import Category from "../../components/Product-page/category";
import axios from "axios";
import { useParams } from "react-router-dom";

const Products = () => {
  const {id} = useParams();
  const [category,setCategory] = useState([]);
  const [categories,setCategories] = useState([]);


 
  const fetchCategory = (id) => {
    axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/product/category/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    
      .then((response) => {
       setCategory(response.data.result);
       console.log(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCategory(id);
  }, [id]);

  
  const fetchCategories = (id) => {
    axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/category/single/${id}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    
      .then((response) => {
       setCategories(response.data.result);
      console.log(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCategories(id);
  }, [id]);
   return(
    <div style={{marginTop:"68px"}}>
      <div className="product-banner">
        <div>
        {/* <i>An alcoholic drink is a beverage that contains ethanol, a psychoactive substance that can <br/>induce a range of effects on the body and mind.</i> */}
        <h1>{categories.category_name}</h1>
        </div>
        <div>
          <img src={categories.category_image && categories.category_image.original}alt=''  width='250PX'/>
        </div>
      </div>
      <div style={{
           marginLeft:"10%",
           marginRight:"0px"
      }}>
     
      <div className="alcohol-buttons">
        <button style={{backgroundColor:'#D6F5D8',color:'black'}}>Popular</button>
        <button>Red Wine</button>
        <button>White wine</button>      
      </div>
        
      <div className="simba-card">
          <div style={{marginTop:"40px"}}>
            <p style={{
              marginTop: '0.1px',
              fontSize: '11px',
              paddingBottom: '1rem',
              color: '#0AAD0A',
            }}>Exlpore more</p>
          </div>
        </div>
      <div className="supermarket-with-alcohol"> 
        {category.map((item, index) => {
          return <Category 
          key={index} 
          id={index}
          title={item.product_name}
          price={item.price}
          img={item.product_image}
          supermarket={item.supermarket.super_name}
          address={item.supermarket.address}
          description = {item.product_description}
          category={item.category.category_name}
          product={item}
           />;
        })} 
        </div>
     
      </div>
      <Footer />
    </div>
   )
}

export default Products