import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { edituser } from '../actions';

function Edituser() {

const despatch=useDispatch();

const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    mobile:""
})

function changehande2(e){
    setFormvalue({...formvalue,[e.target.name  ]:e.target.name})
    console.log(formvalue);
}

const navigate=useNavigate();
function submithande2(e){
   e.preventDefault();
    console.log(formvalue);
    despatch(edituser(formvalue));
    navigate('/');
}

  return (
      <div className="container mt-3">
          <h2>edit user</h2>

          
          
          <form action="">
            
              <div className="mb-3 mt-3">
                  <label htmlFor="name">name:</label>
                  <input type="text" onChange={changehande2} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">email:</label>
                  <input type="email" onChange={changehande2} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">password:</label>
                  <input type="password" onChange={changehande2} value={formvalue.password} className="form-control" id="password" placeholder="Enter password" name="password" />
              </div>
              <div className="mb-3">
                  <label htmlFor="pwd">Mobile:</label>
                  <input type="number" onChange={changehande2} value={formvalue.mobile} className="form-control" id="pwd" placeholder="Enter number" name="mobile" />
              </div>
            
              <button type="submit" onClick={submithande2} className="btn btn-primary">Submit</button>
          </form>
      </div>

  )
}

export default Edituser