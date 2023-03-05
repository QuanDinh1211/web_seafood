import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

import { RootContext } from "../hooks/rootContext";
import { apiurl, CART_COOKIE_KEY } from "../../store/consts/rootConst";

import {
  setProductCart,
  deleteProductcart,
  setListProductCart,
} from "../../store/slice/cartSlide";

const RootContentProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [showNavigateTablet, setshowNavigateTablet] = useState(false);

  // useEffect(() => {
  //   const dataProductCart = Cookies.get(CART_COOKIE_KEY);
  //   if (dataProductCart) {
  //     const dataProductQuantityCart = Object.values(
  //       JSON.parse(dataProductCart)
  //     ).map((product_quantity) => {
  //       return product_quantity;
  //     });

  //     dispatch(setListProductCart(dataProductQuantityCart));
  //   }
  // }, []);

  const handleOpenNavigateTablet = () => {
    setshowNavigateTablet(true);
  };

  const handleCloseNavigateTablet = () => {
    setshowNavigateTablet(false);
  };

  const handleAddToCart = (dispatch, data) => {
    dispatch(setProductCart(data));
    // const dataProductCart = Cookies.get(CART_COOKIE_KEY);
    // console.log("JSON.parse(dataProductCart)", JSON.parse(dataProductCart));
    // if (dataProductCart) {
    //   console.log("setok");

    //   const dataProductQuantityCart = Object.values(
    //     JSON.parse(dataProductCart)
    //   ).map((product_quantity) => {
    //     return product_quantity;
    //   });

    //   console.log([...dataProductQuantityCart, data]);
    //   Cookies.set(
    //     CART_COOKIE_KEY,
    //     JSON.stringify([...dataProductQuantityCart, data])
    //   );
    // } else {
    //   console.log("setUn");
    //   Cookies.set(CART_COOKIE_KEY, JSON.stringify([data]));
    // }
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
