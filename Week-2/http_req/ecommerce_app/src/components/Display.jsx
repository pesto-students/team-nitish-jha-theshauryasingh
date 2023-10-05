import { useState, useEffect } from "react";
import './Display.css';
import DisplayProduct from "./DisplayProduct";
import { getAllProducts } from '../api/productApi';

function Display () {
    const [prod, setProducts] = useState([]); //{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}]);

    useEffect(()=>{
        getAllProducts()
          .then((data)=> { setProducts(data); })
          .catch((error)=> {console.log('Error ', error)});
    }, [])

    return (
            <main>
                <section className="displayArea">
                    <div className="productList">
                        {prod.map((item)=>(
                          <DisplayProduct productid={item.id} title={item.title} price={item.price} description={item.description} image={item.image} />
                          ))}
                    </div>
                </section>
            </main>
    )
}

export default Display;

