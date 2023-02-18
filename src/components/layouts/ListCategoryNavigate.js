import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/LlistCategoryNavigate.scss";

export const dataNavigate = [
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-08_b334d328e22b4a65805bb434f3a1b148.png",
    text: "BÁN CHẠY NHẤT",
    path: "hotpic",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/sale-01-02_46421e90f6ef4755b5bdfa3da8f21e3b.png",
    text: "KHUYẾN MÃI",
    path: "sale",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/tuoi_song_2c1a154223c740c289c5f6c708cc20be.png",
    text: "100% Tươi Sống",
    path: "tuoi",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-11_41a56a572b374f679246984b7e0a16eb.png",
    text: "Sushi & Sashimi",
    path: "sashimi",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/dong_lanh_745fd86a7d5b469aa93903a836ac8452.png",
    text: "Hải Sản Đông Lạnh",
    path: "haisan",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-18_5e5a5dbb4e95410d9533ae2e1a83f3e4.png",
    text: "Hải Sản Nhập Khẩu",
    path: "haisannhapkhau",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-19_b930026af62b427080fa76b8f9f37c82.png",
    text: "Cá Hồi",
    path: "cahoi",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-12_7c3e9adde67340c8afc81a50cf436da3.png",
    text: "Ngao, Sò, Ốc",
    path: "ngaosooc",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-13_82965483df694fba920f852cae02d35e.png",
    text: "Cua - Ghẹ",
    path: "cuaghe",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-14_226abb4bfbcf4247b3b9dbc1af07b31f.png",
    text: "Tôm Các Loại",
    path: "tomcacloai",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-15_ddec0f58f3204735a177f0018a3e3553.png",
    text: "Cá",
    path: "ca",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/icon-16_7a27668ddf0e4aa8bb88bf2e665295d2.png",
    text: "Mực",
    path: "muc",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/to_eat_1__6cf2ddbbd16e4fc6926f64436e070eed.png",
    text: "Ready To Eat/Cook",
    path: "ready",
  },
  {
    icon: "https://file.hstatic.net/1000030244/file/sot_b9bbd364c04444539999c4ac2241e1c6.png",
    text: "Gia Vị - Sốt",
    path: "giavisot",
  },
];

const ListCategoryNavigate = () => {
  return (
    <div className="list-category-navigate-container">
      <div className="list-category-navigate-wrapper">
        {dataNavigate.map((navigate, index) => {
          return (
            <Link
              to={navigate.path}
              key={index}
              className="list-category-navigate-item"
            >
              <div className="list-category-navigate-icon">
                <div className="list-category-navigate-icon-img">
                  <img src={navigate.icon} alt="icon" />
                </div>
              </div>
              <div className="list-category-navigate-text">
                <span>{navigate.text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListCategoryNavigate;
