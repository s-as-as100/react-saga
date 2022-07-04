import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
const Header = () => {
  const totalItemdata = useSelector((state) => state.cartReducer.numberOfCarts);

  return (
    <div className="header">
      <div className="subHeader">
        <Link to={'/'}>
          <h1>E-Commerce</h1>
        </Link>
        <Link to={'/cart'}>
          <h5>{totalItemdata}</h5>
        </Link>
      </div>

    </div>
  );
};

export default Header;
