import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    products: productSlice,
    auth: authSlice,
  },
});
