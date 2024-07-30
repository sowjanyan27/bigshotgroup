import React, { Component } from 'react';
import { loginGents, loginWomens } from './helpers/images'; // Ensure images have correct exports
import withRouter from './helpers/Router';


class Login extends Component {
  constructor(props) {
    super(props);
    this.gentsImagesRef = React.createRef(); // Reference for Gents images container
    this.womensImagesRef = React.createRef(); // Reference for Womens images container
    this.state = {
      searchQuery: "",
      
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  handleClick = (item, flag) => {
    console.log(`Clicked on image with title: ${item}, flag: ${flag}`);
    if (flag === 2) {
      const { router } = this.props;
      router.navigate('/Women');
    }
  };

  scroll = (direction, section) => {
    const container = section === 'gents' ? this.gentsImagesRef.current : this.womensImagesRef.current;
    if (!container) {
      console.error('Collection container not found');
      return;
    }

    const item = container.querySelector('.gents-item') || container.querySelector('.kurta-item');
    if (!item) {
      console.error('Item not found');
      return;
    }

    const itemWidth = item.clientWidth;
    const scrollAmount = direction === 'prev' ? -itemWidth : itemWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  render() {
    return (
      <div className="login-container">
        <div className="main-content">
        
          
          <h2 style={{ textAlign: "center" }}>{loginGents.title}</h2>
          <div className="collection-container">
            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('prev', 'gents')}
            />

            <div className="mensImages" ref={this.gentsImagesRef}>
              {loginGents.items.map((item) => (
                <div key={item.id} className="gents-item">
                  <img
                    src={item.image}
                    alt={`Gent ${item.id}`}
                    onClick={() => this.handleClick(item.id, 1)}
                  />
                </div>
              ))}
            </div>

            <img
              src='/Assest/images/next.png'
              alt="next"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('next', 'gents')}
            />
          </div>

          <h2 style={{ textAlign: "center" }}>{loginWomens.title}</h2>
          <div className="collection-container">
            <img
              src='/Assest/images/prev.png'
              alt="prev"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('prev', 'womens')}
            />

            <div className="womenImages" ref={this.womensImagesRef}>
              {loginWomens.items.map((item) => (
                <div key={item.id} className="kurta-item">
                  <img
                    src={item.image}
                    alt={`Kurta ${item.id}`}
                    onClick={() => this.handleClick(item.id, 2)}
                  />
                </div>
              ))}
            </div>

            <img
              src='/Assest/images/next.png'
              alt="next"
              style={{ cursor: 'pointer', maxWidth: '100%' }}
              onClick={() => this.scroll('next', 'womens')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
