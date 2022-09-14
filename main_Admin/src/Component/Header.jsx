import React from 'react'
import {NavLink,Link} from 'react-router-dom'

function Header() {
  return (
    <div>
  <div className="navbar navbar-inverse set-radius-zero">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.png" />
          </a>
        </div>
        <div className="right-div">
          <button className='btn btn-danger' >logout</button>
        </div>
      </div>
    </div>
    {/* LOGO HEADER END*/}
    <section className="menu-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="navbar-collapse collapse ">
              <ul id="menu-top" className="nav navbar-nav navbar-right">
                <li><NavLink to="/index" className="menu-top">DASHBOARD</NavLink></li>
                <li><NavLink to="/add_product">Add Product</NavLink></li>
                
                <li><NavLink to="/manage_product">Manage Product</NavLink></li>
                <li><NavLink to="/manage_contact">Manage Contact</NavLink></li>
                <li><NavLink to="/manage_customer">Manage Customer</NavLink></li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>

  
   
  )
}

export default Header