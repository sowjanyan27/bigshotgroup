import React, { Component } from 'react';
import withRouter from './helpers/Router'
import Logo from './Logo';
import { validation } from './helpers/Validation';
import { toast } from 'react-toastify';
import { Common } from './helpers/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Api } from './api/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLogin: false,
            isShowpassword: false
        };
    }
    handleRegisterClick = () => {
        const { router } = this.props
        router.navigate('/Registerscreen')

    }
    handleForgotpasswordClick = () => {
        const { router } = this.props
        router.navigate('/ForgotPasswords')
    }
    //  handleLoginClick = async() => {
    //     const { email, password, isLogin } = this.state;
    //     if (email === "") {
    //         toast.warn(validation.email);
    //         return;
    //     }
    //     else if (password === "") {
    //         toast.warn(validation.Password);
    //         return;
    //     }
    //     else{
    //         try{
    //             const response = await Api.get_userdetails({emailid: email,password:password });
    //             const data= response.json();
    //             console(data)
    //         this.setState({
    //             isLogin: true
    //         })
    
    //         const { router } = this.props
    //         router.navigate('/Login')
    //     }catch{

    //     }
    //     }
        

    // }
    handleLoginClick = async () => {
        const { email, password } = this.state;
        if (email === "") {
            toast.warn(validation.email);
            return;
        } else if (password === "") {
            toast.warn(validation.Password);
            return;
        } else {
            try {
                const response = await Api.get_userdetails({ emailid: email, password: password });
                const data = await response
                if(data != null){
                    console.log(data);
                    this.setState({ isLogin: true });
                    localStorage.setItem('email',data[0].useremailid);
        
                    const { router } = this.props;
                    router.navigate('/Login');
                }else{
                    toast.error("no data found with credentials");
                }

               
            } catch (error) {
                console.error("Error logging in:", error);
                toast.error("Failed to login. Please try again.");
            }
        }
    }
    
    handleSkipClick = () => {
        this.setState({
            isLogin: false
        })
        const { router } = this.props
        router.navigate('/Login')
    }
    handleEmailChange = (e) => {
        // const value = e.target.value;
        // const formattedemail = Common.validateEmail(value);
        this.setState({ email: e.target.value })

    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    togglePasswordVisibility = (e) => {
        this.setState((prevstate) => ({
            isShowpassword: !prevstate.isShowpassword
        }));
    }


    render() {

        const { email, password, isShowpassword } = this.state;

        return (
            <div className="container">
                <Logo />
                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type={isShowpassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handlePasswordChange}
                    />
                    <span className="password-toggle-icon" onClick={this.togglePasswordVisibility}>
                        <FontAwesomeIcon icon={isShowpassword ? faEye : faEyeSlash} />
                    </span>
                </div>
                <p className="forgot-password" onClick={this.handleForgotpasswordClick}>Forgot password?</p>
                <div className="button-group">
                    <button className="login-button" onClick={this.handleLoginClick}>Login</button>
                    <button className="register-button" onClick={this.handleRegisterClick}>Register</button>
                    <button className="skip-button" onClick={this.handleSkipClick}>Skip</button>

                </div>
            </div>
        );
    }
}
export default withRouter(Home)