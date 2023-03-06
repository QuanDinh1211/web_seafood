import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../assets/styles/navigateCategoryMobileStyle.scss";
import { categorySelector } from "../../store/selectors/homeSelector";
import { imgurldefault } from "../../store/consts/rootConst";

const NavigateCategoryMobile = () => {
  const listCategory = useSelector(categorySelector);

  return (
    <div className="naviagteMobile-container">
      <div className="naviagteMobile-wrapper">
        {listCategory.map((category, index) => {
          return (
            <Link
              to={`/category/${category.slug}/${category.id}`}
              key={index}
              className="naviagteMobile-item"
            >
              <div className="naviagteMobile-item-first">
                <div className="naviagteMobile-item-first-img">
                  <img src={`${imgurldefault}/${category.path}`} alt="icon" />
                </div>
              </div>
              <div className="naviagteMobile-item-last">
                <span>{category.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateCategoryMobile;
