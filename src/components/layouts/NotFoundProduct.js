import React from "react";

const NotFoundProduct = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ color: "red" }}>Chưa có sản phẩm nào.</h2>
    </div>
  );
};

export default NotFoundProduct;
