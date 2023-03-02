import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../assets/styles/headerStyle.scss";
import CategoryHeader from "./CategoryHeader";

import { RootContext } from "../../app/hooks/rootContext";
import { selectShop } from "../../store/selectors/homeSelector";
import { imgurl } from "../../store/consts/rootConst";
import { selectProductCart } from "../../store/selectors/cartSelector";

const Header = () => {
  const shop = useSelector(selectShop);
  const dataProduct = useSelector(selectProductCart);

  const { handleOpenNavigateTablet } = useContext(RootContext);

  const handleOnclickMenu = () => {
    handleOpenNavigateTablet();
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-content-box">
          <div className="header-content-box-menu" onClick={handleOnclickMenu}>
            <div className="header-content-box-menu-icon">
              <i className="fas fa-bars"></i>
            </div>
            <div className="header-content-box-menu-text">
              <span>Menu</span>
            </div>
          </div>
          <div className="header-content-box-logo">
            {shop && (
              <Link to="/">
                <img src={shop && `${imgurl}/${shop.path}`} alt="logo" />
              </Link>
            )}
          </div>
          <div className="header-content-box-search">
            <div className="header-content-box-search-input">
              <input type="text" placeholder="Nhập để tìm kiếm sản phẩm" />
            </div>
            <div className="header-content-box-search-icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
          {false && (
            <div className="header-content-box-user">
              <div className="header-content-box-user-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="header-content-box-user-name">
                <span className="header-content-box-user-text-name">
                  Đăng nhập
                </span>
                <span>Tài khoản</span>
              </div>
              <div className="header-content-box-user-hover">
                <a href="login" className="header-content-box-user-hover-item">
                  <span>Đăng nhập</span>
                </a>
                <a
                  href="register"
                  className="header-content-box-user-hover-item"
                >
                  <span>Đăng ký</span>
                </a>
              </div>
            </div>
          )}
          <Link to="cart" className="header-content-box-cart">
            <i className="fas fa-shopping-cart "></i>
            <span>{dataProduct.length}</span>
          </Link>
        </div>
      </div>
      <CategoryHeader />
    </div>
  );
};

export default Header;
