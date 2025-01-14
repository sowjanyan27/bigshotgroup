import React, { Component } from 'react';
import { validation } from './helpers/Validation';
import withRouter from './helpers/Router';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { Api } from './api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Passwordchange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmpassword: "",
          email: "",
          ispasswordshown:"",
          isconfirmpasswordshown:""
    };
   
  }
  componentDidMount() {
    const { email } = this.props.router.location.state || {};
    if (email) {
      this.setState({ email });
    } else {
      console.error('Email is undefined in route state');
    }
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmpassword: e.target.value
    });
  };
visibilityPassword=()=>{
  this.setState((prevstate)=>({
    ispasswordshown:!prevstate.ispasswordshown
  }))   
}
visibilityConfirmPassword=()=>{
  this.setState((prestate)=>({
    isconfirmpasswordshown:!prestate.isconfirmpasswordshown
  }))
}
  onSubmit = async(e) => {
    e.preventDefault();
    const { password, confirmpassword,email } = this.state;
    

    if (password === "") {
      toast.warn(validation.Password);
      return;
    } else if (confirmpassword === "") {
      toast.warn(validation.confirmpassword);
      return;
    } else if (password !== confirmpassword) {
      toast.warn(validation.confirmpasswordcorect);
      return;
    } else {
     
      let obj = {
        useremailid:email,
        userpassword: password,
      };
      console.log(obj);
      const response= await Api.get_update_password(obj)
      const data = await response
      if(data != null){
        const { router } = this.props;
        router.navigate('/');
      }
     
    }
  };

  render() {
    const { password, confirmpassword,ispasswordshown,
      isconfirmpasswordshown } = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="password" className="font_family_serif">
            Password: <span className="logo_color_red"> *</span>
          </label>
          <input
            type= {ispasswordshown?"text":"password"}
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <span className="password-toggle-icon" onClick={this.visibilityPassword}>
                        <FontAwesomeIcon icon={ispasswordshown ? faEye : faEyeSlash} />
                    </span>
                    </div>       
          <div className="form-group">
          <label htmlFor="confirmpassword" className="font_family_serif">
            Confirmpassword: <span className="logo_color_red"> *</span>
          </label>
          <input
            type={isconfirmpasswordshown?"text":"password"}
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirmpassword"
            value={confirmpassword}
            onChange={this.handleConfirmPasswordChange}
          />
          <span className="password-toggle-icon" onClick={this.visibilityConfirmPassword}>
                        <FontAwesomeIcon icon={isconfirmpasswordshown ? faEye : faEyeSlash} />
                    </span>
        </div>
        <div>
        
        <Button onClick={ this.onSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Passwordchange);
