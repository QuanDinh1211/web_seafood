import React from "react";

import "../../assets/styles/categoryHeaderStyle.scss";

import ListCategoryNavigate from "./ListCategoryNavigate";

const CategoryHeader = () => {
  return (
    <div className="category-header-container">
      <div className="category-header-wrapper">
        <div className="category-header-main">
          <div className="category-header-main-item">
            <div className="category-header-main-item-icon">
              <i className="fas fa-bars"></i>
            </div>
            <div className="category-header-main-item-name">
              <span>DANH MỤC</span>
            </div>
          </div>
          <div className="category-header-main-content">
            <ListCategoryNavigate />
          </div>
        </div>
        <div className="category-header-list-dependent">
          <div className="category-header-dependent-item">
            <div className="category-header-dependent-item-logo">
              <div className="category-header-dependent-item-logo-img">
                <img src={require("../../assets/imgs/freeship.png")} alt="" />
              </div>
            </div>
            <div className="category-header-dependent-item-text">
              <span>GIAO HÀNG TỪ 150.000Đ</span>
            </div>
          </div>
          <div className="category-header-dependent-item">
            <div className="category-header-dependent-item-logo">
              <div className="category-header-dependent-item-logo-img">
                <img src={require("../../assets/imgs/freeship.png")} alt="" />
              </div>
            </div>
            <div className="category-header-dependent-item-text">
              <span>GIAO HÀNG TỪ 150.000Đ</span>
            </div>
          </div>
          <div className="category-header-dependent-item">
            <div className="category-header-dependent-item-logo">
              <div className="category-header-dependent-item-logo-img">
                <img src={require("../../assets/imgs/freeship.png")} alt="" />
              </div>
            </div>
            <div className="category-header-dependent-item-text">
              <span>GIAO HÀNG TỪ 150.000Đ</span>
            </div>
          </div>
          <div className="category-header-dependent-item">
            <div className="category-header-dependent-item-logo">
              <div className="category-header-dependent-item-logo-img">
                <img src={require("../../assets/imgs/freeship.png")} alt="" />
              </div>
            </div>
            <div className="category-header-dependent-item-text">
              <span>GIAO HÀNG TỪ 150.000Đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
