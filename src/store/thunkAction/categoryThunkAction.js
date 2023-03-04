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

    thunkAPI.dispatch(
      setCategoryName(response.data.data.products[0].categoryName)
    );

    console.log("getdata");
    return response.data.data.products;
  }
);
