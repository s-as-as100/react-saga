 import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
 import { productList } from "./../redux/productAction";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

function Main() {
 
    const dispatch = useDispatch();
    const productListItems = useSelector(
        (state) => state.productReducer.products
    );
 
    useEffect(() => {
        dispatch(productList());
    }, [dispatch]);

 
    return (
        <div className="Main">
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

export default Main;
