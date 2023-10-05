import React from 'react';
import './DisplayProduct.css';

// const dispatch = useDispatch();

function CartDisplayProduct ({product, quantity}) {
    console.log(`cart display product ${product}, ${quantity}`)
    return(
        <>
            <h1>
            {product} - {quantity}
            </h1>
            <br/>
        </>
    )
}

export default CartDisplayProduct;