import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {

  return (
    <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h1 className="header-line">Admin Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Admin Login
            </div>
            <div className="panel-body">
              
              <div className="form-group">
                <label>Enter Email</label>
                <input type="email" name="email"  className="form-control is-invalid" placeholder="Enter your Email" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

              </div>
             
              <hr />
              <div className="form-group">
                <label>Enter Password</label>
                <input type="password" name="password"  className="form-control" placeholder="Enter Your Password" required/>
                <small id="passwordHelpBlock" class="form-text text-muted">
                    Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
                
              </div>
             
              <hr />
              <div className="form-group">
                <div className="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <NavLink to="/index"><button className='btn btn-primary' >Login </button></NavLink>
                
              </div>
              
              
              
            </div>
            
            
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Login