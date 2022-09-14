import React from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Adduser from './pages/Adduser'
import Edituser from './pages/Edituser'
import Viewuser from './pages/Viewuser'
function App() {
  return (
    <div>

      <Routes>
        
        <Route path="/" element={<Viewuser/>}/>
        <Route path="/add_user" element={<Adduser/>}/>
        <Route path="/edit_user/:id" element={<Edituser/>}/>
     </Routes>
         </div>
  )
}

export default App