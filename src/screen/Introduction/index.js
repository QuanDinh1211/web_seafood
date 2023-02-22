import React from "react";

import "../../assets/styles/introductionStyle.scss";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="introduction-img">
          <img src={require("../../assets/imgs/gt.jpg")} alt="gt" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
