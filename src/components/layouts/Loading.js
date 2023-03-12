import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="loading-container"
    >
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
