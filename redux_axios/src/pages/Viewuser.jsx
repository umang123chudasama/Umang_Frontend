import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser, loadUsers } from '../redux/actions';


const Viewuser = () => {

  const navigate= useNavigate();
  let dispatch= useDispatch();
  const {users}= useSelector(state=> state.data);

  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  
  const handledelete= (id)=>{
    if(window.confirm("Are You Sure Wanted to Delete the User?")){
      dispatch(deleteUser(id));
    }
  }
  return (
      <div className="container mt-4">
          <h2>View User</h2>
         <Link to="/add_user" className='btn btn-primary float-end'>Add User</Link>
          <table className="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Website</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {
                   users && users.map((item,index)=>(
                    <tr key={item.id}>
                      <th>{index+1}</th>
                      <th>{item.name}</th>
                      <th>{item.username}</th>
                      <th>{item.email}</th>
                      <th>{item.phone}</th>
                      <th>{item.website}</th>
                      <th>
                        <button className='btn btn-danger m-1' onClick={()=> handledelete(item.id)} >Delete</button>
                        <button className='btn btn-primary m-1' onClick={()=>navigate(`/edit_user/${item.id}`)}>Edit</button>
                      </th>
                  </tr>
                    ))
                }
              </tbody>
          </table>
      </div>

    )
}

export default Viewuser