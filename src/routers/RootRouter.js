import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../screen/Home";
// import ProductDetail from "../screen/ProductDetail";
import ProductDetailTow from "../screen/ProductDetail/ProductDetailTow";
import Cart from "../screen/Cart";
import Introduction from "../screen/Introduction";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/:category/:productid"
          element={<ProductDetailTow />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/introduction" element={<Introduction />} />
        {/* <Route exact path="/:category/:producid" element={<ProductDetail />} /> */}
        <Route exact path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default RootRouter;
