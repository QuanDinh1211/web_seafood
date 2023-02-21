import React from "react";

import "../../assets/styles/cartStyle.scss";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title">
          <h1>Giỏ Hàng Của Bạn</h1>
        </div>
        <div className="cart-header">
          <div className="cart-list-product">
            <div className="cart-product-item">
              <div className="cart-product-item-header">
                <div className="cart-product-item-img">
                  <img
                    src="https://choppvn-catalogs.s3.ap-southeast-1.amazonaws.com/products/rec88A1drQ32RcVtG/38-HA-LONG-OYSTER-2-thumbnail%402x.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="cart-product-item-body">
                <div className="cart-product-item-body-first">
                  <div className="cart-product-item-first-name-adress">
                    <div className="cart-product-item-name">
                      <h2>Hàu Sữa Giống Nhật - Việt Nam</h2>
                    </div>
                    <div className="cart-product-item-adress">
                      <span>Local — Vietnam</span>
                    </div>
                  </div>
                  <div className="cart-product-item-first-price">
                    <div className="cart-product-item-price">
                      <div className="cart-product-item-price-math">
                        <span>120.000đ</span>
                        <span>x</span>
                        <span>4 gói</span>
                      </div>
                      <div className="cart-product-item-price-result">
                        <span>=</span>
                        <span>480.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-product-item-body-last">
                  <div className="cart-product-item-btn-delete">
                    <span>Bỏ Ra</span>
                  </div>
                  <div className="cart-product-item-btn-action">
                    <span className="cart-product-item-btn-action-mins">
                      -1
                    </span>
                    <span className="cart-product-item-btn-action-inc">+1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-product-item">
              <div className="cart-product-item-header">
                <div className="cart-product-item-img">
                  <img
                    src="https://choppvn-catalogs.s3.ap-southeast-1.amazonaws.com/products/rec88A1drQ32RcVtG/38-HA-LONG-OYSTER-2-thumbnail%402x.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="cart-product-item-body">
                <div className="cart-product-item-body-first">
                  <div className="cart-product-item-first-name-adress">
                    <div className="cart-product-item-name">
                      <h2>Hàu Sữa Giống Nhật - Việt Nam</h2>
                    </div>
                    <div className="cart-product-item-adress">
                      <span>Local — Vietnam</span>
                    </div>
                  </div>
                  <div className="cart-product-item-first-price">
                    <div className="cart-product-item-price">
                      <div className="cart-product-item-price-math">
                        <span>120.000đ</span>
                        <span>x</span>
                        <span>4 gói</span>
                      </div>
                      <div className="cart-product-item-price-result">
                        <span>=</span>
                        <span>480.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-product-item-body-last">
                  <div className="cart-product-item-btn-delete">
                    <span>Bỏ Ra</span>
                  </div>
                  <div className="cart-product-item-btn-action">
                    <span className="cart-product-item-btn-action-mins">
                      -1
                    </span>
                    <span className="cart-product-item-btn-action-inc">+1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-product-item">
              <div className="cart-product-item-header">
                <div className="cart-product-item-img">
                  <img
                    src="https://choppvn-catalogs.s3.ap-southeast-1.amazonaws.com/products/rec88A1drQ32RcVtG/38-HA-LONG-OYSTER-2-thumbnail%402x.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="cart-product-item-body">
                <div className="cart-product-item-body-first">
                  <div className="cart-product-item-first-name-adress">
                    <div className="cart-product-item-name">
                      <h2>Hàu Sữa Giống Nhật - Việt Nam</h2>
                    </div>
                    <div className="cart-product-item-adress">
                      <span>Local — Vietnam</span>
                    </div>
                  </div>
                  <div className="cart-product-item-first-price">
                    <div className="cart-product-item-price">
                      <div className="cart-product-item-price-math">
                        <span>120.000đ</span>
                        <span>x</span>
                        <span>4 gói</span>
                      </div>
                      <div className="cart-product-item-price-result">
                        <span>=</span>
                        <span>480.000đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-product-item-body-last">
                  <div className="cart-product-item-btn-delete">
                    <span>Bỏ Ra</span>
                  </div>
                  <div className="cart-product-item-btn-action">
                    <span className="cart-product-item-btn-action-mins">
                      -1
                    </span>
                    <span className="cart-product-item-btn-action-inc">+1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-body">
          <div className="cart-body-list-item">
            <div className="cart-body-item">
              <div className="cart-body-item-title">
                <span>Tiền Hàng</span>
              </div>
              <div className="cart-body-item-text">
                <span>522.000đ</span>
              </div>
            </div>
            <div className="cart-body-item">
              <div className="cart-body-item-title">
                <span>Phí Mua Hộ</span>
              </div>
              <div className="cart-body-item-text">
                <span>60.000đ</span>
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
              <span>582.000đ</span>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <div className="cart-footer-buy">
            <span>Thanh Toán</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
