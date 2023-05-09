import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  supermarketCreated: false,
  supermarket: [],
};

export const supermarketSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    supermarket: (state) => {
      state.supermarketCreated = true;
    },
  },
});

export const createSupermarket = (data,setisLoading,setMessage) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios({
    method: "POST",
    url: "https://shopnet-api.onrender.com/api/supermarket/create",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
        console.log(response)
      setMessage({status:"success",message:"New supermarket added successfully!"});
      dispatch(supermarket(response.data));
      setisLoading(false);
    })
    .catch((err) => {
      setisLoading(false);
      setMessage({status:"error",message:"Something Went Wrong While Adding New Supermarket!Check If you have filled All information Correctly"});
      console.log(err);
    });
};
export const { supermarket} = supermarketSlice.actions;
export default supermarketSlice.reducer;
