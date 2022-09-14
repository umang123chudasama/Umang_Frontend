import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
function View_users() {
  const [allUsers,setAllUsers]=useState([]);

  useEffect(()=>{
    ViewUsers();
    
  },[]);

  async function  ViewUsers()
  {
    const res = await axios.get(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register.json`);
    if (res.data) {
      setAllUsers(res.data);
      ViewUsers();
    }
  }

  async function handelDelete(user_id) {
    let ans = swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user detail!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${user_id}.json`);
        
        swal("Poof! Your user detail has been deleted!", {
        icon: "success",
          
        });
        
      } else {
        swal("Your user detail is safe!");
        
      }
      
    });
  }

  function handelstatus(id)
  {
   
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${id}.json`)
    
    .then((resp)=>resp.json())
    .then((data)=>{
     if(data.status === "Block")
     {
      fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Unblock"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        ViewUsers();
      });
     }
     else{
      fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify({status:"Block"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        ViewUsers();
      });
     }
      
    });

   
  }
 
  const Navigate=useNavigate();


  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              User Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>User Key</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>email</th>
                      <th>Status</th>
                      <th>Delete</th>
                      <th>Edit</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                   {
                     Object.keys(allUsers).map((item,index)=>{
                      const {name,mobile,email,status,}=allUsers[item];  
                      return(
                        <tr key={item} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{name}</td>
                          <td>{mobile}</td>
                          <td>{email}</td>
                          <td className="center"><button onClick={()=>handelstatus(item)} className="btn btn-primary">{status}</button></td>
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>Navigate(`/View_users/${item}`)} className="btn btn-primary">Edit</button></td>
                         
                        </tr>
                      )

                     })
                   } 
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

export default View_users