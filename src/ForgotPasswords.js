import React, { Component } from 'react'
import { Common } from './helpers/Common'
import { validation } from './helpers/Validation'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import withRouter from './helpers/Router'
import { Api } from './api/api'

class ForgotPasswords extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ""
    }
  }
  handleEmailChange = (e) => {
    // const value = e.target.value
    Common.preventInitialSpace(e)
    this.setState({
      email: e.target.value
    });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const { email } = this.state
    if (email === "") {

      toast.warn(validation.email);
      return;
    }
    else if (!Common.validateEmail(email)) {
      toast.warn(validation.emailcorrect);
      return;
    }

    else {
      try {
        let obj = {
          useremailid: email
        }
        const response = await Api.get_otp_generation(obj)
        const data = await response;
        console.log(data, "data")
        const userotp = data.otp;
        console.log(userotp, "userotp")
        
        if (data.error) { 
          toast.warn(data.error); 
        } 
        else if(data==null){
          toast.warn("No data found"); 
        }else { 
          const { router } = this.props;
          router.navigate('/Otpgeneration', { state: { data, email } });
        }


      } catch (e) {
        console.log(e)
      }
    }
  }

  render() {
    const { email } = this.state
    return (
      <div>
        <p className='p_tag'>ForgotPassword</p>
        <div className="form-group">
          <label htmlFor="email"
            className="font_family_serif">Email:
            <span className="logo_color_red"> *</span></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={this.handleEmailChange}
          />
        </div>
        <Button onClick={this.onSubmit}>submit</Button>
      </div>
    )
  }
}
export default withRouter(ForgotPasswords)