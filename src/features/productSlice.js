import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productCreated: false,
  product: [],
  categoryCreated :false,
  category :[],
};

export const productSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    product: (state) => {
      state.productCreated = true;
    },
    category: (state) => {
      state.categoryCreated = true;
    },
  },
});

export const createProduct = (data, setisLoading) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios({
    method: "POST",
    url: "https://shopnet-api.onrender.com/api/product/create",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch(product(response.data));
      setisLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createCategory = (data, setisLoading) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios({
    method: "POST",
    url: "https://shopnet-api.onrender.com/api/category/create",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch(category(response.data));
      setisLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const { product ,category } = productSlice.actions;
export default productSlice.reducer;
