import React,{useState} from "react";
import Navbar from "../../components/Nav/Navbar";
import { Outlet } from "react-router-dom";

const FrontPages = () => {
const [menu,setMenu]=useState("none");
const handleHideSearchResult=()=>{
  setMenu("none");
}
const handleOpenSearchResult=(open)=>{
  setMenu(open);
}
  return (
    <>
      <div style={{position:"fixed",top:0,zIndex:1}}><Navbar menu={menu} setMenu={handleOpenSearchResult}/></div>
      <div className="search_frame" onClick={handleHideSearchResult} style={{display:menu}}></div>
      <Outlet />
    </>
  );
};

export default FrontPages;
