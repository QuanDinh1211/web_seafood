import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiurl } from "../consts/rootConst";

export const getHome = createAsyncThunk("home/getHome", async () => {
  const response = await axios.post(`${apiurl}/home`);
  return response.data.data;
});

export const getProductsCategory = createAsyncThunk(
  "home/getProductsCategory",
  async (category) => {
    const response = await axios.post(`${apiurl}/product_by_category`, {
      category_id: category.id,
    });

    return {
      category,
      products: response.data.data.products,
    };
  }
);
