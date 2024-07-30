import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import Home from './Home';
import Registerscreen from './Registerscreen';
import ForgotPasswords from './ForgotPasswords';
import Login from './Login';
import Logo from './Logo';
import Otpgeneration from './Otpgeneration';
import Passwordchange from './Passwordchange';
import Sidebar from './Sidebar';
import Women from './Women';
import Layout from './helpers/Layout';
import {CartContext} from'./CartContext'


function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Layout>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Registerscreen' element={<Registerscreen />} />
            <Route path='/ForgotPasswords' element={<ForgotPasswords />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Logo' element={<Logo />} />
            <Route path='/Otpgeneration' element={<Otpgeneration />} />
            <Route path='/Passwordchange' element={<Passwordchange />} />
            <Route path='/Sidebar' element={<Sidebar />} />
            <Route path='/Women' element={<Women />} />
            <Route path="/Women/:category" element={<Women />} />
          </Routes>
        </Layout>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;    
            
            
