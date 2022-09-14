import axios from 'axios';
import React,{useState,useEffect} from 'react'
import swal from 'sweetalert';
import {NavLink,Link,useNavigate} from 'react-router-dom'
function Add_admin() {

  const [formvalue,setFormvalue] = useState({
    
    "email":"",
    "password":""
    
    
  })
    
    function changehandel(e){
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value})
      console.log(formvalue);
      
    }
    const navigate=useNavigate();
    function submithandel(e)
    {
        e.preventDefault();
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2vO-keYlfozt36QG5f6Gz2iMvfN_vy9I', {
        method: 'POST',
        body: JSON.stringify(formvalue),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data)
          {
            if (data.localId) {
              fetch(`https://adminecom-36023-default-rtdb.firebaseio.com/Signup/${data.localId}.json`, {
                  method: "PUT",
                  body: JSON.stringify(formvalue),
                  headers: {
                      "Content-type": "application/json; charset=UTF-8",
                  },
              })
              .then((response) => response.json())
              .then((data) => {
                if(localStorage.getItem('auth_token'))
                {
                  swal({
                    title: "Success",
                    text: "Admin Successfully Added",
                    icon: "success",
                  });
                }
                
              })
            } 
            else 
            {
              swal({
                title: data.error.message,
                text: data.error.message,
                icon: "error",
              });
            }
            setFormvalue({...formvalue,email:"",password:""});
            
          }
        });
    }
    
    
  return (
    <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h1 className="header-line">Add Admin</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Add Admin 
            </div>
            <div className="panel-body">
            
              <div className="form-group">
                <label>Enter Email</label>
                <input type="email" name="email" value={formvalue.email} onChange={changehandel} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
             
              <hr />
              <div className="form-group">
                <label>Enter Password</label>
                <input type="password" name="password"  value={formvalue.password} onChange={changehandel} className="form-control" id="exampleInputPassword1" required/>
              </div>
             
              <hr />
              
                
                <button className='btn btn-primary' onClick={submithandel}>Add Admin</button>
                
              
              
              
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Add_admin