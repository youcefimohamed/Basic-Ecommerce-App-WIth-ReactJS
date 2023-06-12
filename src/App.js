import './App.css';
import Navbar from './commpenents/navbar.js'
import Carousel from './commpenents/carousel'
import Productlist from './commpenents/productlist'
import { Route, Routes } from 'react-router-dom';
import About from './commpenents/About';
import Details from './commpenents/Details';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' 
        element={
          <>
          <Carousel/>
          <Productlist/>
          </>  
        }/>
        
        <Route path='/product' element={<Productlist/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='product/:Productid' element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
