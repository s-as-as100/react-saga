import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log({ data });
  console.log("action called");
  
  return {
    type: ADD_TO_CART,
    data 
  };
};


export const removeToCart = (data) => {
  
  console.log("Remove action")
  return {
    type:REMOVE_TO_CART,
    data
  }
}

export const emptyCart = (data) => {
  
  console.log("emptyCart action")
  return {
    type:EMPTY_CART,
    data
  }
}
// what is actions ?
// action is plain function
// get data from react js
// send data to reducer after process
// must have type key in return statement
// much sync types with reducers


// you have to write business logic