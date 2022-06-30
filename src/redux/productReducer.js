import { PRODUCT_LIST } from "./constant";

const productReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return [action.data];

    default:
      return data;
  }
};

export default productReducer;
