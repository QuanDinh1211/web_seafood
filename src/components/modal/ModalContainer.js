import React from "react";

const ModalContainer = ({ children, onClickCloseModal }) => {
  return (
    <div className="modal-container" onClick={onClickCloseModal}>
      {children}
    </div>
  );
};

export default ModalContainer;
