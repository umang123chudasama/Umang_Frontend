import { Link,BrowserRouter, Routes,Route} from 'react-router-dom'
import Add_user from './redux/user/Add_user';
import View_user from './redux/user/View_user';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<View_user/>} />
        <Route path='/add_user' element={<Add_user/>} />
        <Route path='/view_user' element={<View_user/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
