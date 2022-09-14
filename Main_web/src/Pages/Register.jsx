import React,{useEffect, useState} from 'react'
import {NavLink,Link,useNavigate} from 'react-router-dom'

function Register() {
    const [formvalue,setFormvalue] = useState({
        "name":"",
        "email":"",
        "mobile":"",
        "password":"",
        "status":"Unblock"
        
      })
      
        function changehandel(e){
          const {name,value}=e.target;
          setFormvalue({...formvalue,[name]:value})
      
        }
        
      
        const navigate=useNavigate();
  function submithandel(e)
  {
      e.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJGg50-qlk20yHLZ2oMdsD7Bb25-BHVTs', {
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
            fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${data.localId}.json`, {
                method: "PUT",
                body: JSON.stringify(formvalue),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Register Success");
                navigate('/');
            })
          } 
          else 
          {
             
          }
          setFormvalue({name:"",email:"",password:"",mobile:""});
          console.log(data.localId)
        }
      });
  }

  return (
    <div className='container'>
     


    <div className="contact__form col-md-12 m-3">
          <form action="#">
          <h2 className='mb-2 section-title contact__text'>Register Here </h2>

            <div className="row">
           
              <div className="col-lg-12 form-group">
                <input type="text" placeholder="Name" name="name" className="form-control" value={formvalue.name} onChange={changehandel}/>
                <p id='error' className="help-block text-danger"></p>
              </div>
              <div className="col-lg-12 form-group">
                <input type="email" placeholder="Email" name="email" className="form-control" value={formvalue.email} onChange={changehandel}/>
                <p id='error1' className="help-block text-danger"></p>
              </div>
              <div className="col-lg-12 form-group">
                <input type="number" placeholder="Mobile" name="mobile" className="form-control" maxlength="10" value={formvalue.mobile} onChange={changehandel}/>
                <p id='error2' className="help-block text-danger"></p>
              </div>
              <div className="col-sm-12 control-group">
                      <input type="password" name="password" value={formvalue.password} onChange={changehandel}  className="form-control" required="required" placeholder='Enter Password' data-validation-required-message="Please enter your name" />
                      <p id='error3' className="help-block text-danger"></p>
                    </div>
              <div className="col-md-6">
                
                <button type="submit" className="site-btn" onClick={submithandel}>Sign UP</button>
                
              </div>
              <div className="col-md-6">
                
                <NavLink to="/login"><button type="submit" className="site-btn float-right" >Sign IN</button></NavLink>
                
              </div>
            </div>
          </form>
        </div>
    </div>
        )}


export default Register