import { useState, useEffect } from "react";
import './Display.css';
import DisplayProduct from "./DisplayProduct";
import { getAllProducts } from '../api/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToProduct, selectProduct } from '../productSlice';

function Display() {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                dispatch(addToProduct(res));
            })
            .catch((error) => {
                console.log('Error ', error)
            });
    }, [])

    return (
        <main>
            <section className="displayArea">
                <div className="productList">
                {Object.keys(products).map(function(key){
                    // console.log(key, 'dsggfbsgf ', products[key]['title'] );
                    return (<DisplayProduct key={key} productId={key} title={products[key]['title']} price={products[key]['price']} description={products[key]['description']} image={products[key]['image']} />)
                })}
                </div>
            </section>
        </main>
    )
}

export default Display;

{/* {<DisplayProduct data={useSelector(selectProduct)} />} */ }
{/* {prod.map((item)=>(
                          <DisplayProduct productid={item.id} title={item.title} price={item.price} description={item.description} image={item.image} />
                          ))} */}