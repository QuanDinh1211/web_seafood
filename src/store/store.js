import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "./slice/productSlice";
import { homeSlice } from "./slice/homeSlide";
import { categorySlice } from "./slice/categorySlide";
import { cartSlice } from "./slice/cartSlide";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    home: homeSlice.reducer,
    category: categorySlice.reducer,
    cart: cartSlice.reducer,
  },
});
