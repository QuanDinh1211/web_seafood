import React, { useContext } from "react";

import "../../assets/styles/navigateModalStyle.scss";

import ModalContainer from "./ModalContainer";
import ListCategoryNavigate from "../layouts/ListCategoryNavigate";

import { RootContext } from "../../app/hooks/rootContext";

const NavigateModal = () => {
  const { handleCloseNavigateTablet, showNavigateTablet } =
    useContext(RootContext);

  const handleClostModal = () => {
    handleCloseNavigateTablet();
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
          <div className="navigate-modal-hotline">
            <div className="navigate-modal-hotline-icon">
              <div className="navigate-modal-hotline-icon-item">
                <i className="fab fa-rocketchat"></i>
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
            <ListCategoryNavigate />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default NavigateModal;
