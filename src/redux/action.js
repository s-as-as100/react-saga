import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART, UPDATE_PRODUCT_COUNT } from "./constant";

export const addToCart = (data) => {
   console.log("action called",data);
   return {
    type: ADD_TO_CART,
    data 
  };
};

export const updateProductCount = (data) => {
  console.log("action called update coubnt",data);
  return {
   type: UPDATE_PRODUCT_COUNT,
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