import React from "react";

import "../../assets/styles/categoryStyle.scss";

import ProductItem from "./productItem";

const Category = ({ categoryname, dataProductcategory }) => {
  return (
    <div className="category-container">
      <div className="category-wrapper">
        <div className="category-header">
          <h2>{categoryname}</h2>
        </div>
        <div className="category-body">
          <div className="category-list-item">
            {Object.values(dataProductcategory).map((product) => {
              return <ProductItem key={product.id} data={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
