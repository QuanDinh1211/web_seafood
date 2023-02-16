import React from "react";
import { useSelector } from "react-redux";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";

import { productSelector } from "../../store/selectors/productSelector";

const Home = () => {
  const products = useSelector(productSelector);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        {Object.keys(products).map((category, index) => {
          return (
            <Category
              key={index}
              categoryname={category}
              dataProductcategory={products[category]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
