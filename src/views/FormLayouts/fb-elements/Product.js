import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  option,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../features/productSlice";

const AddProduct = () => {
  const [supermarket, setSupermarket] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryid] = useState("");
  const [productName, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [supermarketId, setSupermarketId] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const { productCreated } = useSelector((state) => state.product);

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
        setCategory(
          response.data.result.map((res) => ({
            id: res._id,
            category_name: res.category_name,
            value: res._id,
            label: res.category_name,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, []);

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
        setSupermarket(
          response.data.result.map((res) => ({
            id: res._id,
            super_name: res.super_name,
            value: res._id,
            label: res.super_name,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchSupermarket();
  }, []);

  function handleAddProduct(e) {
    const Data = new FormData();
    Data.append("product_name", productName);
    Data.append("price", price);
    Data.append("supermarket", supermarketId.id);
    Data.append("product_image", image);
    Data.append("category", categoryId.id);
    Data.append("product_description", description);
    e.preventDefault();
    setisLoading(true);

    dispatch(createProduct(Data, setisLoading));
    // console.log(productName, price,categoryId);
  }
  // const handleCategoryChange = (event) => {
  //   setCategoryid(event.target.value);
  // };
  // const handleSupermarketChange = (event) => {
  //   setSupermarketId(event.target.value);
  // };
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "10px 10px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1269AB",
              }}
            >
              Add Product
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
            height: "100%",
          }}
        >
          {productCreated && (
            <p style={{ color: "#328EFB" }}>Product Created Successfully </p>
          )}
          <form>
            <TextField
              id="name-text"
              label="Product name "
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setProductname(e.target.value);
              }}
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="price"
              label=" price"
              type="number"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <TextField
              id="description"
              label=" Description"
              type="text"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <Select 
              options={supermarket}
              value={supermarketId}
              onChange={(selected) => setSupermarketId(selected)}
              isSearchable
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <Select 
            styles={{zIndex:9999}}
              options={category}
              value={categoryId}
              onChange={(selected) => setCategoryid(selected)}
              isSearchable
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <TextField
              accept="image/*"
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleImageChange}
            />
            <div>
              <Button
                color="primary"
                variant="contained"
                size="large"
                style={{ marginLeft: "800px" }}
                onClick={handleAddProduct}
                className={`btn ${isLoading && "disabled"}`}
                disabled={isLoading}
              >
                Add Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProduct;
