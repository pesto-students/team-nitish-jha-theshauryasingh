import React from 'react';
import './DisplayProduct.css';

// const dispatch = useDispatch();

function CartDisplayProduct ({product, quantity}) {
    console.log(`cart display product ${product}, ${quantity}`)
    return(
        <div className="card" >
            {/* <img src={image} className="card-img-top" alt="..."/> */}
            <div className="card-body">
                <h5 className="card-title">{product} - <i>{quantity}</i></h5>
                {/* <p className="card-text">{description}</p> */}
                {/* <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button> */}
            </div>
        </div>
    )
}

export default CartDisplayProduct;

// function DisplayProduct ({productId, title, price, description, image}) {
//     const dispatch = useDispatch();
//     const userId = useSelector(selectUserId);
//     let cartId = useSelector(selectCartId);
//     if (cartId===null){
//         dispatch(setCartId(1));
        
//     }
//     cartId = useSelector(selectCartId);

//     const handleAddToCart = () => {
//         const quantity = 1;
//         console.log(`handleAddToCart - ${productId}, ${quantity}, ${userId}, ${cartId}`)
//         addToCart(productId,quantity, userId, cartId)
//             .then((data)=> { console.log(data); })
//             .catch((error)=> {console.log('Error ', error)});
          
//     }
    


//     return(
//         <div className="card" >
//             <img src={image} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">{title} - <i>{price}</i></h5>
//                 {/* <p className="card-text">{description}</p> */}
//                 <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button>
//             </div>
//         </div>
//     )
// }