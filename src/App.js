import "./App.css";
import {
  addToCart,
  emptyCart,
  removeToCart,
  updateProductCount,
} from "./redux/action";
import { useDispatch } from "react-redux";
import Header from "./Component/Header";
import { productList } from "./redux/productAction";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function App() {
  const [stateArray, setStateArray] = useState([]);

  const dispatch = useDispatch();
  const productListItems = useSelector(
    (state) => state.productReducer.products
  );
  console.log({ productListItems });

  useEffect(() => {
    dispatch(productList());
  }, []);

  const addTocardData = (item) => {
    setStateArray([...stateArray, item]);
    let check = stateArray.filter((data) => data.id === item.id).length > 0;
    // if (!check) {
    // } else {
    // }
  };

  return (  
    <div className="App">
      <Header />
    <button onClick={() => dispatch(emptyCart())}>empty cart</button>
       <div className="detailsContainer">
        {productListItems.map((item, index) => {
          return (
            <div className="subContainer" key={index}>
              <img
                src={item.photo}
                alt="product"
                style={{
                  width: "10rem",
                  height: "10rem",
                }}
              />
              <div>Name : {item.name} </div>
              <div>Color : {item.color} </div>
              <div>Brand : {item.brand} </div>
              <div>Price: {item.price}</div>
              <div>Category : {item.category} </div>
              <button onClick={() => dispatch(updateProductCount(item))}>
                Add to Cart test
              </button>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(index))}>
                remove to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
