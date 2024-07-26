import React, { Component } from 'react'
import { Gents, Women ,Saree} from './helpers/images';
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
          <Sidebar/>
       <h2 style={{display:"center"}}>{Gents.title}</h2>
          <div className='collection-container'>



            <div className='mensImages'>
              <img src={Gents.banner1} alt={Gents.banner1} onClick={() => this.handleClick(Gents.banner1)} />
              {/* <img src={Gents.image2}alt={Gents.image2}onClick={() => this.handleClick(Gents.image2)}/>
          <img src={Gents.image3}alt={Gents.image3}onClick={() => this.handleClick(Gents.image3)}/>
          <img src={Gents.image4}alt={Gents.image4}onClick={() => this.handleClick(Gents.image1)}/>
          <img src={Gents.image5}alt={Gents.image5}onClick={() => this.handleClick(Gents.image1)}/> */}
            </div >
            <div className='shop1'>
              <img className='imagecls' src={Gents.kurta} alt={Gents.kurta} />
              <img className='imagecls' src={Gents.kurta2} alt={Gents.kurta2} onClick={() => this.handleClick(Gents.kurta2)} />
              <img className='imagecls' src={Gents.kurta3} alt={Gents.kurta3} onClick={() => this.handleClick(Gents.kurta3)} />
              <img className='imagecls' src={Gents.kurta2} alt={Gents.kurta2} onClick={() => this.handleClick(Gents.kurta2)} />
              <img className='imagecls' src={Gents.kurta3} alt={Gents.kurta3} onClick={() => this.handleClick(Gents.kurta3)} />
            </div>

            <div className='shop1'>
              <img className='mediumimagecls' src={Gents.c1} alt={Gents.c1} onClick={() => this.handleClick(Gents.kurta4)} />
              <img className='mediumimagecls' src={Gents.c2} alt={Gents.c2} onClick={() => this.handleClick(Gents.kurta4)} />
              <img className='mediumimagecls' src={Gents.c3} alt={Gents.c3} onClick={() => this.handleClick(Gents.kurta4)} />
              {/* <img src={Gents.c4} alt={Gents.c4} onClick={() => this.handleClick(Gents.kurta4)} /> */}

            </div>
            <div>

              <div className='bannerBox' style={{ margin: '10px', padding: '5px', backgroundColor: '#f0f0f0' }}>
                <img src='Assest/mens.avif' alt='banner' />
              </div>

            </div>
            <h2>{Women.title}</h2>
            <div className='womenImages'>
              <img src={Women.image1} alt={Women.image1} onClick={() => this.handleClick(Women.title)} />
              <img src={Women.image2} alt={Women.image2} onClick={() => this.handleClick(Women.title)} />
              <img src={Women.image3} alt={Women.image3} onClick={() => this.handleClick(Women.title)} />
              <img src={Women.image5} alt={Women.image5} onClick={() => this.handleClick(Women.title)} />
              <img src={Women.image6} alt={Women.image6} onClick={() => this.handleClick(Women.title)} />

            </div>
          </div>

        </div>
      </div>


    )
  }
}
