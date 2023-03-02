import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import "../../assets/styles/cartStyle.scss";
import {
  selectProductCart,
  sumPriceProductCartSelector,
} from "../../store/selectors/cartSelector";
import { RootContext } from "../../app/hooks/rootContext";

import ProductCart from "../../components/cart/ProductCart";

const Cart = () => {
  const dataProduct = useSelector(selectProductCart);
  const sumPrice = useSelector(sumPriceProductCartSelector);

  useEffect(() => window.scrollTo(0, 0), []);

  const { handleBuyCart } = useContext(RootContext);

  const handleOnclickBuyCart = async () => {
    if (dataProduct.length > 0) {
      const result = await handleBuyCart(sumPrice);
      if (result.success) {
        window.open(result.link, "_blank");
      }
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title">
          <h1>Giỏ Hàng Của Bạn</h1>
        </div>
        <div className="cart-header">
          <div className="cart-list-product">
            <div className="cart-product-item cart-list-product-title">
              <div className="cart-product-item-header"></div>
              <div className="cart-product-item-body">
                <div className="cart-product-item-body-first">
                  <div className="cart-product-item-first-name-adress"></div>
                  <div className="cart-product-item-first-price">
                    <div className="cart-product-item-price">
                      <div className="cart-product-item-price-math">
                        <span>Số Lượng</span>
                      </div>
                      <div className="cart-product-item-price-result">
                        <span>Giá Thành</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-product-item-body-last"></div>
              </div>
            </div>
            {dataProduct.map((product) => {
              return <ProductCart product={product} key={product.id} />;
            })}
          </div>
        </div>
        <div className="cart-body">
          <div className="cart-body-list-item">
            <div className="cart-body-item">
              <div className="cart-body-item-title">
                <span>Tiền Hàng</span>
              </div>
              <div className="cart-body-item-text">
                <span>{sumPrice}</span>
              </div>
            </div>
            <div className="cart-body-item">
              <div className="cart-body-item-title">
                <span>Phí Mua Hộ</span>
              </div>
              <div className="cart-body-item-text">
                <span>0 đ</span>
              </div>
            </div>
            <div className="cart-body-item cash">
              <div className="cart-body-item-title">
                <span>Phí Giao Hàng</span>
              </div>
              <div className="cart-body-item-text">
                <span>MIỄN PHÍ</span>
              </div>
            </div>
          </div>
          <div className="cart-body-sum-price">
            <div className="cart-body-sum-title">
              <span>TỔNG CỘNG</span>
            </div>
            <div className="cart-body-sum-price-item">
              <span>{sumPrice}</span>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <div className="cart-footer-buy" onClick={handleOnclickBuyCart}>
            <span>Thanh Toán</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
