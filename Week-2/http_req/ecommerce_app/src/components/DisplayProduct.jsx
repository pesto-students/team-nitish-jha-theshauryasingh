import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';
import { selectUserId } from '../userSlice';

// const dispatch = useDispatch();

function DisplayProduct ({productId, title, price, description, image}) {
    // console.log(' DisplayProduct ==>>>   ', productId, title, price, description, image);
    const [displayOneProduct, setDisplayOneProduct] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    let cartId = 102;

    const onClickTitle = () => {
        navigate(`/product/${productId}`);
    }

    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity}`)
        dispatch(addToCart({ productId, quantity }));
          
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