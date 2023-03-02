import { createSlice } from "@reduxjs/toolkit";

import { getProduct } from "../thunkAction/productThunkAction";

const initialState = {
  product: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const { setProduct } = productSlice.actions;
