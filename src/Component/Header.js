import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItemCart = useSelector((state) => state.cartReducer);
  console.log({ totalItemCart });
  return (
    <div className="header">
      <div className="subHeader">
        <h1>Header</h1>
        <h5>Total Items {totalItemCart.length}</h5>
      </div>
    </div>
  );
};

export default Header;
