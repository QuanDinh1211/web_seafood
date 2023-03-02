import React, { useEffect } from "react";

import "../../assets/styles/introductionStyle.scss";

const Introduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="introduction-content">
          <h2>Liên hệ</h2>
          <div className="introduction-content-logo">
            <img src={require("../../assets/imgs/logoGapfood.jpg")} alt="" />
          </div>
          <div className="introduction-des">
            <p>
              GAPFOOD là thương hiệu sản xuất, phân phối và xuất khẩu các dòng
              thực phẩm gia vị: nước mắm, dầu ăn, thực phẩm,... đạt chất lượng
              vì sức khoẻ cho người tiêu dùng Việt. Các quy trình sản xuất của
              mỗi dòng sản phẩm luôn được đội ngũ Kiểm Tra Chất Lượng (QC)-
              GapFood kiểm tra nghiêm ngặt theo quy chuẩn ISO, HACCP, và vệ sinh
              an toàn thực phẩm.
            </p>
          </div>
          <div className="introduction-content-contact">
            <div className="introduction-content-contact-title">
              <span>Tìm kiếm thêm thông tin về chúng tôi tại: </span>
            </div>
            <div className="introduction-content-contact-item">
              <span className="introduction-content-contact-item-title">
                Website:
              </span>
              <a href="http://gapfood.com.vn">Gapfood.com.vn</a>
            </div>
            <div className="introduction-content-contact-item">
              <span className="introduction-content-contact-item-title">
                Địa chỉ văn phòng:
              </span>
              <span> Quận Tân Bình, TP. Hồ Chí Minh</span>
            </div>
            <div className="introduction-content-contact-item">
              <span className="introduction-content-contact-item-title">
                Hotline:
              </span>
              <span>05454-example-323</span>
            </div>
          </div>
        </div>
        <div className="introduction-img">
          <img src={require("../../assets/imgs/gt.jpg")} alt="gt" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
