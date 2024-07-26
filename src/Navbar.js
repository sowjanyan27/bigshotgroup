import React, { Component } from 'react';

export default class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand"style={{color:"blue"}} href="#">Bigshot</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/Login">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/images">Men</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/Women">Kurti</a></li>
                                        <li><a class="dropdown-item" href='/Women'>Jeggings</a></li>

                                        <li><a class="dropdown-item" href="/Women">Sarees</a></li>
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
                                        <img style={{ alignItems: 'center', width: '25%', marginTop: "10%" }} src="Assest/profile.png" alt="Profile" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img style={{ alignItems: 'center', width: '25%', marginTop: "10%" }} src="Assest/cart.png" alt="Cart" />
                                        {this.props.cartCount}
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
