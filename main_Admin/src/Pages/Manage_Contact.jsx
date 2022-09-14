import React from 'react'
import { Navigate,NavLink } from 'react-router-dom'

function Manage_Contact() {


  function edit(){
    Navigate('/edit_contact');
  }
  
  return (
    <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View Contacts</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Contacts Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Contact Key</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Masg</th>
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
                          <td className="center"><button className="btn btn-danger">Delete</button></td>
                          <td className="center"><NavLink to="/edit_contact"><button className='btn btn-primary' >Edit </button></NavLink></td>
                         
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

export default Manage_Contact