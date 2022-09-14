import React, { useState, useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useParams, useNavigate  } from 'react-router-dom';
function Edit_Product() {
 
    const Navigate=useNavigate();
   
    const initialiation = {
      title:"",
      main_price:"",
      disc_price:"",
      category:"",
      stock:"",
      size:"",
      desc:"",
      file:""
    }

    useEffect(() => {
      handeledit()
      
    }, []);

    const [editformvalue, seteditformvalue] = useState(initialiation);
    const [edid, setedId] = useState({});
    const { id }=useParams();
    async function handeledit() {
      const res = await axios.get(`https://websiteecom-355b6-default-rtdb.firebaseio.com/products/${id}.json`);
      if (res.data) {
        seteditformvalue(res.data);
        setedId(id);
      }
      console.log(editformvalue);
    }
  
    async function changehandel(e) {
      const { name, value } = e.target
      seteditformvalue({ ...editformvalue, [name]: value })
      //console.log(editformvalue);
  
    }

    async function handelupdate(e) {
      
      e.preventDefault();
      const res= await axios.put(`https://websiteecom-355b6-default-rtdb.firebaseio.com/products/${id}.json`,editformvalue);
      if(res.data)
      {
          swal({
              title: "Success",
              text: "Sucsessfully updated",
              icon: "success",
              button: "Ok!",
            });
            Navigate("/view_product");
          handeledit();
      }
      else{
          console.log("not updateed");
      }
  }

  return (
    <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Edit Products</h4>
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
                <input type="text" className="form-control" required name="title" value={editformvalue.title} onChange={changehandel}/>
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input type="number" className="form-control" required name="main_price" value={editformvalue.main_price} onChange={changehandel}/>
              </div>
             
              <div className="form-group">
                <label>Product Discounted Price</label>
                <input type="number" className="form-control" required name="disc_price"  value={editformvalue.disc_price} onChange={changehandel}/>
              </div>
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" required onChange={changehandel} defaultValue={editformvalue.category}>
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
                <input type="url" className="form-control" name="file" value={editformvalue.file} onChange={changehandel}/>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="desc" value={editformvalue.desc} onChange={changehandel}>
                  {editformvalue.desc}
                </textarea>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' onClick={handelupdate}>Submit</button>
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

export default Edit_Product