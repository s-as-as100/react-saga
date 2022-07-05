import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/productAction";

const Header = () => {
  const dispatch = useDispatch();

  const totalItemdata = useSelector((state) => state.cartReducer.numberOfCarts);

  return (
    <div className="header">
      <div className="subHeader">
        <Link to={'/'}>
          <h1>E-Commerce</h1>
        </Link>
        <div className="search-box">
          <input type='Search  product' onChange={(event) => dispatch(searchProduct(event.target.value))}    />
        </div>
        <Link to={'/cart'}>
          <h5>{totalItemdata}</h5>
        </Link>
      </div>

    </div>
  );
};

export default Header;
