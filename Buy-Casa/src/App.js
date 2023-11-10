import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Buypage from './Components/Buypage';
import Rentpage from './Components/Rentpage';
import ForgetPassword from './Components/ForgetPassword';
import FilterPage from './Components/FilterPage';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUpPage from './Components/SignUp';
import NavBar from './Components/NavBar';
import BottomBar from './Components/BottomBar';
import FinalBuy1 from './Components/FinalBuy1';
import Dashboard from './Components/Dashboard';
import FinalRent1 from './Components/FinalRent1';
import Account from './Components/Account';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/SignUp" element={<SignUpPage/>}></Route>
    <Route path="/ForgetPassword" element={<ForgetPassword/>}></Route>
    <Route path="/Rentpage" element={<Rentpage/>}></Route>
    <Route path="/Buypage" element={<Buypage/>}></Route>
    <Route path="/FilterPage" element={<FilterPage/>}></Route>
    <Route path='/NavBar' element={<NavBar/>}></Route>
    <Route path='/BottomBar' element={<BottomBar/>}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/FinalBuy1' element={<FinalBuy1/>}></Route>
    <Route path='/FinalRent1' element={<FinalRent1/>}></Route>
    <Route path='/Account' element={<Account/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;