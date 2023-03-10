import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";
import ProductAds from "../../components/ProductAds";
import ProductContent from "../../components/productContent";
import Topic from "../../components/Topic";
import NavigateCategoryMobile from "../../components/layouts/NavigateCategoryMobile";
import Loading from "../../components/layouts/Loading";

import { getProductsCategory } from "../../store/thunkAction/homeThunkAction";
import {
  selectCategory,
  listProductsSelector,
  selectHome,
} from "../../store/selectors/homeSelector";

const Home = () => {
  const dispatch = useDispatch();
  const homeSate = useSelector(selectHome);
  const listCategory = useSelector(selectCategory);
  const listProductsCategoryData = useSelector(listProductsSelector);

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
        {homeSate.isLoading ? (
          <Loading />
        ) : (
          <>
            <ProductAds />
            <NavigateCategoryMobile />
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
          </>
        )}

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
