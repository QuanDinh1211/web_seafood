import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/headerStyle.scss";
import CategoryHeader from "./CategoryHeader";

import { RootContext } from "../../app/hooks/rootContext";

const Header = () => {
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
            <Link to="/">
              <img src={require("../../assets/imgs/logo.jpg")} alt="" />
            </Link>
          </div>
          <div className="header-content-box-search">
            <div className="header-content-box-search-input">
              <input type="text" placeholder="Nhập để tìm kiếm sản phẩm" />
            </div>
            <div className="header-content-box-search-icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
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
              <a href="register" className="header-content-box-user-hover-item">
                <span>Đăng ký</span>
              </a>
            </div>
          </div>
          <div className="header-content-box-cart">
            <i className="fas fa-shopping-cart "></i>
            <span>0</span>
          </div>
        </div>
      </div>
      <CategoryHeader />
    </div>
  );
};

export default Header;
