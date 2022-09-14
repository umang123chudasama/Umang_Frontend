import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import View_user from './features/user/View_user';
import Add_user from './features/user/Add_user';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<View_user />}/>
        <Route index element={<View_user />} />
        <Route path="add_user" element={<Add_user />}/>
    </Routes>
    </BrowserRouter>    
  );
}

export default App;
