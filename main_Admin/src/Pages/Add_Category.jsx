import React from 'react'

function Add_Category() {
  return (
    <div>
        <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Add Categories</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Add Category
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Categories Name</label>
                <input type="text" className="form-control" required name="name" />
              </div>
              
              
             
              <div className="form-group">
                <label>Select Category</label>
                <select className="form-control" name="category" required>
                  <option value="">Select Categories</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Child">Child</option>
                </select>
              </div>
             
              
              <div className="form-group">
                <button className='btn btn-primary btn-lg' >Submit</button>
              </div>
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

export default Add_Category