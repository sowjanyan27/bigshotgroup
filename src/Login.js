import React, { Component } from 'react';
import { Gents, Kurta } from './helpers/images'; // Ensure images have correct exports
import Navbar from './Navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.mensImagesRef = React.createRef(); // Reference for mensImages container
    this.state = {
      searchQuery: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleClick = (title) => {
    console.log(`Clicked on image with title: ${title}`);
  };

  scroll = (direction) => {
    const container = this.mensImagesRef.current;
    if (!container) {
      console.error('Collection container not found');
      return;
    }

    const itemWidth = container.querySelector('.gents-item').clientWidth;
    const scrollAmount = direction === 'prev' ? -itemWidth : itemWidth;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  render() {
    return (
      <div className="login-container">
        <div className="main-content">
          {/* <Navbar /> */}
          <h2 style={{ textAlign: "center" }}>{Gents.title}</h2>
          <div className="collection-container">
            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('prev')}
            />

            <div className="mensImages" ref={this.mensImagesRef}>
              {Gents.map((item) => (
                <div key={item.id} className="gents-item">
                  <img
                    src={item.image}
                    alt={`Gent ${item.id}`}
                    onClick={() => this.handleClick(item.title)}
                  />
                </div>
              ))}
            </div>

            <img
              src='/Assest/images/next.png'
              alt="next"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('next')}
            />
          </div>
          <h2 style={{ textAlign: "center" }}>{Kurta.title}</h2>
          <div className="collection-container">
            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('prev')}
            />

            <div className="womenImages" ref={this.mensImagesRef}>
              {Kurta.items.map((item) => (
                <div key={item.id} className="gents-item">
                  <img
                    src={item.image}
                    alt={`kurta ${item.id}`}
                    onClick={() => this.handleClick(item.title)}
                  />
                </div>
              ))}
            </div>

            <img
              src='/Assest/images/next.png'
              alt="next"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('next')}
            />
          </div>
        </div>
      </div>
    );
  }
}
