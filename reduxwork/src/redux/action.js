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