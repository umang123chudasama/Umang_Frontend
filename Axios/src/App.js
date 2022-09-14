import React,{createContext,useState} from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import './App.css';
import Main from './Main';


export const Logincontext=createContext()


function App() {

  const [isLogin,SetisLogin]=useState(false);

  return (
    
      <Logincontext.Provider value={{isLogin,SetisLogin}}>
      <BrowserRouter>
		    <Main/>
      </BrowserRouter>
    </Logincontext.Provider>
    
  );
}

export default App;
