import React, { Component } from 'react';
import { Womens, Saree } from './helpers/images';
import { Button } from 'react-bootstrap';

export default class Women extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            isshown: false,
            cart: [], // Array to store selected items
        };
    }

    handleClick = (item) => {
        console.log('selectedItem', item);
        this.setState({
            selectedItem: item,
            isshown: true
        });
    }

    handleCloseDetails = () => {
        this.setState({
            selectedItem: null,
            isshown: false
        });
    }

 handleAddToCart=(item)=>{
    const {cart}=this.state;
    
     const existingIndexcart = cart.findIndex(cartItem => cartItem.id === item.id);
     if(existingIndexcart !== -1){
         const updatedCart = [...cart]
         console.log(updatedCart,"updatedCart")
       
         updatedCart[existingIndexcart].count += 1;
         this.setState({ cart: updatedCart });
     }
     else{
        const updatedCart =[...cart,{...item,count :1}]
        console.log(updatedCart,"updatedCart")
        this.setState({ cart: updatedCart });
     }

 }

    // increment = (item) => {
    //     const { cart } = this.state;
    //     const updatedCart = cart.map(cartItem => {
    //         if (cartItem.id === item.id) {
    //             return { ...cartItem, count: cartItem.count + 1 };
    //         }
    //         return cartItem;
    //     });
    //     this.setState({ cart: updatedCart });
    // }

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
        const { selectedItem, isshown, cart } = this.state;

        return (
            <div>
                {!isshown && (
                    <div>
                        <div className="women-container">
                            <h2>{Womens.title}</h2>
                            <div className="women-gallery">
                                {Womens.items.map((womenobj) => (
                                    <div key={womenobj.id} className="women-item">
                                        <img
                                            src={womenobj.image}
                                            alt={`Women ${womenobj.id}`}
                                            onClick={() => this.handleClick(womenobj)}
                                        />
                                        <div>
                                            <Button onClick={() => this.decrement(womenobj)}>-</Button>
                                            <span>{cart.find(item => item.id === womenobj.id)?.count || 0}</span>
                                            {/* <Button onClick={() => this.increment(womenobj)}>+</Button> */}
                                            <Button onClick={() => this.handleAddToCart(womenobj)}>Add to Cart</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="women-container">
                            <h2>{Saree.title}</h2>
                            <div className="women-gallery">
                                {Saree.items.map((sobj) => (
                                    <div key={sobj.id} className="women-item">
                                        <img
                                            src={sobj.image}
                                            alt={`Saree ${sobj.id}`}
                                            onClick={() => this.handleClick(sobj)}
                                        />
                                        <div>
                                            <Button onClick={() => this.decrement(sobj)}>-</Button>
                                            <span>{cart.find(item => item.id === sobj.id)?.count || 0}</span>
                                            {/* <Button onClick={() => this.increment(sobj)}>+</Button> */}
                                            <Button onClick={() => this.handleAddToCart(sobj)}>Add to Cart</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {isshown && (
                    <div className="item-details">
                        <img src={selectedItem.image} alt={`Selected ${selectedItem.id}`} />
                        <p>Description: {selectedItem.description}</p>
                        <p>Color: {selectedItem.color}</p> {/* Display color here */}
                        <p>Size: {selectedItem.size}</p>

                        <button onClick={this.handleCloseDetails}>Close</button>
                    </div>
                )}

                {/* <div>
                    <h3>Cart:</h3>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - Quantity: {item.count}
                            </li>
                        ))}
                    </ul>
                </div> */}
            </div>
        );
    }
}
