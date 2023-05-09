import React from "react";
import "./style1.css";
import Shopping from "../../assets/shopping.jpg";
const Card2 = ({}) => {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="top">
            <img
              src="https://www.instacart.com/image-server/347x214/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/homepage/real_time_updates-8330ec94f4d8006c6732bb2f65141e3596dcd3be02b0bf0376dcf5e2895fe37e.jpg"
              alt=""
            />
            
          </div>
          <div className="bottom">
            <h3>Choose Item that you want</h3>
            <p>
            Select items from  supermarket at ShopNet.com of your choice and enjoy the super fast search .
            </p>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img
              src="https://www.instacart.com/image-server/347x214/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/homepage/how_it_works-163dcc1c8f91c63d7b0bdb648b5370a89267d54c8cb90bd858495395b8a9e5f3.jpg"
              alt=""
            />
          
          </div>
          <div className="bottom">
            <h3>Find the neighborhood supermarket at our platform</h3>
            <p>
            At ShopNet.com, choose things from the neighborhood supermarket.....
            </p>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img
              src={Shopping}
              alt=""
            />
           
          </div>
          <div className="bottom">
            <h3>discover the location of the closest supermarket </h3>
            <p>
            The easiest approach to find out where product is located is to know its location before you go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
