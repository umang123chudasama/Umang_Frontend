import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import swal from 'sweetalert';
import axios from 'axios';

function View_contact() {

  const [allContact,setAllContact]=useState([]);
  
  useEffect(()=>{
    Viewcontact()
    
  },[]);

  async function Viewcontact() {
    const res = await axios.get(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Contact.json`)
   if(res.data){
    setAllContact(res.data);
   }
  else{
    alert("error")
  }

   
  }
 

  const Navigate=useNavigate();

  async function handelDelete(id) {
    let ans = swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact detail!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Contact/${id}.json`);
        
        swal("Poof! Your contact detail has been deleted!", {
        icon: "success",
          
        });
        
      } else {
        swal("Your contact detail is safe!");
        
      }
      
    });
    
    }
  return (
<div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">View Contact</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Contact Data
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>Contact Key</th>
                      <th>Email</th>
                      <th>Masg</th>
                      <th>Name</th>
                      <th>Delete</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                     Object.keys(allContact).map((item,index)=>{
                      const {name,email,message,}=allContact[item];  
                      return(
                        <tr key={index} className="odd gradeX">
                          <td>{index+1}</td>
                          <td>{name}</td>
                          <td>{message}</td>
                          <td>{email}</td>
                          
                          <td className="center"><button onClick={()=>handelDelete(item)} className="btn btn-danger">Delete</button></td>
                          <td className="center"><button onClick={()=>Navigate(`/view_contact/${item}`)} className="btn btn-primary">Edit</button></td>
                         
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

export default View_contact