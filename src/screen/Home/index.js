import React from "react";
import { useSelector } from "react-redux";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";
import ProductAds from "../../components/ProductAds";
import ProductContent from "../../components/productContent";
import ProductSlider from "../../components/productSlider";

import { productSelector } from "../../store/selectors/productSelector";

const Home = () => {
  const products = useSelector(productSelector);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <ProductAds />
        <ProductContent />
        {/* <ProductSlider /> */}
        {Object.keys(products).map((category, index) => {
          return (
            <>
              <Category
                key={index}
                categoryname={category}
                dataProductcategory={products[category]}
              />
              <ProductContent />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
