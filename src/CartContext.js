// CartContext.js
import React, { createContext, Component } from 'react';

const CartContexts = createContext();

export class CartContext extends Component {
  state = {
    cart: [],
  };

  addToCart = (item) => {
    this.setState((prevState) => {
      const existingIndex = prevState.cart.findIndex(cartItem => cartItem.id === item.id);
      if (existingIndex !== -1) {
        const updatedCart = [...prevState.cart];
        updatedCart[existingIndex].count += 1;
        return { cart: updatedCart };
      } else {
        return { cart: [...prevState.cart, { ...item, count: 1 }] };
      }
    });
  };

  decrement = (item) => {
    this.setState((prevState) => {
      const updatedCart = prevState.cart.map(cartItem => {
        if (cartItem.id === item.id && cartItem.count > 0) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
      return { cart: updatedCart };
    });
  };

  render() {
    return (
      <CartContexts.Provider value={{ cart: this.state.cart, addToCart: this.addToCart, decrement: this.decrement }}>
        {this.props.children}
      </CartContexts.Provider>
    );
  }
}

export const withCart = (Component) => (props) => (
  <CartContexts.Consumer>
    {context => <Component {...props} cartContext={context} />}
  </CartContexts.Consumer>
);
