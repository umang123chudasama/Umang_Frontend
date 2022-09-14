import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from './Component/Footer';
import Header from './Component/Header';

import Add_Product from './Pages/Add_Product';
import Edit_Contact from './Pages/Edit_Contact';
import Edit_Customer from './Pages/Edit_Customer';
import Edit_Product from './Pages/Edit_Product';
import Index from './Pages/Index';
import Login from './Pages/Login';

import Manage_Contact from './Pages/Manage_Contact';
import Manage_Customer from './Pages/Manage_Customer';
import Manage_Product from './Pages/Manage_Product';
function Main() {
  return (
   <div>
        <Routes>
            <Route index element={<><Login/></>}/>
            <Route path="/index" element={<><Header/><Index/></>}/>
            <Route path="/add_product" element={<><Header/><Add_Product/></>}/>
            <Route path="/manage_contact" element={<><Header/><Manage_Contact/></>}/>
            <Route path="/manage_customer" element={<><Header/><Manage_Customer/></>}/>
            <Route path="/manage_product" element={<><Header/><Manage_Product/></>}/>
            <Route path="/edit_contact" element={<><Edit_Contact/></>}/>
            <Route path="/edit_customer" element={<><Edit_Customer/></>}/>
            <Route path="/edit_product/:id" element={<><Edit_Product/></>}/>
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default Main