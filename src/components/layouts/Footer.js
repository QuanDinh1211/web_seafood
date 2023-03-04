import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/footerStyle.scss";

import { selectShop } from "../../store/selectors/homeSelector";
import { imgurl } from "../../store/consts/rootConst";

const Footer = () => {
  const shop = useSelector(selectShop);

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-first">
          <Link to="/introduction" className="footer-first-logo">
            {shop && <img src={shop && `${imgurl}/${shop.path}`} alt="logo" />}
          </Link>
        </div>
        <div className="footer-last">
          <div className="footer-last-name-cty">
            <span>GapFood</span>
          </div>
          <div className="footer-last-item">
            <span className="footer-last-item-title">Website:</span>
            <span className="footer-last-item-text">Gapfood.com.vn</span>
          </div>
          <div className="footer-last-item">
            <span className="footer-last-item-title">Địa chỉ văn phòng:</span>
            <span className="footer-last-item-text">
              Quận Tân Bình, TP. Hồ Chí Minh
            </span>
          </div>
          <div className="footer-last-item">
            <span className="footer-last-item-title">Hotline:</span>
            <span className="footer-last-item-text">05454-example-323</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
