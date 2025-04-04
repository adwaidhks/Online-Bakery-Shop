import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Cart & Payment/Cart';
import Trackorder from './Components/Track order/TrackOrder';
import About from './Components/Pages/About';
import Topbar from './Components/Navbar & Footer/TopNavbar';
import Footer from './Components/Navbar & Footer/Footer';
import EnterTrack from './Components/Track order/EnterTrack';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar & Footer/Navbar';
import Login from './Components/Login & Register/Login&Register';
import Success from './Components/Cart & Payment/Success';
import Products from './Components/ProductDisplay/Products';



function App() {
  
  return (
   <>
   <Topbar/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} exact></Route>
    <Route path='/shop' element={<Shop/>} exact></Route>
    <Route path='/cart' element={<Cart />} exact></Route>
    <Route path='/success' element={<Success />} exact></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/track' element={<EnterTrack/>}></Route>
    <Route path='/trackorder' element={<Trackorder/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/product/:productId' element={<Products/>}></Route>
   </Routes>
   <Footer/>
   
   </>
  );
}

export default App;
