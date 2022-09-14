import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { addProduct } from '../Redux/actions';
import shortid from 'shortid';

function Add_Product() {

  const dispatch = useDispatch();
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

function changehandle(e){
  setformvalue({...formvalue,[e.target.name]:e.target.value});
  console.log(formvalue);
}  


function submithandle(e){
  e.preventDefault();
  Object.assign(formvalue,{id:shortid.generate()});
  if(!formvalue.name || !formvalue.main_price || !formvalue.dis_price || !formvalue.category || !formvalue.stock || !formvalue.size || !formvalue.img || !formvalue.desc){
      seterror("Please Input All The Data");
      alert(error);
  }else{
    dispatch(addProduct(formvalue));
    setformvalue({
      name:"",
      main_price:"",
      dis_price:"",
      category:"",
      stock:"",
      size:"",
      img:"",
      desc:"" });
    seterror("");
  }
}

  return (
    

<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Add Products</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Add Product
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" required name="name" onChange={changehandle} value={formvalue.name}/>
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input type="number" className="form-control" required name="main_price" onChange={changehandle} value={formvalue.main_price}/>
              </div>
             
              <div className="form-group">
                <label>Product Discounted Price</label>
                <input type="number" className="form-control" required name="dis_price"  onChange={changehandle} value={formvalue.dis_price}/>
              </div>
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" required onChange={changehandle} value={formvalue.category}>
                  <option value="">Select Categories</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Child">Child</option>
                </select>
              </div>
             
              <div className="form-group">
                            
                            <div className="form-check" name="stock">
                            <label>Stock info</label><br/>
                              <label className="form-check-label" htmlFor="radio1">
                                <input type="radio" className="form-check-input" id="radio1" name="stock" value="Instock" onChange={changehandle} defaultChecked/>In stock
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label" htmlFor="radio2">
                                <input type="radio" className="form-check-input" id="radio2"   name="stock" value="Outofstock" onChange={changehandle} />Out of stock
                              </label>
                            </div>
                          </div>

            
              <div className="form-check">
                <label>Product Size</label><br/>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="S" onChange={changehandle} />S
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="M" onChange={changehandle}/>M
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"  name="size" value="L" onChange={changehandle}/>L
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XL" onChange={changehandle}/>XL
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XXL" onChange={changehandle}/>XXL
                  </label>
                </div>
              </div>
              <hr />
              <div className="form-group">
                <label>Product image</label>
                <input type="url" className="form-control" name="img"  placeholder="Enter Your image link" onChange={changehandle} value={formvalue.img}/>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="desc" onChange={changehandle} value={formvalue.desc}>
                 {formvalue.desc}
                </textarea>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' onClick={submithandle}>Submit</button>
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

export default Add_Product