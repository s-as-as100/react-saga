import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.log("action called");
  let data = "product lits";
  return {
    type: PRODUCT_LIST,
    data,
  };
};
