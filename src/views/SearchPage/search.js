import React from "react";
import simba from "../../assets/images/simba.png"
 import Content from "../../components/Product-page/Content";

const SearchPage = ({results}) => {
    
   return(
    <div>
        {/* {results.map} */}
      <div className="simba-card">
          <div>
            <img src={simba} alt='' width="50px"/>
          </div>
          <div>
            <h6 style={{
              marginBottom: '0.1px',
              fontSize: '12px'
            }}>SIMBA SUPERMARKET</h6>
            <p style={{
              marginTop: '0.1px',
              fontSize: '11px',
              paddingBottom: '1rem',
              color: '#0AAD0A',
            }}>Explore more</p>
          </div>
        </div>
      <div className="supermarket-with-alcohol"> 
        {results.map((result, index) => <Content key={index} data={result} id={index} />)} 
        </div>
    </div>
   )
}

export default SearchPage 