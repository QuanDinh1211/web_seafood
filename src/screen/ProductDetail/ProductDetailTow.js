import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/styles/productDetailTowStyle.scss";

import { getProduct } from "../../store/thunkAction/productThunkAction";
import { selectProduct } from "../../store/selectors/productSelector";
import { imgurldefault } from "../../store/consts/rootConst";
import { RootContext } from "../../app/hooks/rootContext";
import { selectProductCart } from "../../store/selectors/cartSelector";

const ProductDetailTow = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();

  const { handleAddToCart, handleDeleteCart } = useContext(RootContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) {
      dispatch(getProduct(productid));
    }
  }, []);

  const product = useSelector(selectProduct);
  const dataProductCart = useSelector(selectProductCart);

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

  const handlickAddCartBtn = () => {
    handleAddToCart(dispatch, { product: product, quantity: volumeProduc });
  };

  const handleOnClickDeleteOutCart = () => {
    handleDeleteCart(dispatch, product.id);
  };

  const checkAddToCart = dataProductCart.some((productCart) => {
    return productCart.id === product.id;
  });

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
                    M?? SP:
                  </span>
                  <span>{product.id}</span>
                </div>
              </div>
              <div className="productDetailTow-content-option-des">
                <div className="productDetailTow-content-option-des-list-item">
                  <div className="productDetailTow-content-option-des-item">
                    <div className="productDetailTow-content-option-des-item-title">
                      <span>Lo???i s???n ph???m:</span>
                    </div>
                    <div className="productDetailTow-content-option-des-item-text">
                      <span>{product.categoryName}</span>
                    </div>
                  </div>
                  <div className="productDetailTow-content-option-des-item">
                    <div className="productDetailTow-content-option-des-item-title">
                      <span>C??n l???i:</span>
                    </div>
                    <div className="productDetailTow-content-option-des-item-text">
                      <span>{product.stock} s???n ph???m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDetailTow-content-order-value">
                <div className="productDetailTow-content-order-price">
                  <div className="productDetailTow-content-order-list-price">
                    <div className="productDetailTow-content-order-price-active">
                      <span>{product.priceShow}</span>
                    </div>
                    <div className="productDetailTow-content-order-price-root">
                      <span>{product.priceShow}</span>
                    </div>
                    <div className="productDetailTow-content-order-price-sale">
                      <span>0%</span>
                    </div>
                  </div>
                </div>
                <div className="productDetailTow-content-order-unit">
                  {false && <span>Quy C??ch: Khay 500g</span>}
                </div>
                <div className="productDetailTow-content-order-action">
                  <div className="productDetailTow-content-order-action-title">
                    <span>S??? l?????ng:</span>
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
                {checkAddToCart ? (
                  <div
                    className="productDetailTow-content-order-btn-addcart delete-out-cart"
                    onClick={handleOnClickDeleteOutCart}
                  >
                    <span>L???y kh???i gi???</span>
                  </div>
                ) : (
                  <div
                    className="productDetailTow-content-order-btn-addcart"
                    onClick={handlickAddCartBtn}
                  >
                    <span>?????t v??o gi???</span>
                  </div>
                )}
              </div>
            </div>
            <div className="productDetailTow-content-footer">
              <div className="productDetailTow-content-footer-first">
                <div className="productDetailTow-content-footer-first-title">
                  <span>T?? V???N ?????T H??NG</span>
                </div>
                <div className="productDetailTow-content-footer-first-item">
                  <div className="productDetailTow-content-footer-first-item-icon">
                    <i className="fab fa-rocketchat"></i>
                  </div>
                  <div className="productDetailTow-content-footer-first-item-text">
                    <span className="productDetailTow-content-footer-first-item-text-phone">
                      1900 0098
                    </span>
                    <span>(8h-21h t??? T2-Ch??? Nh???t)</span>
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
                      TH????NG HI???U H??NG ?????U
                    </span>
                    <span>B??n L??? H???i S???n</span>
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
                      ?????I TR??? MI???N PH?? T???I NH??
                    </span>
                    <span>Nhanh & Mi???n Ph??</span>
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
                      H??N 300 S???N PH???M T??? H???I S???N
                    </span>
                    <span>Phong Ph??, An To??n, Ch???t L?????ng</span>
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
                      GIAO H??NG T???N NH?? 2H
                    </span>
                    <span>H??a ????n t??? 150,000??</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetailTow-des relative">
            <div className="productDetailTow-des-title">
              <span>M?? t??? s???n ph???m</span>
            </div>
            <div className="productDetailTow-des-content mt-10">
              <h2 className="mt-10">{product.title}</h2>
              <div className="productDetailTow-des-item mt-10">
                <p>{product.desc}</p>
              </div>
              {false && (
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailTow;
