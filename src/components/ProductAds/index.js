import React from "react";

import "../../assets/styles/productAdsStyle.scss";

import ListCategoryNavigate from "../layouts/ListCategoryNavigate";
import ImageLink from "../layouts/ImageLink";
import SliderContainer from "../Slider";

const ProductAds = () => {
  return (
    <div className="productAds-container">
      <div className="productAds-wrapper">
        <div className="productAds-category">
          <ListCategoryNavigate />
        </div>
        <div className="productAds-slide-sale">
          <div className="productAds-slide">
            <div className="productAds-slide-first">
              <div className="productAds-slide-item">
                <SliderContainer />
              </div>
            </div>
            <div className="productAds-slide-last">
              <div className="productAds-slide-last-list-item-sale">
                <div className="productAds-slide-last-item-sale boder-radius">
                  <ImageLink
                    url="link"
                    img="https://theme.hstatic.net/1000030244/1000943806/14/banner_right_1.jpg?v=3002"
                  />
                </div>
                <div className="productAds-slide-last-item-sale boder-radius">
                  <ImageLink
                    url="link"
                    img="https://theme.hstatic.net/1000030244/1000943806/14/banner_right_2.jpg?v=3002"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="productAds-sale">
            <div className="productAds-sale-list-item">
              <div className="productAds-sale-item boder-radius">
                <ImageLink
                  url="link"
                  img="https://theme.hstatic.net/1000030244/1000943806/14/banner_bottom_1_1024x1024.jpg?v=3002"
                />
              </div>
              <div className="productAds-sale-item boder-radius">
                <ImageLink
                  url="link"
                  img="https://theme.hstatic.net/1000030244/1000943806/14/banner_bottom_2_1024x1024.jpg?v=3002"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAds;
