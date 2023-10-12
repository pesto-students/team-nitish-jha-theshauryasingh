import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';
import { selectUserId } from '../userSlice';
import { selectSpecificProduct } from '../productSlice';


// const dispatch = useDispatch();

function DisplayProduct ({productId, title, price, description, image}) {
    const [cartValue, setCartValue] = useState(false);
    // console.log(' DisplayProduct ==>>>   ', productId, title, price, description, image);
    const [displayOneProduct, setDisplayOneProduct] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onClickTitle = () => {
        console.log('onClickTitle ', productId);
        navigate(`/product/${productId}`);
    }

    // const handleAddToCart = () => {
    //     const quantity = 1;
    //     console.log(`handleAddToCart - ${productId}, ${quantity}`)
    //     dispatch(addToCart({ productId, quantity }));
    //     setCartValue(true);
          
    // }

    // const handleGoToCart = () => {
    //     navigate(`/cart/`);
    // }
    
    return(
        <div className="card" >
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" onClick={onClickTitle}>{title}</h5>
                <i>{price} ₹</i>
                {/* <p className="card-text">{description}</p> */}
                {/* { displayOneProduct && (<DisplayOneProduct/>)} */}
                {/* {cartValue ? <button className="btn btn-primary" onClick={handleGoToCart}> Go to Cart </button>
                : <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button> } */}
                
            </div>
        </div>
    )
}

export default DisplayProduct;