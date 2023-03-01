import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/styles/productDetailTowStyle.scss";

import { getProduct } from "../../store/thunkAction/productThunkAction";
import { getHome } from "../../store/thunkAction/homeThunkAction";
import { selectProduct } from "../../store/selectors/productSelector";
import { imgurldefault } from "../../store/consts/rootConst";

const ProductDetailTow = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getHome());
    if (!product) {
      dispatch(getProduct(productid));
    }
  }, []);

  const product = useSelector(selectProduct);

  const [productState, setproductState] = useState({
    img_active: null,
    volumeProduc: 1,
  });

  const handleClickListImg = (event) => {
    setproductState({
      ...productState,
      img_active: event.target.getAttribute("name"),
    });
  };

  const handleClickMiniVolumeProduct = () => {
    if (volumeProduc > 1) {
      setproductState({ ...productState, volumeProduc: volumeProduc - 1 });
    }
  };

  const handleClickIncVolumeProduct = () => {
    setproductState({ ...productState, volumeProduc: volumeProduc + 1 });
  };

  const { img_active, volumeProduc } = productState;

  return (
    <div className="productDetailTow-container">
      {product && (
        <div className="productDetailTow-wrapper">
          <div className="productDetailTow-content">
            <div className="productDetailTow-content-header">
              <div className="productDetailTow-content-header-first">
                <div className="productDetailTow-content-header-first-img">
                  {img_active ? (
                    <img
                      src={`${imgurldefault}/${img_active}`}
                      alt="ProductImg"
                    />
                  ) : (
                    <img
                      src={`${imgurldefault}/${product.productImage[0].path}`}
                      alt="ProductImg"
                    />
                  )}
                </div>
              </div>
              <div className="productDetailTow-content-header-last">
                <div className="productDetailTow-content-header-last-list-item">
                  {product.productImage &&
                    Object.values(product.productImage).map((img, index) => {
                      return (
                        <div
                          className="productDetailTow-content-header-last-item active"
                          key={index}
                          name={img.path}
                          onClick={handleClickListImg}
                        >
                          <img
                            src={`${imgurldefault}/${img.path}`}
                            alt={img.path}
                            name={img.path}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="productDetailTow-content-body">
              <div className="productDetailTow-content-name-msp">
                <div className="productDetailTow-content-name">
                  <h2>{product.title}</h2>
                </div>
                <div className="productDetailTow-content-msp">
                  <span className="productDetailTow-content-msp-title">
                    Mã SP:
                  </span>
                  <span>{product.id}</span>
                </div>
              </div>
              <div className="productDetailTow-content-option-des">
                <div className="productDetailTow-content-option-des-list-item">
                  <div className="productDetailTow-content-option-des-item">
                    <span>{product.desc}</span>
                  </div>
                  {false && (
                    <>
                      <div className="productDetailTow-content-option-des-item">
                        <div className="productDetailTow-content-option-des-item-title">
                          <span>Quy cách:</span>
                        </div>
                        <div className="productDetailTow-content-option-des-item-text">
                          <span>Đóng khay 500g, hút chân không</span>
                        </div>
                      </div>
                      <div className="productDetailTow-content-option-des-item">
                        <div className="productDetailTow-content-option-des-item-title">
                          <span>Tình trạng:</span>
                        </div>
                        <div className="productDetailTow-content-option-des-item-text">
                          <span>Đông lạnh</span>
                        </div>
                      </div>
                      <div className="productDetailTow-content-option-des-item">
                        <div className="productDetailTow-content-option-des-item-title">
                          <span>Xuất xứ:</span>
                        </div>
                        <div className="productDetailTow-content-option-des-item-text">
                          <span>Nhập khẩu từ Nauy</span>
                        </div>
                      </div>
                      <div className="productDetailTow-content-option-des-item">
                        <div className="productDetailTow-content-option-des-item-title">
                          <span>HSD, bảo quản:</span>
                        </div>
                        <div className="productDetailTow-content-option-des-item-text">
                          <span>
                            12 tháng kể từ NSX, bảo quản nhiệt độ tốt nhất từ
                            -18 độ C -
                          </span>
                        </div>
                      </div>
                      <div className="productDetailTow-content-option-des-item">
                        <div className="productDetailTow-content-option-des-item-title">
                          <span>Món ngon :</span>
                        </div>
                        <div className="productDetailTow-content-option-des-item-text">
                          <span>
                            nướng, chiên giòn sốt me, kho tiêu, tẩm bột chiên
                            xù...
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="productDetailTow-content-order-value">
                <div className="productDetailTow-content-order-price">
                  <div className="productDetailTow-content-order-list-price">
                    <div className="productDetailTow-content-order-price-active">
                      <span>{product.priceShow}</span>
                    </div>

                    {false && (
                      <>
                        <div className="productDetailTow-content-order-price-root">
                          <span></span>
                        </div>
                        <div className="productDetailTow-content-order-price-sale">
                          <span></span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="productDetailTow-content-order-unit">
                  {false && <span>Quy Cách: Khay 500g</span>}
                </div>
                <div className="productDetailTow-content-order-action">
                  <div className="productDetailTow-content-order-action-title">
                    <span>Số lượng:</span>
                  </div>
                  <div className="productDetailTow-content-order-action-btn">
                    <div
                      onClick={handleClickMiniVolumeProduct}
                      className="productdetail-last-order-volum-body-min"
                    >
                      <i className="fas fa-minus"></i>
                    </div>
                    <div className="productdetail-last-order-volum-body-value">
                      <span>{volumeProduc}</span>
                    </div>
                    <div
                      onClick={handleClickIncVolumeProduct}
                      className="productdetail-last-order-volum-body-inc"
                    >
                      <i className="fas fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDetailTow-content-order-add-toCart">
                <div className="productDetailTow-content-order-btn-addcart">
                  <span>Đặt vào giỏ</span>
                </div>
              </div>
            </div>
            <div className="productDetailTow-content-footer">
              <div className="productDetailTow-content-footer-first">
                <div className="productDetailTow-content-footer-first-title">
                  <span>TƯ VẤN ĐẶT HÀNG</span>
                </div>
                <div className="productDetailTow-content-footer-first-item">
                  <div className="productDetailTow-content-footer-first-item-icon">
                    <i className="fab fa-rocketchat"></i>
                  </div>
                  <div className="productDetailTow-content-footer-first-item-text">
                    <span className="productDetailTow-content-footer-first-item-text-phone">
                      1900 0098
                    </span>
                    <span>(8h-21h từ T2-Chủ Nhật)</span>
                  </div>
                </div>
              </div>
              <div className="productDetailTow-content-footer-last">
                <div className="productDetail-content-footer-last-item">
                  <div className="productDetail-content-footer-last-item-icon">
                    <img
                      src="https://theme.hstatic.net/1000030244/1000943806/14/icon_1.png?v=3152"
                      alt="icon"
                    />
                  </div>
                  <div className="productDetail-content-footer-last-item-des">
                    <span className="productDetail-content-footer-last-item-des-primari">
                      THƯƠNG HIỆU HÀNG ĐẦU
                    </span>
                    <span>Bán Lẻ Hải Sản</span>
                  </div>
                </div>
                <div className="productDetail-content-footer-last-item">
                  <div className="productDetail-content-footer-last-item-icon">
                    <img
                      src="https://theme.hstatic.net/1000030244/1000943806/14/icon_2.png?v=3152"
                      alt="icon"
                    />
                  </div>
                  <div className="productDetail-content-footer-last-item-des">
                    <span className="productDetail-content-footer-last-item-des-primari">
                      ĐỔI TRẢ MIỄN PHÍ TẠI NHÀ
                    </span>
                    <span>Nhanh & Miễn Phí</span>
                  </div>
                </div>
                <div className="productDetail-content-footer-last-item">
                  <div className="productDetail-content-footer-last-item-icon">
                    <img
                      src="https://theme.hstatic.net/1000030244/1000943806/14/icon_3.png?v=3152"
                      alt="icon"
                    />
                  </div>
                  <div className="productDetail-content-footer-last-item-des">
                    <span className="productDetail-content-footer-last-item-des-primari">
                      HƠN 300 SẢN PHẨM TỪ HẢI SẢN
                    </span>
                    <span>Phong Phú, An Toàn, Chất Lượng</span>
                  </div>
                </div>
                <div className="productDetail-content-footer-last-item">
                  <div className="productDetail-content-footer-last-item-icon">
                    <img
                      src="https://theme.hstatic.net/1000030244/1000943806/14/icon_4.png?v=3152"
                      alt="icon"
                    />
                  </div>
                  <div className="productDetail-content-footer-last-item-des">
                    <span className="productDetail-content-footer-last-item-des-primari">
                      GIAO HÀNG TẬN NHÀ 2H
                    </span>
                    <span>Hóa đơn từ 150,000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetailTow-des relative">
            <div className="productDetailTow-des-title">
              <span>Mô tả sản phẩm</span>
            </div>
            <div className="productDetailTow-des-content mt-10">
              <h2 className="mt-10">Tôm càng sống</h2>
              <div className="productDetailTow-des-content-video">
                <iframe
                  width="100%"
                  height="96%"
                  src="https://www.youtube.com/embed/XXglhQrxZLM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="mt-10"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailTow;
