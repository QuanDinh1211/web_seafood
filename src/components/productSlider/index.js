import React from "react";
import Slider from "react-slick";

import "../../assets/styles/productSliderStyle.scss";

import ProductItem from "../category/productItem";

const ProductSlider = () => {
  const producSliderData = [
    {
      id: 0,
      category: "Topic",
      name: "Khô cá lóc Apt",
      img: "khocaloc.jpg",
      list_img: [],
      price: "125000",
      weight: "300/gói",
      unit: "gói",
      minimum_volume: "1",
      maxmum_volume: "5",
      variability: "1",
      casback: "1295",
      origin: "Việt Nam",
      description: [],
    },
    {
      id: 1,
      category: "Topic",
      name: "Tôm Khô Apt Loại 2",
      img: "tomkho.jpg",
      list_img: [],
      price: "76000",
      weight: "120g/gói",
      unit: "gói",
      minimum_volume: "1",
      maxmum_volume: "5",
      variability: "1",
      casback: "1295",
      origin: "Việt Nam",
      description: [],
    },
    {
      id: 2,
      category: "Topic",
      name: "Tôm Thẻ",
      img: "tomthe.jpg",
      list_img: [],
      price: "129500",
      weight: "500g",
      unit: "kg",
      minimum_volume: "0.5",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 3,
      category: "Topic",
      name: "Cá Bớp Cắt Khúc",
      img: "cakhuc.jpg",
      list_img: ["cakhuc.jpg", "cakhuc1.jpg"],
      price: "195000",
      weight: "500g",
      unit: "kg",
      minimum_volume: "0.5",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 4,
      category: "Topic",
      name: "Cá Basa Cắt Khúc",
      img: "item.jpg",
      list_img: ["item2.jpg", "item.jpg"],
      price: "81000",
      weight: "1kg",
      unit: "kg",
      minimum_volume: "1",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 5,
      category: "Topic",
      name: "Cá Rô Làm Sạch VietGAP",
      img: "caro.jpg",
      list_img: [],
      price: "44500",
      weight: "500g",
      unit: "kg",
      minimum_volume: "0.5",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 6,
      category: "Mega Market",
      name: "Fillet Cá Hồi Làm Sạch",
      img: "cahoi.jpg",
      list_img: ["cahoi.jpg", "cahoi1.jpg"],
      price: "410000",
      weight: "500g",
      unit: "kg",
      minimum_volume: "0.5",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 7,
      category: "Mega Market",
      name: "Cá Diêu Hồng",
      img: "dieuhong.jpg",
      list_img: [],
      price: "85000",
      weight: "1kg",
      unit: "kg",
      minimum_volume: "0.8",
      maxmum_volume: "3",
      variability: "0.25",
      casback: "1295",
      origin: "Việt Nam",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
    {
      id: 8,
      category: "Mega Market",
      name: "Lườn Cá Hồi",
      img: "cahoiluon.jpg",
      list_img: [],
      price: "105000",
      weight: "500g/gói",
      unit: "gói",
      minimum_volume: "1",
      maxmum_volume: "5",
      variability: "1",
      casback: "1295",
      origin: "USA",
      description: [
        "Sản phẩm thực tế có thể hơi khác so với hình ảnh hiển thị.",
        "Khi mua hàng sau 17 - 18h, thực phẩm sẽ kém tươi ngon.",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="product-slider-container">
      <div className="product-slider-wrapper">
        <Slider {...settings}>
          {producSliderData.map((product) => {
            return (
              <ProductItem isSlide={true} key={product.id} data={product} />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
