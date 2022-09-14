import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
//================ Admin =========================

import Header from './Component/Header';
import Footer from './Component/Footer';
import Dashboard from './Pages/Dashboard'
import Add_Product from './Pages/Add_Product';
import View_product from './Pages/View_product';
import PNF from './Pages/PNF';
import Index from './Pages/Index';
import View_contact from './Pages/View_contact';
import View_users from './Pages/View_users';
import Edit_contact from './Pages/Edit_contact';
import Edit_users from './Pages/Edit_users';
import Edit_Product from './Pages/Edit_Product';
import View_Cart from './Pages/View_Cart';
import Private_Route from './Component/Private_Route';
import Add_admin from './Pages/Add_admin';


function Main() {
  return (
        <div>
            <Routes>
                <Route index element={<><Index/></>} />
                <Route path='index' element={<><Index/></>} />
                <Route path='dashboard' element={<Private_Route><Header/><Dashboard/></Private_Route>} />
                <Route path='add_product' element={<Private_Route><Header/><Add_Product/></Private_Route>} />
                <Route path='view_product' element={<Private_Route><Header/><View_product/></Private_Route>} />
                <Route path='view_cart' element={<Private_Route><Header/><View_Cart/></Private_Route>} />
                <Route path='view_contact' element={<Private_Route><Header/><View_contact/></Private_Route>} />
                <Route path='view_users' element={<Private_Route><Header/><View_users/></Private_Route>} />
                <Route path='*' element={<Private_Route><Header/><PNF/></Private_Route>} />
                <Route path='view_contact/:id' element={<Private_Route><Header/><Edit_contact/></Private_Route>} />
                <Route path='View_users/:id' element={<Private_Route><Header/><Edit_users/></Private_Route>} />
                <Route path='add_admin' element={<><Header/><Add_admin/></>} />
                <Route path='View_Product/:id' element={<Private_Route><Header/><Edit_Product/></Private_Route>} />
                <Route path='add_admin' element={<Private_Route><Header/><Add_admin/></Private_Route>} />
            </Routes>
            <Footer/>
        </div>
  )
}
export default Main