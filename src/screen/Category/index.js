import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";
import ProductAds from "../../components/ProductAds";
import ProductContent from "../../components/productContent";
import NotFoundProduct from "../../components/layouts/NotFoundProduct";

import { getCategory } from "../../store/thunkAction/categoryThunkAction";
import {
  selectCategoryProduct,
  selectCategory,
} from "../../store/selectors/categorySelector";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("cateid", categoryId);
    dispatch(getCategory(categoryId));
  }, [categoryId]);

  const dataProductCategory = useSelector(selectCategoryProduct);
  const { category } = useSelector(selectCategory);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        {dataProductCategory.length > 0 ? (
          <>
            <ProductAds />
            {dataProductCategory && category && (
              <Category
                categoryname={category}
                dataProductcategory={dataProductCategory}
              />
            )}
          </>
        ) : (
          <NotFoundProduct />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
