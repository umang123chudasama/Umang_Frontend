import React, { useState, useEffect} from 'react'

import { useParams, useNavigate  } from 'react-router-dom';
function Edit_users() {
   
    const [formvalue,setFormvalue]=useState({
        "name":"",
        "email":"",
        "mobile":""
    });

   const { id }=useParams();
   useEffect(()=>{
    fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${id}.json`)
    .then((resp)=>resp.json())
    .then((data)=>{
        if(data)
        {
            setFormvalue(data);
            console.log(formvalue);
        }
    })
   },[])
   
    
    function changehandel(e)
    {
        const {name,value}=e.target;
        setFormvalue({...formvalue,[name]:value})
        console.log(formvalue);
    }

    const navigate=useNavigate();
   
    function updatehandel(){
        fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Register/${id}.json`, {
        method: 'PATCH',
        body: JSON.stringify(formvalue),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) =>{
        if(data)
        {
           navigate('/view_users'); // for redirect 
        }
      });
  
    }

  return (
    <div>
        <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Edit Users Data</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Edit Contact
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required name="name" value={formvalue.name} onChange={changehandel}/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required name="email" value={formvalue.email} onChange={changehandel}/>
              </div>
           
              <div className="form-group">
              <label>Mobile no</label>
                <input type="number" className="form-control" required name="mobile" value={formvalue.mobile} onChange={changehandel}/>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' onClick={updatehandel}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Edit_users