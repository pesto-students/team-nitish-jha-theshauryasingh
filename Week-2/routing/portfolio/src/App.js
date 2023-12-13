import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <NavBar/>
            <Home/>
            </>}/>
          <Route path='/project' element={<><NavBar/><h1>project</h1></>} />
          <Route path='/contact' element={<><NavBar/><h1>contact</h1></>} />
          <Route path='/skills' element={<><NavBar/><h1>skills</h1></>} />
          <Route path='*' element={<><NavBar/><h1>home</h1></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
