import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
   const totalItemdata= useSelector((state) => state.cartReducer.numberOfCarts);
 
   return (
    <div className="header">
      <div className="subHeader">
        <h5>{totalItemdata}</h5>
      </div>

    </div>
  );
};

export default Header;
