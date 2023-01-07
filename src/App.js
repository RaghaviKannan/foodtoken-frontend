import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Fooditems from './Fooditems';
import Orders from './Orders';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fooditems' element={<Fooditems/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/user/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path='/reset-password-page' element={<Resetpassword/>}></Route>
    </Routes>
    </>
  );
}

export default App;
