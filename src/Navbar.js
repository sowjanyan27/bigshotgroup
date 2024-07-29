import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withRouter from './helpers/Router';
 class Navbar extends Component {
    handleCategoryChange = (category) => {
        const { onCategoryChange } = this.props;
        const {router}=this.props;
        router.navigate(`/women/${category}`)
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    }


    render() {
        const { cartCount } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand"style={{color:"blue"}} href="#">Bigshot</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                                <li className="nav-item">
                                    <a className="nav-link dropdown" aria-current="page" href="/Login">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to="/Men">Shirts</NavLink></li>
                                        <li><NavLink className="dropdown-item" to='/Men'>Pants</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Men">Winterwear & Hoodles</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Men">Jeans</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/Men">T-shits</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </a>
                                    <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/women/Kurta" onClick={() => this.handleCategoryChange('Kurta')}>Kurta</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/women/Leggings" onClick={() => this.handleCategoryChange('Leggings')}>Leggings</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/women/Dressmaterial" onClick={() => this.handleCategoryChange('DressMaterial')}>Dress Material</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/women/Sarees" onClick={() => this.handleCategoryChange('Sarees')}>Sarees</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/women/Lehengacholi" onClick={() => this.handleCategoryChange('Lehengacholi')}>Lehengacholi</NavLink></li>
                                
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kids</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img style={{ alignItems: 'center', width: '25%', marginTop: "10%" }} src="/Assest/profile.png" alt="Profile" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img style={{ alignItems: 'center', width: '20%', marginTop: "10%" }} src="/Assest/cart.png" alt="Cart" />
                                        {cartCount}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default withRouter(Navbar)
