import { createSelector } from "@reduxjs/toolkit";

import { formatLink } from "../../utils/formatName";

export const selectHome = (state) => state.home;
export const selectShop = (state) => state.home.shop;
export const selectCategory = (state) => state.home.listCategory;
export const selectTopic = (state) => state.home.topic;
export const selectListProductsCategory = (state) =>
  state.home.listProductsCategory;

export const categorySelector = createSelector(
  selectCategory,
  (listCategory) => {
    const listCategoryRender = Object.values(listCategory).map((category) => {
      return { ...category, slug: formatLink(category.slug) };
    });

    return listCategoryRender;
  }
);

export const topicSelector = createSelector(selectTopic, (topic) => {
  const dataTopicRender = Object.values(topic).map((product) => {
    return {
      ...product,
      link: `${formatLink(product.categoryName)}/${product.id}`,
    };
  });

  return dataTopicRender;
});

export const listProductsSelector = createSelector(
  selectListProductsCategory,
  (listProductsCategory) => {
    const dataProductsCategory = listProductsCategory.map(
      (category_product) => {
        const { category, products } = category_product;

        if (products && products.length > 0) {
          return {
            category: {
              ...category,
              name: category.name,
              link: formatLink(category.name),
            },
            products: products.map((product) => {
              return {
                ...product,
                link: `${formatLink(product.categoryName)}/${product.id}`,
              };
            }),
          };
        }

        return null;
      }
    );

    return dataProductsCategory;
  }
);
