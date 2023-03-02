import { createSlice } from "@reduxjs/toolkit";

import { getCategory } from "../thunkAction/categoryThunkAction";

const initialState = {
  category: "",
  products: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    setCategoryName: (state, action) => {
      if (action.payload) {
        state.category = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    });
  },
});

export const { setCategory, setCategoryName } = categorySlice.actions;
