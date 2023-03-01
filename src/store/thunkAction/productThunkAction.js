import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiurl } from "../consts/rootConst";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (product_id) => {
    const response = await axios.post(`${apiurl}/product_by_id`, {
      product_id,
    });

    return response.data.data.products;
  }
);
