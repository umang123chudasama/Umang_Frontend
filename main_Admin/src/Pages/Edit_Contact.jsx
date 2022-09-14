import React from 'react'

function Edit_Contact() {
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
                Edit Contact
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required name="name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="Email" className="form-control" required name="Email" />
              </div>
           
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Product Description" rows={5} name="Message">
                
                </textarea>
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

export default Edit_Contact