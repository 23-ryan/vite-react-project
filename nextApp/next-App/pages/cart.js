import React, {useState, useEffect} from 'react'
import styles from '../styles/Cart.module.css'

function Cart({list, totalCost}){
    console.log(list)
    return (
        <div id='card'>
            <h1 className={styles.heading}>Your Cart Section</h1>
            {list.map(function(elem){
                console.log(elem)
                return (
                <div className={styles['cart-item']}>
                    {elem.props.children[0]}: {elem.props.children[1].props.children} <span className={styles['span']}>{elem.props.children[2]}</span>
                </div>
                        );
            })}
            <div className={styles['cart-total']}>Total Cost : {totalCost}</div>
        </div>
    );
}

export default Cart