import React, { Component } from 'react';
import { Lehengacholi, Saree, Kurta, dressmaterials } from './helpers/images';
import { Button } from 'react-bootstrap';

import withRouter from './helpers/Router';
class Women extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            isshown: false,
            cart: [],
            items: []
        };
    }

    componentDidMount() {

        console.log(this.props, "props")
        const category = this.props.router.params.category;
        console.log(category, "category")
        this.updateCategoryItems(category);
    }

    componentDidUpdate(prevProps) {
        // Update items if the category in props changes
        const prevCategory = prevProps.router.params.category;
        console.log(prevCategory, "prevCategory")
        const currentCategory = this.props.router.params.category;
        console.log(currentCategory, "currentCategory")
        if (currentCategory !== prevCategory) {
            this.updateCategoryItems(currentCategory);
        }
    }

    updateCategoryItems = (category) => {
        let items = [];

        switch (category) {
            case 'Kurta':
                items = Kurta.items || [];
                break;
            case 'Sarees':
                items = Saree.items || [];
                break;
            case 'Lehengacholi':
                items = Lehengacholi.items || [];
                break;
            case 'DressMaterial':
                items = dressmaterials.items || [];
                break;
            default:
                items = [];
                break;
        }

        this.setState({ items });
    }

    handleClick = (item) => {
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

    handleAddToCart = (item) => {
        const { cart } = this.state;

        const existingIndexcart = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingIndexcart !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingIndexcart].count += 1;
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
        const { selectedItem, isshown, cart, items } = this.state;

        return (
            <div>

                <div>
                    <div className="women-container">
                        <h2>{this.props.router.params.category}</h2>
                        {/* <img
                            src='/Assest/kurta.png'
                            alt=''
                        /> */}
                
                        <div className="women-gallery">
                        {items && items.length > 0 ? (
                            items.map((item) => (
                                <div key={item.id} className="women-item">
                                    <img 
                                        src={item.image}
                                        alt={`Item ${item.id}`}
                                        onClick={() => this.handleClick(item)}
                                    />
                                    <div>
                                        <Button onClick={() => this.decrement(item)}>-</Button>
                                        <span>{cart.find(cartItem => cartItem.id === item.id)?.count || 0}</span>
                                        <Button onClick={() => this.handleAddToCart(item)}>Add to Cart</Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items available</p>
                        )}
                    </div>
                    </div>
                </div>


                {/* {isshown && (
            <div className="item-details">
                <img src={selectedItem.image} alt={`Selected ${selectedItem.id}`} />
                <p>Description: {selectedItem.description}</p>
                <p>Color: {selectedItem.color}</p>
                {selectedItem.size && <p>Size: {selectedItem.size}</p>}
                <button onClick={this.handleCloseDetails}>Close</button>
            </div>
        )} */}
            </div>

        );
    }
}
export default withRouter(Women)


