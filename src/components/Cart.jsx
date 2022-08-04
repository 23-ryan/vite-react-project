import React, {useState, useEffect} from 'react'
import './Cart.css'

function Cart({list, total}){

    return (
        <div id='card'>
            <h1>Your Cart Section</h1>
            {list}
            <div className="cart-total">Total Cost : {total}</div>
        </div>
    );
}

export default Cart