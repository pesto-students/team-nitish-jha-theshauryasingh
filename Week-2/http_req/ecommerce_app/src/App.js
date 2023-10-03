import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>not found 404</h1>}/>
    </Routes>
  );
}

export default App;
