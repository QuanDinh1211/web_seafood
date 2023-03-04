import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../assets/styles/LlistCategoryNavigate.scss";

import { categorySelector } from "../../store/selectors/homeSelector";
import { imgurldefault } from "../../store/consts/rootConst";

const ListCategoryNavigate = () => {
  const listCategory = useSelector(categorySelector);

  return (
    <div className="list-category-navigate-container">
      <div className="list-category-navigate-wrapper">
        {listCategory.map((category, index) => {
          return (
            <Link
              to={`/category/${category.slug}/${category.id}`}
              key={index}
              className="list-category-navigate-item"
            >
              <div className="list-category-navigate-icon">
                <div className="list-category-navigate-icon-img">
                  <img src={`${imgurldefault}/${category.path}`} alt="icon" />
                </div>
              </div>
              <div className="list-category-navigate-text">
                <span>{category.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListCategoryNavigate;
