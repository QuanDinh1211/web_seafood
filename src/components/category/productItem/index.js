import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../../../assets/styles/productStyle.scss";

import { imgurldefault } from "../../../store/consts/rootConst";
import { setProduct } from "../../../store/slice/productSlice";
import { RootContext } from "../../../app/hooks/rootContext";

const ProductItem = ({ data, isSlide }) => {
  const dispatch = useDispatch();
  const { handleAddToCart } = useContext(RootContext);

  const handlickAddCartBtn = (event) => {
    event.preventDefault();
    handleAddToCart(dispatch, { product: data, quantity: 1 });
  };

  const handleOnclickProductItem = () => {
    dispatch(setProduct(data));
  };

  const {
    id,
    category_id,
    productImage,
    categoryName,
    link,
    title,
    price,
    priceShow,
  } = data;

  return (
    <Link
      to={link}
      className="category-item relative"
      onClick={handleOnclickProductItem}
    >
      <div className="category-item-first">
        <div className="category-item-img">
          <img src={`${imgurldefault}/${productImage[0].path}`} alt="img" />
        </div>
      </div>
      <div className="category-item-last">
        <div className="category-item-last-catename">
          <span>{categoryName}</span>
        </div>
        <div className="category-item-last-name">
          <h2>{title}</h2>
        </div>
        <div className="category-item-last-price">
          <span>{priceShow}</span>
        </div>
        <div className="category-item-last-volum">
          {/* <span>{weight}</span> */}
          <span></span>
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
