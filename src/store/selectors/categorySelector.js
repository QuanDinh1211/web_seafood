import { formatLink } from "../../utils/formatName";

export const selectCategory = (state) => state.category;
export const selectCategoryProduct = (state) => {
  const listProductCategory = Object.values(state.category.products).map(
    (product) => {
      return {
        ...product,
        link: `${formatLink(product.categoryName)}/${product.id}`,
      };
    }
  );

  return listProductCategory;
};
