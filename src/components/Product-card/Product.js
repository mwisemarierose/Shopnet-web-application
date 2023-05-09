import React, { useState } from "react";
import "./style.css";
import ProductModal from "./ProductModal";

function Product({ product}) {
  const [showModal, setShowModal] = useState(false);
  console.log(product);

  return (
    <div className="card"style={{marginRight:"100px"}}>
      <img src={product.product_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5
          data-bs-toggle="modal"
          data-bs-target="#productsModal"
          className="card-title"
          onClick={() => setShowModal(true)}
          style={{ color: "green", cursor: "pointer" }}
        >
          {product.product_name}
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
          ${product.price}{" "}
        </p>
      </div>
      {
        showModal && <ProductModal 
                        setShowModal={setShowModal} 
                        product={product}
                        showModal={showModal}
                        />
      }
    </div>
  );
}
export default Product;