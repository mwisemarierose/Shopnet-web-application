import React from 'react';
import bannerImg from "../../assets/8.png"
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent:"space-between",
        height: '180px',
        backgroundColor: '#DEEDD6',
        cursor:'pointer'
      
      }}
    >
      <div style={{padding: '20px',marginLeft:'45px'}} >
        <h1 style={{ color: 'black' }}>Search product that you want  </h1>
        <h1 style={{ color: 'black' }}> in nearby supermarket </h1>
        <p style={{ color: '#555' }}>Whatever you want , can be found in neighbourhood store .</p>
      </div>
      <div >
        <img src={bannerImg} alt="Banner" style={{height: '180px',width :'100%',marginRight:'20px'}}/>
      </div>
      
    </div>
  );
};

export default Banner;
