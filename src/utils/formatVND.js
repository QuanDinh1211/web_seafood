const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

export const fofmat = (price) => {
  return VND.format(price);
};
