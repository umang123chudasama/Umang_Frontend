import React from 'react'

function Edit_Product() {
  return (
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
                <input type="text" className="form-control" required name="title" />
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input type="number" className="form-control" required name="main_price" />
              </div>
             
              <div className="form-group">
                <label>Product Discounted Price</label>
                <input type="number" className="form-control" required name="disc_price"  />
              </div>
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" >
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
                    <input type="radio" className="form-check-input" id="radio1" name="stock" value="Instock" defaultChecked/>In stock
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="radio2">
                    <input type="radio" className="form-check-input" id="radio2"   name="stock" value="Outofstock" />Out of stock
                  </label>
                </div>
              </div>

            
              <div className="form-check">
                <label>Product Size</label><br/>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="S"  />S
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="M" />M
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"  name="size" value="L" />L
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XL" />XL
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="size" value="XXL" />XXL
                  </label>
                </div>
              </div>
              <hr />
              <div className="form-group">
                <label>Product image</label>
                <input type="url" className="form-control" name="file" />
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="desc" >
                 
                </textarea>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' >Update</button>
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