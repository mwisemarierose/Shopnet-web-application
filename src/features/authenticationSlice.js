import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  isLoggedIn: false,
  token: "",
  userData: {},
  error: "",
  loginSuccess: "User Logged successfully",

};

export const authSlice = createSlice({
  name: "a",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.error = action.payload;
    },
   
  },
});

export const loginUser = (data,setisLoading) => (dispatch) => {
    
  axios({
    
    method: "POST",
    url: "https://shopnet-api.onrender.com/api/users/login",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
    .then((res) => {
      dispatch(token(res.data.result.token));
      localStorage.setItem("token", res.data.result.token);
      dispatch(login(res.data.result));
      setisLoading(false);
    })
    .catch((err) => {
      setisLoading(false);
      dispatch(loginError(err.response.data.message));
    });
   
}



export const { login, token, loginError, loginSuccess } = authSlice.actions;
export default authSlice.reducer;

