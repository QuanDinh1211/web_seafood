import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/headerStyle.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content-login">
        {true && (
          <div className="header-login-register">
            <div className="header-register">
              <a href="register">Tạo Tài Khoản</a>
            </div>
            <div className="header-content-login-dot">
              <span>.</span>
            </div>
            <div className="header-login">
              <a href="login">Đăng Nhập</a>
            </div>
          </div>
        )}
        {false && (
          <div className="header-profile">
            <div className="header-profile-name">
              <span>Hi My Dev</span>
            </div>
            <div className="header-profile-dot">
              <span>.</span>
            </div>
            <div className="header-profile-logout">
              <i className="fas fa-sign-out"></i>
            </div>
          </div>
        )}
      </div>
      <div className="header-content-box">
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
        <div className="header-content-box-cart">
          <i className="fas fa-shopping-cart "></i>
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
