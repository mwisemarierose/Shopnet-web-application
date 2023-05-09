import React from 'react'
import {
  Modal,
  DialogContent,
  DialogTitle,
  Card,
  CardContent,
  Dialog,
  Typography,
  Button,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { IoLocationSharp } from "react-icons/io5";

function ProductModal(props) {
  const { setShowModal,product,showModal} = props;
  console.log(product);
  const mapUrl = `https://www.google.com/maps/place/${product.supermarket.location.coordinates[0]},${product.supermarket.location.coordinates[1]}`;
  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)} maxWidth="md">
  <DialogTitle style={{ color: "black" }}>Product Details</DialogTitle>
  <DialogContent>
    <div className="container-fluid py-5">
      <div className="row mb-3">
        <Card className="w-100 bg-white shadow-0 border-0 rounded-3 ml-0">
          <CardContent className="d-flex align-items-center">
            <div className="col-md-4 col-lg-4 col-xl-4 mb-4 mb-lg-0 px-3">
              <div className="img-fluid w-100 hover-zoom ripple rounded ripple-surface">
                <img src={product.product_image} className="w-100 img-thumb" alt={product.product_name} />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-5">
              <Typography variant="h5">{product.product_name}</Typography>
              <Typography variant="body2" className="mt-1 mb-0 text-muted small">
                <span>{product.category.category_name}</span>
                <span className="text-primary"> • </span>
               
              </Typography>
              {/* <Typography variant="body2" className="mb-2 text-muted small">
                <span>Unique design</span>
                <span className="text-primary"> • </span>
                <span>For men</span>
                <span className="text-primary"> • </span>
                <span>Casual</span>
              </Typography> */}
              <Typography variant="body1" className="mb-4 mb-md-0">
                {product.product_description}
              </Typography>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <Typography variant="h2" className="mb-1 me-1 text-center text-success">${product.price}</Typography>
              <div className="d-flex flex-row justify-content-center align-items-center mb-1">
                <Typography variant="body2" className="mb-1 me-1 text-center">{product.supermarket.super_name}</Typography>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center px-5 mx-3">
                <IoLocationSharp />
                <em className="px-1">{product.supermarket.address}</em>
              </div>
              <div className="d-flex justify-content-center pt-2 flex-row">
                <div className="text-danger mb-1 me-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <a href={mapUrl} target="_blank">
                <Button variant="contained" color="success" style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  marginLeft:'5px',
                  marginTop:'20px'
                }}>View Direction</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </DialogContent>
</Dialog>
  );
}

export default ProductModal;
