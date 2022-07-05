/* eslint-disable array-callback-return */
import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

const initialState = {
  numberOfCarts: 0,
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
       if (state.numberOfCarts === 0) {
        let carts = {
          id: action.data.id,
          quantity: 1,
          name: action.data.name,
          photo: action.data.photo,
          category: action.data.category,
          price: action.data.price,
          color: action.data.color,
        };
        state.carts.push(carts);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id === action.data.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let cart = {
            id: action.data.id,
            quantity: 1,
            name: action.data.name,
            photo: action.data.photo,
            category: action.data.category,
            price: action.data.price,
            color: action.data.color,
          };
          state.carts.push(cart);
        }
      }
      return {
        ...state,
        numberOfCarts: state.numberOfCarts + 1,
      };
    case REMOVE_TO_CART:
      let quantity = state.carts[action.data].quantity;
      console.log(action.data, quantity)
      if(quantity>1) {
        state.numberOfCarts--;
        state.carts[action.data].quantity--;
      }

      return {
        ...state,
      };

    case EMPTY_CART:
      state = [];
      return { ...state };
    default:
      return state;
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
