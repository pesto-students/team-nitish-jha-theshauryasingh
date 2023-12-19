import Header from '../components/Header';
// import './Home.css'

import { useNavigate } from 'react-router-dom';

// getAllProducts

function Home() {
    const navigate = useNavigate();
    const handleExploreProducts = () => {
        navigate(`/product`);
    }
    return (
        <>
            <Header/>
            {/* <main>
                <section className="left">
                    <h2>Bumper Sale</h2>
                    <h4>Deals for every one </h4>
                    <button className="products" onClick={handleExploreProducts}>
                        Explore Products
                    </button>
                </section>
                <section className="right">
                    images
                </section>
            </main> */}
        </>
    )
}

export default Home