import React from "react";
import { useDispatch } from "react-redux";
import { imgurldefault } from "../../store/consts/rootConst";

import {
  editProductcart,
  deleteProductcart,
} from "../../store/slice/cartSlide";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleClickMiniBtn = () => {
    if (product.quantity > 1) {
      dispatch(
        editProductcart({
          productId: product.id,
          quantity: Number(product.quantity) - 1,
        })
      );
    }
  };
  const handleClickIncBtn = () => {
    dispatch(
      editProductcart({
        productId: product.id,
        quantity: Number(product.quantity) + 1,
      })
    );
  };

  const handleClickDeleteBtn = () => {
    dispatch(deleteProductcart(product.id));
  };

  return (
    <div key={product.id} className="cart-product-item">
      <div className="cart-product-item-header">
        <div className="cart-product-item-img">
          <img
            src={`${imgurldefault}/${product.productImage[0].path}`}
            alt="img"
          />
        </div>
      </div>
      <div className="cart-product-item-body">
        <div className="cart-product-item-body-first">
          <div className="cart-product-item-first-name-adress">
            <div className="cart-product-item-name">
              <h2>{product.title}</h2>
            </div>
            <div className="cart-product-item-adress">
              <span></span>
            </div>
          </div>
          <div className="cart-product-item-first-price">
            <div className="cart-product-item-price">
              <div className="cart-product-item-price-math">
                <span>{product.priceShow}</span>
                <span>x</span>
                <span>{product.quantity}</span>
              </div>
              <div className="cart-product-item-price-result">
                <span>=</span>
                <span>{product.sumPrice}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-product-item-body-last">
          <div className="cart-product-item-btn-delete">
            <span onClick={handleClickDeleteBtn}>Bỏ Ra</span>
          </div>
          <div className="cart-product-item-btn-action">
            <span
              className="cart-product-item-btn-action-mins"
              onClick={handleClickMiniBtn}
            >
              -1
            </span>
            <span
              className="cart-product-item-btn-action-inc"
              onClick={handleClickIncBtn}
            >
              +1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
