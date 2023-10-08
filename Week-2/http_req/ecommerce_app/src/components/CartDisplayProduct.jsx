import React from 'react';
import './CartDisplayProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpecificProduct } from '../productSlice';
import { changeQuantity, getQuantity } from '../cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function CartDisplayProduct ({productId}) {
    const data = useSelector((state) => selectSpecificProduct(state, productId));
    const quantity = useSelector((state) => getQuantity(state, productId));
    const dispatch = useDispatch();
    // console.log(data, `SingleProduct -> ${productId} selectSpecificProduct -> `, typeof(data))

    const handleQuantityChange = (val) => {
        let quantityChange = -1;
        if (val===true){
            quantityChange = 1;
        }
        dispatch(changeQuantity({ productId, quantityChange }));
    }   

    return(
        <div className='cart-item'>
            <img className='cart-img' src={data['image']} alt="Product" />
            <div className="cart-item-details">
                <h5 className="card-title">{data['title']}</h5>
                <p className="card-text">{quantity}</p>
                <button onClick={()=>{handleQuantityChange(true)}}>
                    <AddIcon/>
                </button>
                <button onClick={()=>{handleQuantityChange(false)}}>
                    <RemoveIcon />
                </button>
            </div>
        </div>
    )
}

export default CartDisplayProduct;
{/* <li key={productId}>
Product ID: {productId}, Quantity: {quantity}
</li> */}