import React from 'react'
import { } from 'react-redux'
import {  } from './userSlice'
function Add_user() {
  return (
  
         <div className='container mt-5'>
            <h1 className='text-center'>Add user</h1>
            <form className="row g-3 p-5">
                <div className="col-md-12">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                </div>
               
              
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            

        </div>
    
  )
}

export default Add_user