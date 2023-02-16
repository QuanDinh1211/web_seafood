import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/styles/productDetail.scss";

import { fofmat } from "../../utils/formatVND";

import { setProduct } from "../../store/slice/productSlice";
import { selectProductItem } from "../../store/selectors/productSelector";

const ProductDetail = () => {
  const dispatch = useDispatch();
  let { producid } = useParams();

  useEffect(() => {
    dispatch(setProduct(producid));
  }, [producid]);

  const product = useSelector(selectProductItem);

  const [state, setState] = useState({
    img_active: null,
    volumeProduc: null,
    sumprice: null,
    price_casback: null,
  });

  const handleClick = (event) => {
    setState({ ...state, img_active: event.target.alt });
  };

  useEffect(() => {
    if (product) {
      setState({
        ...state,
        img_active: product.img,
        volumeProduc: product.minimum_volume,
        sumprice: Number(product.minimum_volume) * Number(product.price),
        price_casback: Number(product.minimum_volume) * Number(product.casback),
      });
    }
  }, [product]);

  const handleClickMiniVolumeProduct = () => {
    if (Number(volumeProduc) > Number(product.minimum_volume)) {
      const newVolume = Number(volumeProduc) - Number(product.variability);
      setState({
        ...state,
        volumeProduc: newVolume,
        sumprice: newVolume * Number(product.price),
        price_casback: newVolume * Number(product.casback),
      });
    }
  };

  const handleClickIncVolumeProduct = () => {
    if (Number(volumeProduc) < Number(product.maxmum_volume)) {
      const newVolume = Number(volumeProduc) + Number(product.variability);
      setState({
        ...state,
        volumeProduc: newVolume,
        sumprice: newVolume * Number(product.price),
        price_casback: newVolume * Number(product.casback),
      });
    }
  };

  const { img_active, volumeProduc, sumprice, price_casback } = state;

  return (
    product && (
      <div className="productdetail-container">
        <div className="productdetail-wrapper">
          <div className="productdetail-first">
            <div className="productdetail-first-img">
              {img_active ? (
                <img
                  src={require(`../../assets/imgs/${img_active}`)}
                  alt={`${img_active}`}
                />
              ) : (
                <img
                  src={require(`../../assets/imgs/${product.img}`)}
                  alt={`${product.img}`}
                />
              )}
            </div>
            <div className="productdetail-first-list-img">
              {product.list_img &&
                product.list_img.length > 0 &&
                product.list_img.map((img, index) => {
                  return (
                    <div
                      className={
                        img_active === img
                          ? "productdetail-first-list-img-item active"
                          : "productdetail-first-list-img-item"
                      }
                      key={index}
                      onClick={handleClick}
                    >
                      <img
                        src={require(`../../assets/imgs/${img}`)}
                        alt={`${img}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="productdetail-last">
            <div className="productdetail-last-des">
              <div className="productdetail-last-name">
                <h2>{product.name}</h2>
              </div>
              <div className="productdetail-last-price">
                <span>{fofmat(product.price)}</span>
              </div>
              <div className="productdetail-last-volum">
                <span>{product.weight}</span>
              </div>
            </div>
            <div className="productdetail-last-shop">
              <div className="productdetail-last-shop-logo">
                <img
                  src={require("../../assets/imgs/shop.jpg")}
                  alt="logoshop"
                />
              </div>
              <div className="productdetail-last-shop-name-des">
                <div className="productdetail-last-shop-name">
                  <span>Tops Market</span>
                </div>
                <div className="productdetail-last-shop-des">
                  <span>Giá rẻ cho mọi nhà</span>
                </div>
              </div>
            </div>
            <div className="productdetail-last-order">
              <div className="productdetail-last-order-volum">
                <div className="productdetail-last-order-volum-title">
                  <span>Số lượng:</span>
                </div>
                <div className="productdetail-last-order-volum-body">
                  <div
                    className="productdetail-last-order-volum-body-min"
                    onClick={handleClickMiniVolumeProduct}
                  >
                    <i className="fas fa-minus"></i>
                  </div>
                  <div className="productdetail-last-order-volum-body-value">
                    <span>{volumeProduc}</span>
                    <span>{product.unit}</span>
                  </div>
                  <div
                    className="productdetail-last-order-volum-body-inc"
                    onClick={handleClickIncVolumeProduct}
                  >
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="productdetail-last-order-sumprice">
                <div className="productdetail-last-order-sumprice-title">
                  <span>Tổng cộng:</span>
                </div>
                <div className="productdetail-last-order-sumprice-body">
                  <span>{fofmat(sumprice)}</span>
                </div>
              </div>
            </div>
            <div className="productdetail-last-btn">
              <div className="productdetail-last-btn-addcart">
                <span>Đặt vào giỏ</span>
              </div>
            </div>
            <div className="productdetail-last-from">
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Giao sớm nhất:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>Ngày mai, 09:00 - 10:00</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Cashback:</span>
                </div>
                <div className="productdetail-last-from-item-des cashback">
                  <i className="fas fa-funnel-dollar"></i>
                  <span>{fofmat(price_casback)}</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Đóng Gói:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>{product.weight}</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Xuất Xứ:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>{product.origin}</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Tối Thiểu:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>1 kg</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>Tối Đa:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>3 kg</span>
                </div>
              </div>
              <div className="productdetail-last-from-item">
                <div className="productdetail-last-from-item-title">
                  <span>+/- Tối Thiểu:</span>
                </div>
                <div className="productdetail-last-from-item-des">
                  <span>0.25 kg</span>
                </div>
              </div>
            </div>

            {product.description.length > 0 && (
              <div className="productdetail-last-note">
                <div className="productdetail-last-note-title">
                  <span>Ghi chú:</span>
                </div>
                <div className="productdetail-last-note-text">
                  {product.description.map((description, index) => {
                    return <span key={index}>- {description}</span>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
