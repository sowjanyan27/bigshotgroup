import React, { Component } from 'react';
import { Lehengacholi, Saree, Kurta, dressmaterials } from './helpers/images';
import { Button } from 'react-bootstrap';
import { withCart } from './CartContext';
import withRouter from './helpers/Router';
class Women extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            isshown: false,
          
            items: [],
            hoverItemId: null
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
        if (!category || category === 'Women') {
            // Combine items from all categories if no specific category is provided
            items = [
                ...(Kurta.items || []),
                ...(Saree.items || []),
                ...(Lehengacholi.items || []),
                ...(dressmaterials.items || [])
            ];
        } else {
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
                case 'Dressmaterial':
                    items = dressmaterials.items || [];
                    break;
                default:
                    items = [];
                    break;
            }
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
        this.props.cartContext.addToCart(item);

    }

    handleMouseEnter = (itemId) => {
        this.setState({ hoverItemId: itemId });
    }
    handleMouseLeave = () => {
        this.setState({ hoverItemId: null });
    }

    render() {
        const { selectedItem, isshown,  items, hoverItemId } = this.state;

        return (
            <div>

               
                    <div className="women-container">
                        <h2>{this.props.router.params.category || 'All Women\'s Items'}</h2>
                        {!isshown && (
                            <div className="women-gallery">
                                {items && items.length > 0 ? (
                                    items.map((item) => (
                                        <div key={item.id} className="women-item"
                                            onMouseEnter={() => this.handleMouseEnter(item.id)}
                                            onMouseLeave={this.handleMouseLeave}>
                                            <img
                                                src={item.image}
                                                alt={`Item ${item.id}`}
                                                onClick={() => this.handleClick(item)}
                                            />
                                            {hoverItemId === item.id && (
                                                <div className="item-details-hover">
                                                    <p>Description: {item.description}</p>
                                                    <p>Color: {item.color}</p>
                                                    {item.size && <p>Size: {item.size}</p>}
                                                    <Button onClick={() => this.handleAddToCart(item)}>Add to Cart</Button>
                                                </div>
                                            )}
                                            {/* <div>
                                                <Button onClick={() => this.decrement(item)}>-</Button>
                                                 <span>{cart.find(cartItem => cartItem.id === item.id)?.count || 0}</span>
                                                <Button onClick={() => this.handleAddToCart(item)}>Add to Cart</Button>
                                            </div> */}
                                        </div>
                                    ))
                                ) : (
                                    <p>No items available</p>
                                )}
                            </div>
                        )}
                    </div>
           


                {isshown && (
                    <div className="item-details">
                        <img src={selectedItem.image} alt={`Selected ${selectedItem.id}`} />
                        <p>Description: {selectedItem.description}</p>
                        <p>Color: {selectedItem.color}</p>
                        {selectedItem.size && <p>Size: {selectedItem.size}</p>}
                        <Button onClick={() => this.handleAddToCart(selectedItem)}>Add to Cart</Button>
                        <button onClick={this.handleCloseDetails}>Close</button>
                    </div>
                )}
            </div>

        );
    }
}
export default withRouter(withCart(Women));



