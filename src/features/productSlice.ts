import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts } = userSlice.actions;
export default userSlice.reducer;
