import React from 'react';
import './DisplayProduct.css';

// const dispatch = useDispatch();

function CartDisplayProduct ({productId, quantity}) {
    return(
        <div className="card" >
            {/* <img src={image} className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <>
                <h5 className="card-title">{productId}</h5>
                <p className="card-text">{quantity}</p>
                </>
            </div>
        </div>
    )
}

export default CartDisplayProduct;
{/* <li key={productId}>
Product ID: {productId}, Quantity: {quantity}
</li> */}