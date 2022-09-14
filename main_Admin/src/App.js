import './App.css';
import Main from './Main';
import { BrowserRouter, useLocation } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
