import Header from '../components/Header';
import '../components/DisplayProduct.css';
import { addToCart } from '../api/cartApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCartId, selectCartId } from '../cartSlice';
import { selectUserId } from '../userSlice';

// getAllProducts

function SingleProduct({ productId }) {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    let cartId = useSelector(selectCartId);
    if (cartId===null){
        dispatch(setCartId(1));
        
    }
    cartId = useSelector(selectCartId);

    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity}, ${userId}, ${cartId}`)
        addToCart(productId,quantity, userId, cartId)
            .then((data)=> { console.log(data); })
            .catch((error)=> {console.log('Error ', error)});
          
    }

    return (
        <>
            <Header/>
            <div className="card">
            {/* <img src={image} alt="Product" /> */}
            <div className="card-body">
                <h2>title</h2>
                <p>Price: price</p>
                <p>description</p>
                <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button>
            </div>
            </div>
        </>
    )
}

export default SingleProduct