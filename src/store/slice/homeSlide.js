import { createSlice } from "@reduxjs/toolkit";

import { getHome, getProductsCategory } from "../thunkAction/homeThunkAction";

const initialState = {
  lang: "vi",
  isLoading: false,
  shop: null,
  listCategory: [],
  topic: [],
  listProductsCategory: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setProductCategory: (state, action) => {
      state.listProductsCategory = [
        ...state.listProductsCategory,
        action.payload,
      ];
    },
    setProduct: (state, action) => {
      state.product = state.products.find((product) => {
        return Number(product.id) === Number(action.payload);
      });
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shop = action.payload.shop;
        state.listCategory = Object.values(action.payload.category);
        state.topic = action.payload.product;
      })
      .addCase(getHome.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsCategory.fulfilled, (state, action) => {
        if (
          !state.listProductsCategory.some((product_category) => {
            return product_category.category.id === action.payload.category.id;
          })
        ) {
          state.listProductsCategory = [
            ...state.listProductsCategory,
            action.payload,
          ];
        }
      });
  },
});

export const { setProduct, setProductCategory, setLang } = homeSlice.actions;
