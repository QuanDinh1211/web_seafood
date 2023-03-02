import React from "react";

const PayMentStatus = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="payment-container"
    >
      <h1 style={{ color: "#005ca5" }}>Thanh toán thành công!</h1>
      <h3 style={{ marginTop: "20px" }}>
        Để biết thêm chi tiết liên hệ SĐT: 06545-example-21351
      </h3>
    </div>
  );
};

export default PayMentStatus;
