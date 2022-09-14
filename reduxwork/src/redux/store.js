import { createStore, combineReducers } from 'react'
import userReducer  from './user/action/userReducer'


const mainReducer=combineReducers({
    user:userReducer,
  
});

const allState={
    user:{
        items:[
            {
                id:"1.",name:"work",email:"work@",password:"",mobile:"6351195241"
            },
        ]
    }, 
}


const store=createStore(mainReducer,allState);

export default store;