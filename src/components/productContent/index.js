import React from "react";

import "../../assets/styles/productContent.scss";

import ImageLink from "../layouts/ImageLink";

const ProductContent = () => {
  return (
    <div className="productContent-container boder-radius">
      <ImageLink
        url={"content"}
        img={
          "https://theme.hstatic.net/1000030244/1000943806/14/banner_index_1.jpg?v=3053"
        }
      />
    </div>
  );
};

export default ProductContent;
