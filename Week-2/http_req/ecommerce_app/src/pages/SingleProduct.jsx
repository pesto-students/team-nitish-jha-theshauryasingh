import Header from '../components/Header';
import '../components/DisplayProduct.css';
// import { addToCart } from '../api/cartApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';
import { selectSpecificProduct } from '../productSlice';



// getAllProducts

function SingleProduct({ productId }) {
    const dispatch = useDispatch();
    // const [title, price, description, image] = useSelector(selectSpecificProduct);
    // console.log(title, price, description, image);
    const temp = useSelector(selectSpecificProduct);
    console.log('SingleProduct -> selectSpecificProduct -> ', temp);

    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity};`)
        dispatch(addToCart({ productId, quantity }));
          
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