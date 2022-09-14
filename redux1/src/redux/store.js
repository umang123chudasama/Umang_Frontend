import { createStore, combineReducers } from 'redux'
import userReducer  from './user/action/userReducer'



const mainReducer=combineReducers({
    user:userReducer,
  
});

const allState={
    user:{
        items:[
            {
                id:"",name:"hello",email:"hello@",password:"",mobile:"5626552228"
            },
        ]
    },
   
}


const store=createStore(mainReducer,allState);

export default store;