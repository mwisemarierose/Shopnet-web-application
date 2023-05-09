import React, { useState } from "react";
import "./style.css";
import { IoLocationSharp } from "react-icons/io5";
import ProductModal from "../Product-card/ProductModal";


function Category({ img,title,description,price,supermarket,address, id ,category,product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      
      <img src={img} className="cards-img-top" alt="..." />
      <div className="card-body">
        <h5
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
          className="card-title"
          onClick={() => setShowModal(true)}
          style={{ color: "green", cursor: "pointer" }}
        >
          {title}
        </h5>
        <p className="card-text" style={{ backgroundColor: "yellowgreen" }}>
          many in stock{" "}
        </p>
        <p
          className="card-price"
          style={{
            color: "green",
            float: "right",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {price}{" "}
        </p>
      </div>
      {showModal && (<ProductModal showModal={showModal} setShowModal={setShowModal} product={product}/>
        // <div
        //   className="modal fade"
        //   id="searchModal"
        //   tabIndex="-1"
        //   aria-labelledby="searchModal"
        //   aria-hidden="true"
        // >
        //   <div className="modal-dialog modal-lg modal-dialog-scrollable ">
        //     <div className="modal-content">
        //       <div className="modal-header">
        //         <h5
        //           style={{ color: "black" }}
        //           className="modal-title"
        //           id="searchModal"
        //         >
        //           Product Details
        //         </h5>
        //         <button
        //           type="button"
        //           className="btn-close"
        //           data-bs-dismiss="modal"
        //           aria-label="Close"
        //         ></button>
        //       </div>
        //       <div className="modal-body">
        //         <div className="container-fluid py-5">
        //           <div className="row mb-3">
        //             <div className="card w-100 bg-white shadow-0 border rounded-3">
        //               <div className="card-body d-flex align-items-center">
        //                 <div className="col-md-4 col-lg-4 col-xl-4 mb-4 mb-lg-0 px-3">
        //                   <div className="img-fluid w-100 hover-zoom ripple rounded ripple-surface">
        //                     <img
        //                       src={img}
        //                       className="w-100 img-thumb"
        //                     />
        //                   </div>
        //                 </div>
        //                 <div className="col-md-6 col-lg-4 col-xl-5">
        //                   <h5>{title}</h5>
        //                   <div className="mt-1 mb-0 text-muted small">
        //                     <span>{category}</span>
        //                     <span className="text-primary"> • </span>
                            
        //                   </div>
        //                   {/* <div className="mb-2 text-muted small">
        //                     <span>Unique design</span>
        //                     <span className="text-primary"> • </span>
        //                     <span>For men</span>
        //                     <span className="text-primary"> • </span>
        //                     <span>
        //                       Casual
        //                       <br />
        //                     </span>
        //                   </div> */}
        //                   <p className="mb-4 mb-md-0">
        //                    {description}
        //                   </p>
        //                 </div>
        //                 <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
        //                     <h2 className="mb-1 me-1 text-center text-success">{price}</h2>
        //                   <div className="d-flex flex-row justify-content-center align-items-center mb-1">
        //                     <b className="mb-1 me-1 text-center">{supermarket}</b>
        //                   </div>
        //                   <div className="d-flex justify-content-start align-items-center px-3">
        //                   <IoLocationSharp />
        //                   <em className="px-1">{address}</em>
        //                   </div>
        //                   <div className="d-flex justify-content-center pt-2 flex-row">
        //                     <div className="text-danger mb-1 me-2">
        //                       <i className="fa fa-star"></i>
        //                       <i className="fa fa-star"></i>
        //                       <i className="fa fa-star"></i>
        //                       <i className="fa fa-star"></i>
        //                       <i className="fa fa-star"></i>
        //                     </div>
        //                   </div>
        //                   <button className="btn btn-success"style={{
        //                     width: "100%",
        //                     height: "50px",
        //                     borderRadius: "10px",
        //                     fontSize: "20px",
        //                     marginLeft:'5px',
        //                     marginTop:'20px'
        //                   }}> View Direction</button>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
}
export default Category;
