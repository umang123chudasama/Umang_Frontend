import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { Logincontext } from '../App';
export default function Private_Route({children}) {

   //const {isLogin}=useContext(Logincontext);

    if(localStorage.getItem('auth_token'))
    {
        return children;
    }
    else
    {
        return <Navigate to="/" />
    }
}