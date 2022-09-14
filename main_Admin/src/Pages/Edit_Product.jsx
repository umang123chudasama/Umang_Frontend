import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,useParams} from 'react-router-dom';
import {getSingleProduct, updateProduct} from '../Redux/actions'
function Edit_Product() {
  let dispatch= useDispatch();
  const navigate = useNavigate();

  const [formvalue, setformvalue] = useState({
    name:"",
    main_price:"",
    dis_price:"",
    category:"",
    stock:"",
    size:"",
    img:"",
    desc:""  
})

const [error, seterror] = useState("") 
let {id}= useParams();
const {product} = useSelector(state=>state.data);

function changehandle(e){
  setformvalue({...formvalue,[e.target.name]:e.target.value});
  console.log(formvalue);
}  

function submithandle(e){
  e.preventDefault();
  if(!formvalue.name || !formvalue.username || !formvalue.email || !formvalue.phone || !formvalue.website ){
      seterror("Please Input All The Data")
  }else{
      dispatch(updateProduct(formvalue, id));
      navigate("/");
      seterror("");
  }
}

useEffect(() => {
 dispatch(getSingleProduct(id));
}, []);

useEffect(() => {
 if(product){
  setformvalue({...product});
 }
}, [product])

  return (
    <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Edit Product</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Edit Product
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" required name="name" value={formvalue.name} onChange={changehandle} />
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input type="number" className="form-control" required name="main_price" value={formvalue.main_price} onChange={changehandle} />
              </div>
             
              <div className="form-group">
                <label>Product Discounted Price</label>
                <input type="number" className="form-control" required name="dis_price" value={formvalue.dis_price} onChange={changehandle} />
              </div>
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" value={formvalue.category} onChange={changehandle} >
                  <option value="">Select Categories</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Child">Child</option>
                </select>
              </div>
             
              <div className="form-group">
                            
                <div className="form-check" name="stock" >
                <label>Stock info</label><br/>
                  <label className="form-check-label" htmlFor="radio1" >
                    <input type="radio" className="form-check-input" id="radio1" name="stock" value="Instock" defaultChecked onChange={changehandle} />In stock
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="radio2"  >
                    <input type="radio" className="form-check-input" id="radio2"   name="stock" value="Outofstock" onChange={changehandle} />Out of stock
                  </label>
                </div>
              </div>

            
              <div className="form-check" >
                <label>Product Size</label><br/>
                <div className="checkbox"  >
                  <label>
                    <input type="checkbox" name="size" value="S" onChange={changehandle} />S
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="M" onChange={changehandle} />M
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"  name="size" value="L" onChange={changehandle} />L
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XL" onChange={changehandle} />XL
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XXL" onChange={changehandle} />XXL
                  </label>
                </div>
              </div>
              <hr />
              <div className="form-group" >
                <label>Product image</label>
                <input type="url" className="form-control" name="file" value={formvalue.img} onChange={changehandle} />
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="desc" value={formvalue.desc} onChange={changehandle} >
                {formvalue.desc}
                </textarea>
              </div>

              <div className="form-group">
              <button type="submit" onClick={submithandle} className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit_Product