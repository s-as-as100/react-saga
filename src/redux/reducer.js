import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

const cartReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_TO_CART:
      data.length = data.length ?data.length - 1 :[];
      return [...data];
    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};

export default cartReducer;

// Reducer handle data for store
// update Data in source
// Rules
//1. Need root Reducer
//2. Reducer must return some value
//3. The reducer must have initial value

// why need switch statement inside reducer
// make switch statement
// check some with switch statement
