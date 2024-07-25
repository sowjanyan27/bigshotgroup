
import Home from './Home'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Registerscreen from './Registerscreen';
import ForgotPasswords from './ForgotPasswords';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './Logo';
import Login from './Login';
import Otpgeneration from './Otpgeneration';
import Passwordchange from './Passwordchange';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <ToastContainer/>
     
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Registerscreen' exact element={<Registerscreen/>}/>
        <Route path='/ForgotPasswords' exact element={<ForgotPasswords/>}/>
        <Route path='/Login' exact element={<Login/>}/>
        <Route path='/Logo' exact element={<Logo/>}/>
        <Route path='/Otpgeneration' exact element ={<Otpgeneration/>}/>
        <Route path='/Passwordchange' exact element ={<Passwordchange/>}/>
        <Route path='/Navbar' exact element={<Navbar/>}/>
        <Route path='/Sidebar' exact element={<Sidebar/>}/>
      
      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
