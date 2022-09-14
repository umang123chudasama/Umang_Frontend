import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,useParams} from 'react-router-dom';
import { addUser, getSingleUser, updateUser } from '../redux/actions';

function Edituser() {

    let dispatch= useDispatch();
    const navigate = useNavigate();


const [formvalue, setformvalue] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""  
})
    
const [error, seterror] = useState("") 
let {id}= useParams();
const {user} = useSelector(state=>state.data);

 function changehandle(e){
    setformvalue({...formvalue,[e.target.name]:e.target.value});
    console.log(formvalue);
 }  

 function submithandle(e){
    e.preventDefault();
    if(!formvalue.name || !formvalue.username || !formvalue.email || !formvalue.phone || !formvalue.website ){
        seterror("Please Input All The Data")
    }else{
        dispatch(updateUser(formvalue, id));
        navigate("/");
        seterror("");
    }
 }

 useEffect(() => {
   dispatch(getSingleUser(id));
 }, []);

 useEffect(() => {
   if(user){
    setformvalue({...user});
   }
 }, [user])
 
 
  return (
      <div className="container mt-5">
          <h2>Edit user form <Link to="/" className='btn btn-primary float-end'>Go Back</Link></h2>
            
          <form action="post" onSubmit={submithandle}>
          {
            error && <h5 align="center" className='text-danger'>{error}</h5>
          }  
          <div className="mb-3 mt-3">
                  <label htmlFor="name">Name:</label>
                  <input type="text"className="form-control" value={formvalue.name || ""} onChange={changehandle} id="name" placeholder="Enter name" name="name" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">Username:</label>
                  <input type="text"  className="form-control" value={formvalue.username || ""} onChange={changehandle} id="username" placeholder="Enter username" name="username" />
              </div>
              <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" value={formvalue.email || "" } onChange={changehandle} id="email" placeholder="Enter email" name="email" />
              </div>
           
              <div className="mb-3">
                  <label htmlFor="pwd">Phone:</label>
                  <input type="number"  className="form-control" value={formvalue.phone || ""} onChange={changehandle} id="phone" placeholder="Enter phone" name="phone" />
              </div>
              <div className="mb-3">
                  <label htmlFor="pwd">Website:</label>
                  <input type="text"  className="form-control" value={formvalue.website || ""} onChange={changehandle} id="website" placeholder="Enter website" name="website" />
              </div>
              <button type="submit" onClick={submithandle} className="btn btn-primary">Update</button>
          </form>
      </div>

  )
}

export default Edituser