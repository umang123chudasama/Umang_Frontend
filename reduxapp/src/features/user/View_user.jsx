import { NavLink } from 'react-router-dom'
import React,{ useEffect } from 'react'
import { } from './userSlice'

import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'




function View_user() {

    const users=useSelector(state=> state.users);
    
    useEffect(()=>{ 
        const fetchdata = async () =>{
            const res = await axios.get(`http://localhost:8000/api/student`);
            console.log(res);
          }
          fetchdata();
    },[]);


    return (
        <div className='container mt-5'>
            <NavLink to="/add_user" className='btn btn-primary'>Add User</NavLink>
            <h1 className='text-center'>Manage user</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                {/*
                   users.map((item,index)=>{
                       
                        return(
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                            <td><button className='btn btn-primary'>Edit</button></td>
                        </tr>
                        );
                    })
                    */
                    
                }    
                   
                  
                </tbody>
            </table>


        </div>
    )
}

export default View_user

