import React from 'react'

function Sidebar() {
  return (
<div>
  <div className="span3 col">
    <div className="block">	
      <ul className="nav nav-list">
        <li className="nav-header">SUB CATEGORIES</li>
        <li><a href="products">Nullam semper elementum</a></li>
        <li className="active"><a href="products">Phasellus ultricies</a></li>
        <li><a href="products">Donec laoreet dui</a></li>
        <li><a href="products">Nullam semper elementum</a></li>
        <li><a href="products">Phasellus ultricies</a></li>
        <li><a href="products">Donec laoreet dui</a></li>
      </ul>
      <br />
      <ul className="nav nav-list below">
        <li className="nav-header">MANUFACTURES</li>
        <li><a href="products">Adidas</a></li>
        <li><a href="products">Nike</a></li>
        <li><a href="products">Dunlop</a></li>
        <li><a href="products">Yamaha</a></li>
      </ul>
    </div>
    <div className="block">
      <h4 className="title">
        <span className="pull-left"><span className="text">Randomize</span></span>
        <span className="pull-right">
          <a className="left button" href="#myCarousel" data-slide="prev" /><a className="right button" href="#myCarousel" data-slide="next" />
        </span>
      </h4>
      <div id="myCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="active item">
            <ul className="thumbnails listing-products">
              <li className="span3">
                <div className="product-box">
                  <span className="sale_tag" />												
                  <a href="product_detail"><img alt src="themes/images/ladies/7.jpg" /></a><br />
                  <a href="product_detail" className="title">Fusce id molestie massa</a><br />
                  <a href="#" className="category">Suspendisse aliquet</a>
                  <p className="price">$261</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="item">
            <ul className="thumbnails listing-products">
              <li className="span3">
                <div className="product-box">												
                  <a href="product_detail"><img alt src="themes/images/ladies/8.jpg" /></a><br />
                  <a href="product_detail" className="title">Tempor sem sodales</a><br />
                  <a href="#" className="category">Urna nec lectus mollis</a>
                  <p className="price">$134</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="block">								
      <h4 className="title"><strong>Best</strong> Seller</h4>								
      <ul className="small-product">
        <li>
          <a href="#" title="Praesent tempor sem sodales">
            <img src="themes/images/ladies/1.jpg" alt="Praesent tempor sem sodales" />
          </a>
          <a href="#">Praesent tempor sem</a>
        </li>
        <li>
          <a href="#" title="Luctus quam ultrices rutrum">
            <img src="themes/images/ladies/2.jpg" alt="Luctus quam ultrices rutrum" />
          </a>
          <a href="#">Luctus quam ultrices rutrum</a>
        </li>
        <li>
          <a href="#" title="Fusce id molestie massa">
            <img src="themes/images/ladies/3.jpg" alt="Fusce id molestie massa" />
          </a>
          <a href="#">Fusce id molestie massa</a>
        </li>   
      </ul>
    </div>
  </div>
</div>

  )
}

export default Sidebar