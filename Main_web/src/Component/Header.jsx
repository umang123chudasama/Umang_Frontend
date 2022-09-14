import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
  return (
<div>

  {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__option">
      <div className="offcanvas__links">
        <a href="#">Sign in</a>
        <a href="#">FAQs</a>
      </div>
      <div className="offcanvas__top__hover">
        <span>Usd <i className="arrow_carrot-down" /></span>
        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
    <div className="offcanvas__nav__option">
      <a href="#" className="search-switch"><img src="img/icon/search.png" alt /></a>
      <a href="#"><img src="img/icon/heart.png" alt /></a>
      <a href="#"><img src="img/icon/cart.png" alt /> <span>0</span></a>
      <div className="price">$0.00</div>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__text">
      <p>Free shipping, 30-day return or refund guarantee.</p>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="header__top__left">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="header__top__right">
              <div className="header__top__links">
                <NavLink to="/login">Sign in</NavLink>
                <a href="#">FAQs</a>
              </div>
              <div className="header__top__hover">
                <span>Usd <i className="arrow_carrot-down" /></span>
                <ul>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>USD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="header__logo">
            <a href="./index"><img src="img/logo.png" alt /></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <nav className="header__menu mobile-menu">
            <ul>
              <li><NavLink to="./index">Home</NavLink></li>
              <li><NavLink to="./shop">Shop</NavLink></li>
              <li><NavLink to="#">Pages</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="./about">About Us</NavLink></li>
                  <li><NavLink to="./shopping-cart">Shopping Cart</NavLink></li>
                  <li><NavLink to="./checkout">Check Out</NavLink></li>
                  <li><NavLink to="./blog-details">Blog Details</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="./blog">Blog</NavLink></li>
              <li><NavLink to="./contact">Contacts</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="header__nav__option">
            <a href="#" className="search-switch"><img src="img/icon/search.png" alt /></a>
            <a href="#"><img src="img/icon/heart.png" alt /></a>
            <a href="#"><img src="img/icon/cart.png" alt /> <span>0</span></a>
            <div className="price">$0.00</div>
          </div>
        </div>
      </div>
      <div className="canvas__open"><i className="fa fa-bars" /></div>
    </div>
  </header>
  {/* Header Section End */}
</div>

  )
}

export default Header