import React from 'react'

function Edit_Customer() {
  return (
    <div>
        <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Edit Users Data</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Edit Customer data
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required name="name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required name="email" />
              </div>
           
              <div className="form-group">
              <label>Mobile no</label>
                <input type="number" className="form-control" required name="mobile" />
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
  )
}

export default Edit_Customer