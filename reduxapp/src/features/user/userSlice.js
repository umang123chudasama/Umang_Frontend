import { createSlice } from '@reduxjs/toolkit'


const initialState ={
  users:[],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
    addUser: (state,action)=>{
      console.log(action);
    }

  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions
export default userSlice.reducer