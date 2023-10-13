import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { MediaCard } from './MediaCard';


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
    
    return(
        <MediaCard image={image} title={title} price={price} onClickTitle={onClickTitle} />
    )
}

export default DisplayProduct;