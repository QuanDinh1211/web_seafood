export const formatLink = (prevname) => {
  const newname = prevname
    .split(" ")
    .join("-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return newname;
};
