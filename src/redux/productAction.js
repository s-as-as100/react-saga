import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

export const productList = () => {
  console.log("action called");
  let data = "product lits";
  return {
    type: PRODUCT_LIST,
    data,
  };
};

export const searchProduct = (query) =>  {
  
  return{
    type:SEARCH_PRODUCT,
    query
  }
}
