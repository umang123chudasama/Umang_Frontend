import React,{useState,useEffect} from 'react'
import { useParams , useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';


function Product_Details() {
  const { id } = useParams()
  const [singledata,setSingleData]=useState({});
  const [formvalue,setFormvalue]=useState({});
  
 

  useEffect(()=>{
    Viewproduct();
  },[]);

  async function Viewproduct()
  {
    const res = await axios.get(`https://websiteecom-355b6-default-rtdb.firebaseio.com/products/${id}.json`);
    if (res.data) {
      setSingleData(res.data);
    }
    
  }
 
function changehandel(e)
{
    const {name,value}=e.target;
    setFormvalue({...formvalue,[name]:value})
    console.log(formvalue);
}


//https://websiteecom-355b6-default-rtdb.firebaseio.com/Cart.json


const submitHandel = async (e) => {
  e.preventDefault();
  const res=await axios.post(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Cart.json`,formvalue);
  if(res.data)
  {
      //alert(res.data.msg);
      swal({
          title: "Success",
          text: "done",
          icon: "success",
          button: "Ok!",
        }); 
  }
}
  return (
<div>
  {/* Shop Details Section Begin */}
  <section className="shop-details">
    <div className="product__details__pic">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product__details__breadcrumb">
              <a href="./index">Home</a>
              <a href="./shop">Shop</a>
              <span>Product Details</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                  <div className="product__thumb__pic set-bg" id='file'>
                    <img src={singledata.file}/>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-9">
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__pic__item">
                  <img src={singledata.file} alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product__details__content">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="product__details__text" id='title'>
              <h4>{singledata.title}</h4>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-o" />
                <span> - 5 Reviews</span>
              </div>
              <h3>{singledata.disc_price} <span id='main_price'>{singledata.main_price}</span></h3>
              <p>{singledata.desc}</p>
              <div className="product__details__option">
                <div className="product__details__option__size">
                  <span>Size:</span>
                  <label htmlFor="xxl">xxl
                    <input type="radio" id="xxl" />
                  </label>
                  <label className={singledata.size} >xl
                    <input type="radio" id="xl" />
                  </label>
                  <label htmlFor="l">l
                    <input type="radio" id="l" />
                  </label>
                  <label htmlFor="sm">s
                    <input type="radio" id="sm" />
                  </label>
                </div>
                <div className="product__details__option__color">
                  <span>Color:</span>
                  <label className="c-1" htmlFor="sp-1">
                    <input type="radio" id="sp-1" />
                  </label>
                  <label className="c-2" htmlFor="sp-2">
                    <input type="radio" id="sp-2" />
                  </label>
                  <label className="c-3" htmlFor="sp-3">
                    <input type="radio" id="sp-3" />
                  </label>
                  <label className="c-4" htmlFor="sp-4">
                    <input type="radio" id="sp-4" />
                  </label>
                  <label className="c-9" htmlFor="sp-9">
                    <input type="radio" id="sp-9" />
                  </label>
                </div>
              </div>
              <div className="product__details__cart__option">
                <div className="quantity">
                  <div className="pro-qty">
                    <input type="text" defaultValue={1} />
                  </div>
                </div>
                <a href="#" className="primary-btn btn" onClick={submitHandel}  >add to cart</a>
                
              </div>
              <div className="product__details__btns__option">
                <a href="#"><i className="fa fa-heart" /> add to wishlist</a>
                <a href="#"><i className="fa fa-exchange" /> Add To Compare</a>
              </div>
              <div className="product__details__last__option">
                <ul>
                  <li><span>SKU:</span> 3812912</li>
                  <li><span>Categories:</span> Clothes</li>
                  <li><span>Tag:</span> Clothes, Skin, Body</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#tabs-5" role="tab">Description</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                    Previews(5)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                    information</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                  <div className="product__details__tab__content">
                    <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                      solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                      ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                      pharetras loremos.</p>
                    <div className="product__details__tab__content__item">
                      <h5>Products Infomation</h5>
                      <p>A Pocket PC is a handheld computer, which features many of the same
                        capabilities as a modern PC. These handy little devices allow
                        individuals to retrieve and store e-mail messages, create a contact
                        file, coordinate appointments, surf the internet, exchange text messages
                        and more. Every product that is labeled as a Pocket PC must be
                        accompanied with specific software to operate the unit and must feature
                        a touchscreen and touchpad.</p>
                      <p>As is the case with any new technology product, the cost of a Pocket PC
                        was substantial during it’s early release. For approximately $700.00,
                        consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                        These days, customers are finding that prices have become much more
                        reasonable now that the newness is wearing off. For approximately
                        $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>Material used</h5>
                      <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                        from synthetic materials, not natural like wool. Polyester suits become
                        creased easily and are known for not being breathable. Polyester suits
                        tend to have a shine to them compared to wool and cotton suits, this can
                        make the suit look cheap. The texture of velvet is luxurious and
                        breathable. Velvet is a great choice for dinner party jacket and can be
                        worn all year round.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-6" role="tabpanel">
                  <div className="product__details__tab__content">
                    <div className="product__details__tab__content__item">
                      <h5>Products Infomation</h5>
                      <p>A Pocket PC is a handheld computer, which features many of the same
                        capabilities as a modern PC. These handy little devices allow
                        individuals to retrieve and store e-mail messages, create a contact
                        file, coordinate appointments, surf the internet, exchange text messages
                        and more. Every product that is labeled as a Pocket PC must be
                        accompanied with specific software to operate the unit and must feature
                        a touchscreen and touchpad.</p>
                      <p>As is the case with any new technology product, the cost of a Pocket PC
                        was substantial during it’s early release. For approximately $700.00,
                        consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                        These days, customers are finding that prices have become much more
                        reasonable now that the newness is wearing off. For approximately
                        $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>Material used</h5>
                      <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                        from synthetic materials, not natural like wool. Polyester suits become
                        creased easily and are known for not being breathable. Polyester suits
                        tend to have a shine to them compared to wool and cotton suits, this can
                        make the suit look cheap. The texture of velvet is luxurious and
                        breathable. Velvet is a great choice for dinner party jacket and can be
                        worn all year round.</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-7" role="tabpanel">
                  <div className="product__details__tab__content">
                    <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                      solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                      ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                      pharetras loremos.</p>
                    <div className="product__details__tab__content__item">
                      <h5>Products Infomation</h5>
                      <p>A Pocket PC is a handheld computer, which features many of the same
                        capabilities as a modern PC. These handy little devices allow
                        individuals to retrieve and store e-mail messages, create a contact
                        file, coordinate appointments, surf the internet, exchange text messages
                        and more. Every product that is labeled as a Pocket PC must be
                        accompanied with specific software to operate the unit and must feature
                        a touchscreen and touchpad.</p>
                      <p>As is the case with any new technology product, the cost of a Pocket PC
                        was substantial during it’s early release. For approximately $700.00,
                        consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                        These days, customers are finding that prices have become much more
                        reasonable now that the newness is wearing off. For approximately
                        $350.00, a new Pocket PC can now be purchased.</p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>Material used</h5>
                      <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                        from synthetic materials, not natural like wool. Polyester suits become
                        creased easily and are known for not being breathable. Polyester suits
                        tend to have a shine to them compared to wool and cotton suits, this can
                        make the suit look cheap. The texture of velvet is luxurious and
                        breathable. Velvet is a great choice for dinner party jacket and can be
                        worn all year round.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shop Details Section End */}
   {/*cart hidden fields */}
    
   <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            
            <div className="panel-body">
              <div className="form-group">
                
                <input type="hidden" className="form-control" required name="title" value={singledata.title} onChange={changehandel}/>
              </div>
              
              <div className="form-group">
                
                <input type="hidden" className="form-control" required name="main_price" value={singledata.main_price} onChange={changehandel}/>
              </div>
             
              <div className="form-group">
                
                <input type="hidden" className="form-control" required name="disc_price"  value={singledata.disc_price} onChange={changehandel}/>
              </div>
              <hr />
              <div className="form-group">
                
                <input type="hidden" className="form-control" name="file" value={singledata.file} onChange={changehandel}/>
              </div>
              

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>

  )
}

export default Product_Details