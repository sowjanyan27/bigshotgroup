import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Registerscreen from './Registerscreen';
import ForgotPasswords from './ForgotPasswords';
import Login from './Login';
import Logo from './Logo';
import Otpgeneration from './Otpgeneration';
import Passwordchange from './Passwordchange';
import Sidebar from './Sidebar';
import Women from './Women';
import Layout from './helpers/Layout'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            selectedCategory: 'All',
            isLoggedIn: false,
        };
    }

    handleAddToCart = (item) => {
        const { cart } = this.state;
        const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingIndex].count += 1;
            this.setState({ cart: updatedCart });
        } else {
            const updatedCart = [...cart, { ...item, count: 1 }];
            this.setState({ cart: updatedCart });
        }
    }

    decrement = (item) => {
        const { cart } = this.state;
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === item.id && cartItem.count > 0) {
                return { ...cartItem, count: cartItem.count - 1 };
            }
            return cartItem;
        });
        this.setState({ cart: updatedCart });
    }

    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
        console.log(this.state.selectedCategory,'selected category from swagini')
    }

    render() {
        const { cart, selectedCategory, isLoggedIn } = this.state;

        return (
            <BrowserRouter>
            <Layout>
               {/* <Navbar cartCount={cart.length} onCategoryChange={this.handleCategoryChange()} /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Registerscreen' element={<Registerscreen />} />
                    <Route path='/ForgotPasswords' element={<ForgotPasswords />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Logo' element={<Logo />} />
                    <Route path='/Otpgeneration' element={<Otpgeneration />} />
                    <Route path='/Passwordchange' element={<Passwordchange />} />
                    <Route path='/Sidebar' element={<Sidebar />} />
                    <Route
          path="/Women/:category"
          element={
           <Women
              cart={cart}
              handleAddToCart={this.handleAddToCart}
              decrement={this.decrement}
              selectedCategory={selectedCategory}
            
              />
         
          }
        />
                </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}
