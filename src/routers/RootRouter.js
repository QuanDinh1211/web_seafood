import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../screen/Home";
// import ProductDetail from "../screen/ProductDetail";
import ProductDetailTow from "../screen/ProductDetail/ProductDetailTow";
import Cart from "../screen/Cart";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/:category/:producid"
          element={<ProductDetailTow />}
        />
        <Route exact path="/cart" element={<Cart />} />
        {/* <Route exact path="/:category/:producid" element={<ProductDetail />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default RootRouter;
