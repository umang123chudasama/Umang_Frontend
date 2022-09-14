import React, {useState,useEffect} from 'react'




function Product_list() {
    
        return(
         
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__pic set-bg">
                          <img src="" alt='img' height="100%" width="100%"/>
                          <ul className="product__hover">
                            <li><a href="#"><img src="img/icon/heart.png" alt /></a></li>
                            <li><a href="#"><img src="img/icon/compare.png" alt /> <span>Compare</span></a>
                            </li>
                            <li><a href="#"><img src="img/icon/search.png" alt /></a></li>
                          </ul>
                        </div>
                        <div className="product__item__text">
                          <h6>title</h6>
                          <a className="add-cart float-Right btn">View Product</a>
                          <div className="rating">
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                            <i className="fa fa-star-o" />
                          </div>
                          <h5>RS.122</h5>
                          <div className="product__color__select">
                            <label htmlFor="pc-4">
                              <input type="radio" id="pc-4" />
                            </label>
                            <label className="active black" htmlFor="pc-5">
                              <input type="radio" id="pc-5" />
                            </label>
                            <label className="grey" htmlFor="pc-6">
                              <input type="radio" id="pc-6" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    )

                }
          
export default Product_list