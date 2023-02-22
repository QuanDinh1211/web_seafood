import React from "react";

import { Link } from "react-router-dom";

import "../../assets/styles/footerStyle.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-first">
          <Link to="/introduction" className="footer-first-logo">
            <img src={require("../../assets/imgs/logo.jpg")} alt="logo" />
          </Link>
        </div>
        <div className="footer-last">
          <div className="footer-last-item">
            <span className="footer-last-item-title">Email:</span>
            <span className="footer-last-item-text">
              emailexample@gmail.com
            </span>
          </div>
          <div className="footer-last-item">
            <span className="footer-last-item-title">Liên hệ:</span>
            <span className="footer-last-item-text">064836789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
