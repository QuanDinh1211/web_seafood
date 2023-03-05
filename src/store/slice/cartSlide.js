import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setListProductCart: (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    setProductCart: (state, action) => {
      if (action.payload) {
        state.products.push(action.payload);
      }
    },
    editProductcart: (state, action) => {
      if (action.payload) {
        state.products = state.products.map((productItem) => {
          const { product } = productItem;
          if (Number(product.id) === Number(action.payload.productId)) {
            return { product, quantity: action.payload.quantity };
          }
          return productItem;
        });
      }
    },
    deleteProductcart: (state, action) => {
      if (action.payload) {
        state.products = state.products.filter((productItem) => {
          const { product } = productItem;
          return Number(product.id) !== Number(action.payload);
        });
      }
    },
  },
});

export const {
  setProductCart,
  editProductcart,
  setListProductCart,
  deleteProductcart,
} = cartSlice.actions;
