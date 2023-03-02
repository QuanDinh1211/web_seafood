import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiurl } from "../consts/rootConst";

import { setCategoryName } from "../slice/categorySlide";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (category_id, thunkAPI) => {
    const response = await axios.post(`${apiurl}/product_by_category`, {
      category_id,
    });

    console.log(
      "response.data.data.products[0].setCategoryName",
      response.data.data.products[0].categoryName
    );

    thunkAPI.dispatch(
      setCategoryName(response.data.data.products[0].categoryName)
    );

    return response.data.data.products;
  }
);
