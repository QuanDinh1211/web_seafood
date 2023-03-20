import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../../assets/styles/productStyle.scss";

import { imgurldefault } from "../../../store/consts/rootConst";
import { setProduct } from "../../../store/slice/productSlice";
import { RootContext } from "../../../app/hooks/rootContext";
import { selectProductCart } from "../../../store/selectors/cartSelector";

const ProductItem = ({ data, isSlide }) => {
  const dispatch = useDispatch();
  const { handleAddToCart, handleDeleteCart } = useContext(RootContext);
  const dataProductCart = useSelector(selectProductCart);

  const handlickAddCartBtn = (event) => {
    event.preventDefault();
    handleAddToCart(dispatch, { product: data, quantity: 1 });
  };

  const handleOnclickProductItem = () => {
    dispatch(setProduct(data));
  };

  const { id, productImage, categoryName, link, title, priceShow } = data;

  const checkAddToCart = dataProductCart.some((product) => {
    return product.id === id;
  });

  const handleOnClickDeleteOutCart = (event) => {
    event.preventDefault();
    handleDeleteCart(dispatch, id);
  };

  return (
    <Link
      to={`/${link}`}
      className="category-item relative"
      onClick={handleOnclickProductItem}
    >
      <div className="category-item-price-sale">
        <span>0%</span>
      </div>
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
          <span className="category-item-price-root">{priceShow}</span>
        </div>
        <div className="category-item-last-volum">
          {/* <span>{weight}</span> */}
          <span></span>
        </div>
      </div>

      {checkAddToCart ? (
        <div
          className={
            isSlide
              ? "category-item-btn-addCart delete-out-cart slider-product-item"
              : "category-item-btn-addCart delete-out-cart"
          }
          onClick={handleOnClickDeleteOutCart}
        >
          <span>LẤY KHỎI GIỎ</span>
        </div>
      ) : (
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
      )}
    </Link>
  );
};

export default ProductItem;
