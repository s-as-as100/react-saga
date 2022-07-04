import { PRODUCT_LIST_SUCCESS } from "./constant";

const initialProductList ={
     products:[]
}


const productReducer = (state= initialProductList, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products:action.data
      }
    default:
      return state;
  }
};

export default productReducer;
