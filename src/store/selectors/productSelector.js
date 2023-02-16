import { createSelector } from "@reduxjs/toolkit";

export const selectProduct = (state) => state.product;
export const selectProductItem = (state) => state.product.product;

export const productSelector = createSelector(selectProduct, (product) => {
  let productCategorys = [];

  product.products.map((product) => {
    if (!productCategorys.includes(product.category)) {
      productCategorys.push(product.category);
    }
    return null;
  });

  let datarender = {};

  productCategorys.map((category) => {
    if (category) {
      datarender[category] = product.products.filter((product) => {
        return product.category === category;
      });
    }

    return null;
  });

  return datarender;
});
