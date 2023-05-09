import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authenticationSlice";
import supermarketSlice from "./features/supermarketSlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    supermarket: supermarketSlice,
    product: productSlice,
  },
});
