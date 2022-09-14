import React from 'react'
import { NavLink } from 'react-router-dom'

function Manage_Product() {
  return (
    <div>
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">View Product</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Advanced Tables */}
            <div className="panel panel-default">
              <div className="panel-heading">
                Customer Data
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                      <tr>
                      <th>Product Key</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Main Price</th>
                      <th>Dis Price</th>
                      <th>Size</th>
                      <th>Category</th>
                      <th>Stock</th>
                      <th>Delete</th>
                      <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                          <tr className="odd gradeX">
                          <td>1</td>
                          <td>demo</td> 
                          <td>demo</td>
                          <td>demo</td>
                          <td>demo</td>
                          <td>demo</td>
                          <td>demo</td>
                          <td>demo</td>
                          <td>demo</td>
                          <td className="center"><button className="btn btn-danger">Delete</button></td>
                          <td className="center"><NavLink to="/edit_product"><button className='btn btn-primary' >Edit </button></NavLink></td>
                           
                          </tr>
                       
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*End Advanced Tables */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Manage_Product