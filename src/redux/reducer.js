import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

const cartReducer = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log("add reducer");
    return action.data;
  } else if (action.type === REMOVE_TO_CART) {
    console.log("remove reducer");
    return action.data;
  } else {
    return "No data match";
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
