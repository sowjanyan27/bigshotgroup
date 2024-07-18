import React, { Component } from 'react';
import  withRouter  from './helpers/Router'; 
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


class OtpGeneration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: ["", "", "", "", "", ""],
      error: '',
      successMessage: '',
      timer:300,
      timerId: null,
     
    };
    this.timerInterval = null;
    this.inputRefs = Array(6).fill(React.createRef()); 
  }

  componentDidMount() {
    const { router } = this.props;
    if (router.location && router.location.state && router.location.state.data && Array.isArray(router.location.state.data.otp)) {
      const { otp } = router.location.state.data;
      this.setState({ otp });
      
    }
    let intervalId = setInterval(this.tick, 1000);  // Call tick function every second
        this.setState({ timerId: intervalId });  // Store interval ID in state

   
  }
  componentWillUnmount(){
    clearInterval(this.state.timerId)
  }
  tick = () => {
    this.setState(prevState => {
      if (prevState.timer === 0) {
          clearInterval(prevState.timerId);  // Stop the interval when timer reaches 0
          return { timerId: null };  // Clear timerId in state
      }
      return { timer: prevState.timer - 1 };  // Decrement timer by 1 second
  });
};
    stopTimer = () => {
        clearInterval(this.state.timerId);  // Clear interval to stop the timer
        this.setState({ timerId: null });  // Reset timerId in state
    };

  handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return; 

    this.setState(prevState => {
      const updatedOtp = [...prevState.otp];
      updatedOtp[index] = value;
      return { otp: updatedOtp };
    }, () => {
      
      if (value !== '' && index < 5) {
        this[`input${index + 1}`].focus();
      }
    });
  };

  verifyotp = (e) => {
    e.preventDefault();
    const { otp } = this.state; 
    const enteredOtp = otp.join('');  
  
    const { router } = this.props;
    const expectedOtp = router.location.state.data.otp 
  
    // Compare OTPs
    if (enteredOtp !== expectedOtp) {
      toast.error("OTP entered does not match."); 
      return;
    }
    this.setState({ otp: ["", "", "", "", "", ""] });
    if(this.state.timer===0){
      toast.warn("time expires generate again otp")
    }
    else{
        
    const { router } = this.props;
    
      router.navigate('/Passwordchange',{ state: { email: router.location.state.email} });
    }
  this.stopTimer()
  
  };

  render() {
    const { otp } = this.state;
   
    return (
      <div className='col-sm-12'>
        <div className="otp-input-row">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="otp-input"
              maxLength={1}
              value={digit}
              ref={(input) => (this[`input${index}`] = input)} // Ref for focusing
              onChange={(e) => this.handleChange(e, index)}
             
            />
          ))}
        </div>
       
          <p>Time remaining: {Math.floor(this.state.timer / 60)}:{this.state.timer % 60 < 10 ? '0' : ''}{this.state.timer % 60} minutes</p>
   
        
        <Button onClick={this.verifyotp}>Save</Button>
      </div>
    );
  }
}

export default withRouter(OtpGeneration);














