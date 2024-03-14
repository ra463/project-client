import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
