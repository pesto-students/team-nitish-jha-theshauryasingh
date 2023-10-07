import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayProduct.css';
import { addToCart } from '../api/cartApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCartId, selectCartId } from '../cartSlice';
import { selectUserId } from '../userSlice';

// const dispatch = useDispatch();

function DisplayProduct ({productId, title, price, description, image}) {
    const [displayOneProduct, setDisplayOneProduct] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    let cartId = useSelector(selectCartId);
    if (cartId===null){
        dispatch(setCartId(1));
        
    }
    cartId = useSelector(selectCartId);

    const onClickTitle = () => {
        navigate(`/product/${productId}`);
    }

    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity}, ${userId}, ${cartId}`)
        addToCart(productId,quantity, userId, cartId)
            .then((data)=> { console.log(data); })
            .catch((error)=> {console.log('Error ', error)});
          
    }
    
    return(
        <div className="card" >
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" onClick={onClickTitle}>{title} - <i>{price}</i></h5>
                {/* <p className="card-text">{description}</p> */}
                {/* { displayOneProduct && (<DisplayOneProduct/>)} */}
                <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button>
            </div>
        </div>
    )
}

export default DisplayProduct;