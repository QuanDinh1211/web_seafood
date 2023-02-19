import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/productStyle.scss";

import { fofmat } from "../../../utils/formatVND";

const ProductItem = ({ data, isSlide }) => {
  const handlickAddCartBtn = (event) => {
    event.preventDefault();
  };

  const { id, category, name, img, weight, price } = data;

  return (
    <Link to={`${category}/${id}`} className="category-item relative">
      <div className="category-item-first">
        <div className="category-item-img">
          <img src={require(`../../../assets/imgs/${img}`)} alt="img" />
        </div>
      </div>
      <div className="category-item-last">
        <div className="category-item-last-catename">
          <span>{category}</span>
        </div>
        <div className="category-item-last-name">
          <h2>{name}</h2>
        </div>
        <div className="category-item-last-price">
          <span>{fofmat(price)}</span>
        </div>
        <div className="category-item-last-volum">
          <span>{weight}</span>
        </div>
      </div>
      <div
        className={
          isSlide
            ? "category-item-btn-addCart slider-product-item"
            : "category-item-btn-addCart"
        }
        onClick={handlickAddCartBtn}
      >
        <span>ĐẶT VÀO GIỎ</span>
      </div>
    </Link>
  );
};

export default ProductItem;
