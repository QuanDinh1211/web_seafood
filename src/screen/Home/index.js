import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";
import ProductAds from "../../components/ProductAds";
import ProductContent from "../../components/productContent";
import Topic from "../../components/Topic";

import {
  getHome,
  getProductsCategory,
} from "../../store/thunkAction/homeThunkAction";
import {
  selectCategory,
  listProductsSelector,
} from "../../store/selectors/homeSelector";

const Home = () => {
  const dispatch = useDispatch();
  const listCategory = useSelector(selectCategory);
  const listProductsCategoryData = useSelector(listProductsSelector);

  useEffect(() => {
    dispatch(getHome());
  }, []);

  useEffect(() => {
    if (Object.values(listCategory).length > 0) {
      Object.values(listCategory).map((category) => {
        dispatch(getProductsCategory(category));
      });
    }
  }, [listCategory]);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <ProductAds />
        <Topic />
        {listProductsCategoryData.map((category_product, index) => {
          return (
            category_product && (
              <>
                <ProductContent />
                <Category
                  key={index}
                  categoryname={category_product.category.name}
                  dataProductcategory={category_product.products}
                />
              </>
            )
          );
        })}

        {/* <ProductSlider /> */}
        {/* {Object.keys(products).map((category, index) => {
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
        })} */}
      </div>
    </div>
  );
};

export default Home;
