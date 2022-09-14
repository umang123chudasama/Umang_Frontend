import React from 'react'

function Manage_Category() {
  return (
    <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View Category</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Category Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Category id</th>
                      <th>Name</th>
                      <th>Delete</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  
                        <tr className="odd gradeX">
                        <td>1</td>
                        <td>face</td> 
                          <td className="center"><button className="btn btn-danger">Delete</button></td>
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

export default Manage_Category