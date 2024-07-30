
import React, { Component } from 'react';
import Navbar from './Navbar';
import Women from './Women';


export default class Cartcount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [], // Array to store selected items
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

    render() {
        const { cart } = this.props;
        console.log(cart,"cartCount")

        return (
            <div>
                <Navbar cartCount={cart.length} />
                <Women
                    cart={cart}
                    handleAddToCart={this.handleAddToCart}
                    decrement={this.decrement}
                />
               
            </div>
        );
    }
}
