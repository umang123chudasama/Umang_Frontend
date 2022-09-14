import React,{useState,useEffect} from 'react'
import {Link , useParams , useNavigate} from 'react-router-dom'
import axios from "axios"
import swal from 'sweetalert';
function Cart() {
  const [allProduct,SetallProduct]=useState([]);

  useEffect(()=>{
    viewProducts()
  },[]);

  

  async function viewProducts()
  {
    const res = await axios.get(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Cart.json`);
    if (res.data) {
      SetallProduct(res.data);
      viewProducts()
    }
    
  }

  async function handelDelete(user_id) {
    let ans = swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user detail!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`);
        
        swal("Poof! Your user detail has been deleted!", {
        icon: "success",
          
        });
        
        
      } else {
        swal("Your user detail is safe!");
        
      }
      
    });
  }

  

  
        return(

          
            
<div>
{/* Shopping Cart Section Begin */}
<section className="shopping-cart spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="shopping__cart__table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            
            <>
            <tbody>
            {
                     Object.keys(allProduct).map((item,index)=>{
                      const {title,file,main_price,disc_price,size,category,stock,desc}=allProduct[item];  
                      return(
            
              
              <tr>
                <td className="product__cart__item">
                  <div className="product__cart__item__pic">
                    <img src={file} alt />
                  </div>
                  <div className="product__cart__item__text">
                    <h6>{title}</h6>
                  </div>
                </td>
                <td className="quantity__item">
                  <div className="quantity">
                    <div className="pro-qty-2">
                      <input type="text" defaultValue={1} />
                    </div>
                  </div>
                </td>
                <td className="cart__price">{main_price}</td>
                <td >
                  <button className="cart__close btn" onClick={()=>handelDelete(item)}>
                    
                    <i className="fa fa-close" />
                    
                  </button>
                  </td>
              </tr>
              
                     )})}
            </tbody>
               
            </>
                  
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="continue__btn">
              <Link to="/shop">Continue Shopping</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="continue__btn update__btn">
              <a href="#"><i className="fa fa-spinner"/> Update cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="cart__discount">
          <h6>Discount codes</h6>
          <form action="#">
            <input type="text" placeholder="Coupon code" />
            <button type="submit">Apply</button>
          </form>
        </div>
        <div className="cart__total">
          <h6>Cart total</h6>
          <ul>
            <li>Subtotal <span></span></li>
            <li>Total <span>$ 169.50</span></li>
          </ul>
          <a href="#" className="primary-btn">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>
</section>
         

  {/* Shopping Cart Section End */}
</div>
                        


  )
}

export default Cart