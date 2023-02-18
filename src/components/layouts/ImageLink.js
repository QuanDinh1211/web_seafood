import React from "react";

import "../../assets/styles/imageLink.scss";

const ImageLink = ({ url, img }) => {
  return (
    <a className="img-link" href={url}>
      <img src={img} alt="imglink" />
    </a>
  );
};

export default ImageLink;
