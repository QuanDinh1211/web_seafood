import { createSlice } from "@reduxjs/toolkit";

import { getCategory } from "../thunkAction/categoryThunkAction";

const initialState = {
  isLoading: false,
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
      } else {
        state.products = [];
      }
    },
    setCategoryName: (state, action) => {
      if (action.payload) {
        state.category = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.products = action.payload;
        } else {
          state.products = [];
        }
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.products = [];
      });
  },
});

export const { setCategory, setCategoryName } = categorySlice.actions;
