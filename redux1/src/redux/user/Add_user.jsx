import React,{useState} from 'react';
import shortid from 'shortid';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import { adduser } from '../actions';

function Adduser() {

const despatch=useDispatch();

const [formvalue,setFormvalue]=useState({
    name:"",
    email:"",
    password:"",
    mobile:""
})

function changehandel(e){
    setFormvalue({...formvalue,[e.target.name]:e.target.value})
    console.log(formvalue);
}

const navigate=useNavigate();
function submithandel(e){
   e.preventDefault();
   Object.assign(formvalue,{id:shortid.generate()});
    console.log(formvalue);
    despatch(adduser(formvalue));
    navigate('/');
}

  return (
      <div className="container mt-3">
          <h2>Add user form</h2>

          
          
          <form action="">
            
              <div className="mb-3 mt-3">
                  <label htmlFor="name">name:</label>
                  <input type="text" onChange={changehandel} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">email:</label>
                  <input type="email" onChange={changehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">password:</label>
                  <input type="password" onChange={changehandel} value={formvalue.password} className="form-control" id="password" placeholder="Enter password" name="password" />
              </div>
              <div className="mb-3">
                  <label htmlFor="pwd">Mobile:</label>
                  <input type="number" onChange={changehandel} value={formvalue.mobile} className="form-control" id="pwd" placeholder="Enter number" name="mobile" />
              </div>
            
              <button type="submit" onClick={submithandel} className="btn btn-primary">Submit</button>
          </form>
      </div>

  )
}

export default Adduser