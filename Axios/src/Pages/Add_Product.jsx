import React,{useState,useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';


function Add_Product() {
  const [formvalue,setFormvalue]=useState({
    "title":"",
    "main_price":"",
    "disc_price":"",
    "category":"",
    "stock":"",
    "size":"",
    "desc":"",
    "file":""
  })

 

  function changehandel(e)
  {
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value});
      console.log(formvalue);
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    const res=await axios.post(`https://websiteecom-355b6-default-rtdb.firebaseio.com/products.json`,formvalue);
    if(res.data)
    {
        //alert(res.data.msg);
        swal({
            title: "Success",
            text: "data.message",
            icon: "success",
            button: "Ok!",
          });
        setFormvalue({...formvalue,title:"",main_price:"",disc_price:"",category:"",stock:"",size:"",desc:"",file:""})
        
        
    }
    else
    {
      swal({
        title: "error",
        text: "data.error.message",
        icon: "error",
        button: "Ok!",
      });
      setFormvalue({...formvalue,title:"",main_price:"",disc_price:"",category:"",stock:"",size:"",desc:"",file:""})
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
                <input type="text" className="form-control" required name="title" value={formvalue.title} onChange={changehandel}/>
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input type="number" className="form-control" required name="main_price" value={formvalue.main_price} onChange={changehandel}/>
              </div>
             
              <div className="form-group">
                <label>Product Discounted Price</label>
                <input type="number" className="form-control" required name="disc_price"  value={formvalue.disc_price} onChange={changehandel}/>
              </div>
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" required onChange={changehandel}>
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
                    <input type="radio" className="form-check-input" id="radio1" name="stock" value="Instock" onChange={changehandel} defaultChecked/>In stock
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="radio2">
                    <input type="radio" className="form-check-input" id="radio2"   name="stock" value="Outofstock" onChange={changehandel} />Out of stock
                  </label>
                </div>
              </div>

            
              <div className="form-check">
                <label>Product Size</label><br/>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="S" onChange={changehandel} />S
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="M" onChange={changehandel}/>M
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"  name="size" value="L" onChange={changehandel}/>L
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XL" onChange={changehandel}/>XL
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XXL" onChange={changehandel}/>XXL
                  </label>
                </div>
              </div>
              <hr />
              <div className="form-group">
                <label>Product image</label>
                <input type="url" className="form-control" name="file" value={formvalue.file} onChange={changehandel} placeholder="Enter Your image link"/>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="desc" value={formvalue.desc} onChange={changehandel}>
                  {formvalue.desc}
                </textarea>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' onClick={submitHandel}>Submit</button>
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