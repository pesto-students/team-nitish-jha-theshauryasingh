import { useState, useEffect } from "react";
import './Display.css';
import CartDisplayProduct from "./CartDisplayProduct";
// import { getAllCartProducts } from '../api/cartApi';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';
import { selectProductPrice } from '../redux/slices/productSlice'


function CartDisplay () {
    const cartProd = useSelector(selectCart);
    const prices = useSelector(selectProductPrice);
    console.log(cartProd);
    let totalPrice = 0;
    Object.keys(cartProd).forEach((key) => {
        totalPrice += prices[key] * cartProd[key];
    });
    return (
            <main>
            {Object.keys(cartProd).map(function(key){
                return (
                    <section className="cartDisplayArea">
                        <div className="cartProductList">
                            <CartDisplayProduct key={key} productId={key} />
                        </div>
                    </section>
                    )
                })}
                <div className="bill">
                    total price = { totalPrice } ₹
                </div>
            </main>
    )
}

export default CartDisplay;

