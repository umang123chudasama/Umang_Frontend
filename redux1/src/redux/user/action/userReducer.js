const userReducer=(state='',action)=>{
    
    switch(action.type){
        case "ADD_USER":
        return{
            ...state,
            items:[...state.items,action.payload]
        }


        case "DELETE_USER":
            return{
                ...state,
                items:state.items.filter((user)=>user.id != action.payload)
            }
            
            case "EDIT_USER":
                return{
                    ...state,
                    items:[...state.items,action.payload]
                }    

        default:
            return state;
    }

}

export default userReducer;