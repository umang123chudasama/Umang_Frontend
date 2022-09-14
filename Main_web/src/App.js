import logo from './logo.svg';
import './App.css';
import Main from './Main';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'


function App() {
  return (

    <BrowserRouter>
    <Provider store={ store }>
      <Main/>
      </Provider>
    </BrowserRouter>
    
  );
}

export default App;
