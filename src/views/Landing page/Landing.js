import React, { useEffect, useState } from "react";
import Navbar from "../../components/Nav/Navbar";
import Cards from "../../components/Card/supermarket";
import Footer from "../../components/Footer/Footer";
import Card2 from "../../components/Card/Bottom";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./style.css";
import Banner from "../../components/Banner/banner";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Content from "../../components/Product-page/Content";

function Home() {
  const [supermarket, setSupermarket] = useState([]);
  const [search, setSearch] = useState([]);
  const [grouped, setGrouped] = useState([]);
  const queryString = window.location.hash.split("?")[1];
  const params = new URLSearchParams(queryString);
  const [ loading,setLoading ] = useState(true);
  const queryValue = params.get("query");
  
  const handleSearch = (value) => {
    axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/product/search?query=${value}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      }
    })
      .then((response) => {
        setSearch(response.data.result);
        console.log(response.data, "heree");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  localStorage.setItem("position","relative");
  useEffect(()=>{
    
  },[]);
  useEffect(() => {
    fetchSupermarket();

    if (queryValue) {
     console.log(queryValue);
      handleSearch(queryValue);
    }
  }, [queryValue,handleSearch]);

  useEffect(() => {
   
    // sort the results by the supermarket name
    search.sort((a, b) => {
      if (a.supermarket.super_name < b.supermarket.super_name) {
        return -1;
      }
      if (a.supermarket.super_name > b.supermarket.super_name) {
        return 1;
      }
      return 0;
    });
    // group the results by the supermarket name and form an object of supermarket and array of products
    const groupedResults = search.reduce((acc, curr) => {
      if (!acc[curr.supermarket.super_name]) {
        acc[curr.supermarket.super_name] = [];
      }
      acc[curr.supermarket.super_name].push(curr);
      return acc;
    }, {});
    setGrouped(groupedResults);
  }, [search]);

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
    <div style={{marginTop:"68px"}}>
      <Banner />
      <h1 className="title">
        Search nearest market with product you want in Kigali City{" "}
      </h1>
      <div className="Wrapper">
          <div className="row">
            {
              // display keys of the grouped object as title and map through the values
              Object.keys(grouped).map((key, index) => {
                return (
                  <div className="d-flex flex-column w-100" key={index}>
                    <div className="simba-card">
                      <div>
                        <img
                          src={grouped[key][0].supermarket.sup_images[0]}
                          alt=""
                          width="50px"
                        />
                      </div>
                      <div>
                        <h6
                          style={{
                            marginBottom: "0.1px",
                            fontSize: "12px",
                          }}
                        >
                          {key}
                        </h6>
                        <p
                          style={{
                            marginTop: "0.1px",
                            fontSize: "11px",
                            paddingBottom: "1rem",
                            color: "#0AAD0A",
                          }}
                        >
                          Explore more
                        </p>
                      </div>
                    </div>
                    <div className="Card-Container">
                      {grouped[key].map((item, index) => {
                        return <Content key={index} data={item} />;
                      })}
                    </div>
                  </div>
                );
              })
            }
            {
               loading && <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '250px'
                          }}>
                            <CircularProgress />
                          </div>
            }
            {!loading && search.length < 1 &&
              supermarket &&
              <div className="Card-Container">
                {  Object.values(supermarket).map((item, index) => {
                    return (
                        <Cards
                          key={index}
                          name={item.super_name}
                          description={item.description}
                          address={item.address}
                          avatar={item.sup_images && item.sup_images[0]}
                          id={item._id}
                        />
                    );
                  })
                }
              </div>
              }
          </div>
        <h1 className="sub-title">Supermarket you can count on </h1>
        <div>
          <Card2 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;