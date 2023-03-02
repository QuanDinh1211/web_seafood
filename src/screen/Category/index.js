import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "../../assets/styles/homeStyle.scss";
import Category from "../../components/category";
import ProductAds from "../../components/ProductAds";
import ProductContent from "../../components/productContent";

import { getCategory } from "../../store/thunkAction/categoryThunkAction";
import {
  selectCategoryProduct,
  selectCategory,
} from "../../store/selectors/categorySelector";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(categoryId));
  }, [categoryId]);

  const dataProductCategory = useSelector(selectCategoryProduct);
  const { category } = useSelector(selectCategory);

  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <ProductAds />
        {dataProductCategory && category && (
          <Category
            categoryname={category}
            dataProductcategory={dataProductCategory}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
