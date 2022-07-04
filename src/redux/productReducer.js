import { PRODUCT_LIST_SUCCESS } from "./constant";

const productReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return [...action.data];
    default:
      return data;
  }
};

export default productReducer;
