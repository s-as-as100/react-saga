import React from 'react'
import { useSelector } from "react-redux";
import './Cart.css';

const Cart = () => {
    const cartData = useSelector((state) => state.cartReducer.carts);
    const amount = cartData.length&& cartData.map(item => item.price).reduce((prev,next) => prev+next)
     console.log(cartData,amount,"jilo");
    return (
        <>
            <h1>Cart</h1>
            <table  id="customers">
                {/* <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr> */}
                <tr>
                   {
                        cartData.map((item,index) => {
                            return(
                                <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                               </tr>

                            )
                        })
                    } 
                </tr>
            </table>
            <div className='totalPayment'>
                <span>
                    <h5>Amount</h5>
                    <h5>{amount}</h5>
                </span>

            </div>
        </>
    )
}

export default Cart