export const addToCart = (data) => {
  console.log({ data });
  console.log("action called");
  
  return {
    type: "ADD_TO_CART",
    data: "passing data",
  };
};

// what is actions ?
// action is plain function
// get data from react js
// send data to reducer after process
// must have type key in return statement
// much sync types with reducers


// you have to write business logic