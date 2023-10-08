import Header from '../components/Header';
import '../components/SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';
import { selectSpecificProduct } from '../productSlice';
import { useParams } from 'react-router-dom';



// getAllProducts

function SingleProduct() {
    const dispatch = useDispatch();
    // const [title, price, description, image] = useSelector(selectSpecificProduct);
    // console.log(title, price, description, image);
    const { id } = useParams();
    const productId = id;
    const data = useSelector((state) => selectSpecificProduct(state, productId));
    // console.log(data, `SingleProduct -> ${productId} ${id} selectSpecificProduct -> `, typeof(data))

    const handleAddToCart = () => {
        const quantity = 1;
        console.log(`handleAddToCart - ${productId}, ${quantity};`)
        dispatch(addToCart({ productId, quantity }));

    }


    return (
        <>
            <Header />
            <main>
                <section className="productDisplayArea">
                    <div className="product-list">
                        <div className="product-item">
                            <img className='product-img' src={data['image']} alt="Product" />
                            <div className="product-item-details">
                                <div className="product title">
                                    <h2>{data['title']}</h2>
                                    <p>{data['price']}</p>
                                </div>
                                <p>{data['description']}</p>
                                <button className="btn btn-primary" onClick={handleAddToCart}> Add to Cart </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default SingleProduct