import React from 'react'

import {Routes, Route, Outlet, Link } from 'react-router-dom';
import Banner1 from './Component/Banner1';
import Banner2 from './Component/Banner2';
import Footer from './Component/Footer'
import Header from './Component/Header'
import Map from './Component/Map';
import About from './Pages/About';
import Banner3 from './Component/Banner3';
import Blog from './Pages/Blog';
import Blog2 from './Pages/Blog2';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Index from './Pages/Index'
import Login from './Pages/Login';
import PNF from './Pages/PNF';
import Products from './Pages/Products';
import Product_Details from './Pages/Product_Details';
import Register from './Pages/Register';

function Main() {
  return (
    <div>
      <Header/>
        <Routes>
                  <Route index element={<><Banner1/><Index/></>} />
                  <Route path='/index' element={<><Banner1/><Index/></>}/>
                  <Route path='/about' element={<><Banner2 title={"About"}/><About/></>}/>
                  <Route path='/shop' element={<><Banner2 title={"shop"}/><Products/></>}/>
                  <Route path='/shopping-cart' element={<><Banner2 title={"shopping-cart"}/><Cart/></>}/>
                  <Route path='/shop-details' element={<><Banner2 title={"shop-details"}/><Product_Details/></>}/>
                  <Route path='/contact' element={<><Map/><Contact/></>}/>
                  <Route path='/blog-details' element={<><Banner3 title={"Blog-details"}/><Blog/></>}/>
                  <Route path='/blog' element={<><Banner2 title={"Blog"}/><Blog2/></>}/>
                  <Route path='/register' element={<><Banner2 title={"Register"}/><Register/></>}/>
                  <Route path='/login' element={<><Banner2 title={"Login"}/><Login/></>}/>
                  <Route path='/checkout' element={<><Banner2 title={"checkout"}/><Checkout/></>}/>
                  <Route path='/shop-details/:id' element={<><Banner2 title={"Product_Details"}/><Product_Details/></>}/>
                  <Route path='/shopping-cart/:id' element={<><Banner2 title={"shopping-cart"}/><Cart/></>}/>
                  <Route path='*' element={<><Header/><PNF/></>}/>
                  
              </Routes>
          <Footer/>
    </div>
  )
}

export default Main