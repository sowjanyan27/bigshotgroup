import React, { Component } from 'react'
import { Gents, Womens ,Saree} from './helpers/images';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
;export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchQuery:""
    }
  }
 
  handleSearchChange=(e)=>{
this.setState({
  searchQuery:e.target.value
})
  }
  handleClick = (image) => {
  
    console.log(`Clicked on image with title: ${image}`);
 
  }
  render() {
    
    return (
      <div className='login-container'>
      
      <div className="main-content">
       <Navbar />
       {/* <Sidebar/> */}
       <h2 style={{display:"center"}}>{Gents.title}</h2>
          <div className='collection-container'>
       
          
      
        <div className='mensImages'>
          <img src={Gents.image1}alt={Gents.image1} onClick={() => this.handleClick(Gents.image1)}/>
          <img src={Gents.image2}alt={Gents.image2}onClick={() => this.handleClick(Gents.image2)}/>
          <img src={Gents.image3}alt={Gents.image3}onClick={() => this.handleClick(Gents.image3)}/>
          <img src={Gents.image4}alt={Gents.image4}onClick={() => this.handleClick(Gents.image1)}/>
          <img src={Gents.image5}alt={Gents.image5}onClick={() => this.handleClick(Gents.image1)}/>
        
        </div>
        <div>
          
          <div className='bannerBox' style={{ margin: '10px', padding: '5px', backgroundColor: '#f0f0f0' }}>
  <img src='Assest/mens.avif' alt='banner' />
</div>

        </div>
        <h2>{Womens.title}</h2>
        <div className='womenImages'>
          <img src={Womens.image} alt={Womens.image}onClick={() => this.handleClick(Womens.title)}/>
          {/* <img src={Womens.image2} alt={Women.image2}onClick={() => this.handleClick(Women.title)}/>
          <img src={Womens.image3} alt={Women.image3}onClick={() => this.handleClick(Women.title)}/>
          <img src={Womens.image5} alt={Women.image5}onClick={() => this.handleClick(Women.title)}/>
          <img src={Womens.image6} alt={Women.image6}onClick={() => this.handleClick(Women.title)}/>
         */}
        </div>
        </div>
         
        </div>
      </div>
      
    
    )
  }
}
