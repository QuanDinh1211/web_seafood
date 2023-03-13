import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../assets/styles/navigateModalStyle.scss";

import ModalContainer from "./ModalContainer";
import ListCategoryNavigate from "../layouts/ListCategoryNavigate";
import Lang from "../../components/lang";

import { RootContext } from "../../app/hooks/rootContext";
import { selectShop } from "../../store/selectors/homeSelector";
import { imgurl } from "../../store/consts/rootConst";

const NavigateModal = () => {
  const navigate = useNavigate();

  const shop = useSelector(selectShop);

  const { handleCloseNavigateTablet, showNavigateTablet } =
    useContext(RootContext);

  const handleClostModal = () => {
    handleCloseNavigateTablet();
  };

  const handleOnclickBackHome = () => {
    navigate("/");
  };

  const handleOnclickContactShop = () => {
    navigate("/introduction");
  };

  return (
    <ModalContainer onClickCloseModal={handleClostModal}>
      <div
        className={
          showNavigateTablet
            ? "navigate-modal-container"
            : "navigate-modal-container close-navigation"
        }
      >
        <div className="navigate-modal-wrapper">
          {false && (
            <div className="navigate-modal-user logo">
              {shop && (
                <img src={shop && `${imgurl}/${shop.path}`} alt="logo" />
              )}
            </div>
          )}
          {false && (
            <div className="navigate-modal-user">
              <div className="navigate-modal-user-icon">
                <div className="navigate-modal-user-icon-item">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="navigate-modal-user-name">
                <span className="navigate-modal-user-text-name">Đăng nhập</span>
                <span>/</span>
                <span>Tài khoản</span>
              </div>
            </div>
          )}
          <div className="navigate-modal-hotline">
            <div className="navigate-modal-hotline-icon">
              <div className="navigate-modal-hotline-icon-item">
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="navigate-modal-hotline-name">
              <span className="navigate-modal-hotline-text-phone">
                1900 0098
              </span>
              <span>{`(8h-21h từ T2-Chủ Nhật)`}</span>
            </div>
          </div>
          <div className="navigate-modal-navidater">
            <div
              className="navigate-moda-backHome"
              onClick={handleOnclickBackHome}
            >
              <div className="navigate-moda-backHome-icon">
                <div className="navigate-moda-backHome-icon-item">
                  <i className="fas fa-home"></i>
                </div>
              </div>
              <div className="navigate-moda-backHome-name">
                <span className="navigate-moda-backHome-text">Trang chủ</span>
              </div>
            </div>
            <ListCategoryNavigate />
            <div
              className="navigate-moda-backHome contact-shop"
              onClick={handleOnclickContactShop}
            >
              <div className="navigate-moda-backHome-icon">
                <div className="navigate-moda-backHome-icon-item">
                  <i className="fas fa-phone"></i>
                </div>
              </div>
              <div className="navigate-moda-backHome-name">
                <span className="navigate-moda-backHome-text">
                  Liên hệ cửa hàng
                </span>
              </div>
            </div>
            <div className="navigate-moda-backHome lang">
              <Lang />
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default NavigateModal;
