import { BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import Add_user from './redux/user/Add_user'
import View_user from './redux/user/View_user'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View_user/>} />
        <Route path='/add_user' element={<Add_user/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
