import { fofmat } from "../../utils/formatVND";
import { createSelector } from "@reduxjs/toolkit";

export const selectProductCart = (state) => {
  const dataProductCart = state.cart.products.map((productItem) => {
    const { product, quantity } = productItem;

    return {
      ...product,
      quantity,
      sumPrice: fofmat(Number(product.price) * Number(quantity)),
    };
  });
  return dataProductCart;
};

export const sumPriceProductCartSelector = createSelector(
  selectProductCart,
  (listProductCart) => {
    let sumPrice = 0;
    Object.values(listProductCart).forEach((product) => {
      sumPrice = sumPrice + Number(product.price) * Number(product.quantity);
    });

    return fofmat(sumPrice);
  }
);
