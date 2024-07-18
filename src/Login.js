import React, { Component } from 'react'
import { Gents, Women } from './helpers/images';
export default class Login extends Component {
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
  render() {
   
    return (
      <div>
       <div className="form-group">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
          />
          <div className='collectioncontainer'>
        <div>
          <h2>{Gents.title}</h2>
        </div>
        <div className='mensImages'>
          <img src={Gents.image1}alt={Gents.image1}/>
          <img src={Gents.image2}alt={Gents.image2}/>
          <img src={Gents.image3}alt={Gents.image3}/>
          <img src={Gents.image4}alt={Gents.image4}/>
          <img src={Gents.image5}alt={Gents.image5}/>
        
        </div>
        <div>
          <h2>{Women.title}</h2>
          <div className='bannerBox'>
          <img src='Assest/mens.avif' alt='banner'/>
          </div>
        </div>
        <div className='womenImages'>
          <img src={Women.image1} alt={Women.image1}/>
          <img src={Women.image2} alt={Women.image2}/>
          <img src={Women.image3} alt={Women.image3}/>
          <img src={Women.image5} alt={Women.image5}/>
          <img src={Women.image6} alt={Women.image6}/>
        
        </div>
      </div>
         
        </div>
      </div>
    )
  }
}
