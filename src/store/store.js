import { configureStore } from "@reduxjs/toolkit";

import { productSlice } from "./slice/productSlice";
import { homeSlice } from "./slice/homeSlide";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    home: homeSlice.reducer,
  },
});
