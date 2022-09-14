export const adduser=(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}


export const deleteuser=(id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}

export const edituser=(id)=>{
    return{
        type:'EDIT_USER',
        payload:id
    }
}