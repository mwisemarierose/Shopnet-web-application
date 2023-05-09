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
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../../features/productSlice";

const AddCategory = () => {
  const [categoryName, setCategoryname] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();

  const { categoryCreated } = useSelector((state) => state.product);

  function handleAddCategory(e) {
    const Data = new FormData();
    Data.append("category_name", categoryName);
    Data.append("category_image", categoryImage);

    e.preventDefault();
    setisLoading(true);
    dispatch(createCategory(Data, setisLoading));
    // console.log(categoryName, categoryImage)
  }

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCategoryImage(files[0]);
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
              Add Category
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
         {categoryCreated && (
            <p style={{ color: "#328EFB" }}>Category Created Successfully </p>
          )}
          <form>
            <TextField
              id="name-text"
              label="category-name "
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setCategoryname(e.target.value);
              }}
              sx={{
                mb: 2,
              }}
            />
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
                onClick={handleAddCategory}
                style={{ marginLeft: "800px" }}
                // className={`btn ${isLoading && "disabled"}`}
                // disabled={isLoading}
              >
                Add Category
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
