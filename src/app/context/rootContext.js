import React, { useState } from "react";
import axios from "axios";

import { RootContext } from "../hooks/rootContext";
import { apiurl } from "../../store/consts/rootConst";

import { setProductCart, deleteProductcart } from "../../store/slice/cartSlide";

const RootContentProvider = ({ children }) => {
  const [showNavigateTablet, setshowNavigateTablet] = useState(false);

  const handleOpenNavigateTablet = () => {
    setshowNavigateTablet(true);
  };

  const handleCloseNavigateTablet = () => {
    setshowNavigateTablet(false);
  };

  const handleAddToCart = (dispatch, data) => {
    dispatch(setProductCart(data));
  };

  const handleDeleteCart = (dispatch, id) => {
    dispatch(deleteProductcart(id));
  };

  const handleBuyCart = async (price) => {
    try {
      const response = await axios.post(`${apiurl}/payment`);
      return {
        success: true,
        link: response.data.data.link,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        link: null,
      };
    }
  };

  const rootContextData = {
    showNavigateTablet,
    handleOpenNavigateTablet,
    handleCloseNavigateTablet,
    handleAddToCart,
    handleDeleteCart,
    handleBuyCart,
  };

  return (
    <RootContext.Provider value={rootContextData}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContentProvider;
