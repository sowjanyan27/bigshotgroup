import React, { Component } from 'react';
import { Gents, Kurta } from './helpers/images'; // Ensure images have correct exports
import Navbar from './Navbar';
import Sidebar from './Sidebar'; // Commented out in your code
import { Button } from 'react-bootstrap';


export default class Login extends Component {
  constructor(props) {
    super(props);

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
    const container = document.querySelector('.collection-container');
    if (!container) {
      console.error('Collection container not found');
      return;
    }

    const scrollAmount = direction === 'prev' ? -300 : 300; // Adjust this value as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  render() {
    return (
      <div className="login-container">
        <div className="main-content">
          <Navbar />
          {/* <Sidebar /> Uncomment if you want to use Sidebar */}



          <h2 style={{ textAlign: "center" }}>{Gents.title}</h2>
          <div className="collection-container">


            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer',maxWidth: '100%' }}
              onClick={() => this.scroll('prev')}
            />

            <div className="mensImages">
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
            <img src='/Assest/images/next.png'
             style={{ cursor: 'pointer',maxWidth: '100%' }}
              alt="next"
              onClick={() => this.scroll('next')}
            />
            {/* <div>
              <div className='bannerBox' style={{ margin: '10px', padding: '5px', backgroundColor: '#f0f0f0' }}>
                <img src='Assest/mens.avif' alt='banner' />
              </div>
            </div> */}
            <div>

            <h2>{Kurta.title}</h2>
            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer',maxWidth: '100%' }}
              onClick={() => this.scroll('prev')}
            />
            <div className="womenImages">
              {Kurta.items.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  onClick={() => this.handleClick(item.title)}
                />
              ))}
            </div>
            <img src='/Assest/images/next.png'
              alt="next"
              style={{ cursor: 'pointer',maxWidth: '100%' }}
              onClick={() => this.scroll('next')}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
