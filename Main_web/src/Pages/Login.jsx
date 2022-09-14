import React,{useState} from 'react'
import {Link,NavLink , useNavigate} from 'react-router-dom'
function Login() {
  const [formvalue,setFormvalue]=useState({
    "email":"",
    "password":""
  })

  function changehandel(e)
  {
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value});
  }
  const navigate=useNavigate();
  function submithandel(e)
  {
      e.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJGg50-qlk20yHLZ2oMdsD7Bb25-BHVTs', {
      method: 'POST',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if(data.registered === true)
        {
          alert('Login Success');
          navigate('/index');
        }
        else
        {
          alert('Login failed due to wrong Credential');
        }
      });
  }
  
  return (
    <div className='container'>
     


    <div className="contact__form col-md-12 m-3">
          <form action="#">
          <h2 className='mb-2 section-title contact__text'>Login Here </h2>

            <div className="row">
              <div className="col-lg-12 form-group">
                <input type="email" placeholder="Email" name="email" required="required" className="form-control" value={formvalue.email} onChange={changehandel}/>
                
              </div>
              
              <div className="col-sm-12 control-group">
                      <input type="password" name="password"   className="form-control" value={formvalue.password} onChange={changehandel} required="required" placeholder='Enter Password' data-validation-required-message="Please enter your name" />
                      
                    </div>
              <div className="col-md-6">
                
                <button type="submit" className="site-btn" onClick={submithandel} >Sign In</button>
                
              </div>
              <div className="col-md-6">
                
                <NavLink to="/register"><button type="submit" className="site-btn float-right" >Sign Up</button></NavLink>
                
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login