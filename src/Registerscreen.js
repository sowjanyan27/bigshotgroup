import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { validation } from './helpers/Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Common } from './helpers/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Api } from './api/api';
import withRouter from './helpers/Router';

class Registerscreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:"",
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            password: "",
            confirmpassword: "",
            isShowpassword:false,
            isShowconfirmpassword:false
        };
    }

    handleFirstnameChange = (e) => {
        const value = e.target.value
        Common.preventInitialSpace(e)
        const Formattedname = Common.allowAlphabeticFormat(value)
        this.setState({
            firstname: Formattedname
        });
    };

    handleLastnameChange = (e) => {
        const value = e.target.value
        Common.preventInitialSpace(e)
        const Formattedname = Common.allowAlphabeticFormat(value)
        this.setState({
            lastname: Formattedname
        });
    };

    handleEmailChange = (e) => {
        // const value = e.target.value
        Common.preventInitialSpace(e)
        // const formattedemail = Common.validateEmail(value)
        this.setState({
            email: e.target.value
        });
    };

    handleMobileChange = (e) => {
        Common.preventInitialSpace(e)
        const value = e.target.value
        const formattedMobile = Common.mobileNumberFormat(value);
        Common.allowOnlyNumbers(e)
        this.setState({
            mobile: formattedMobile
        });
    };

    handlePasswordChange = (e) => {
        Common.preventInitialSpace(e)
        this.setState({
            password: e.target.value
        });
    };

    handleConfirmpasswordChange = (e) => {
        Common.preventInitialSpace(e)
        this.setState({
            confirmpassword: e.target.value
        });
    };
    
togglepasswordVisibility=(e)=>{
    this.setState((prevstate) =>({
        isShowpassword:!prevstate.isShowpassword

    }));
}
toggleconfirmpasswordVisibility=(e)=>{
    this.setState((confirmprevstate) =>({
        isShowconfirmpassword:!confirmprevstate.isShowconfirmpassword

    }));  
}


    onSubmit = async(e) => {
        e.preventDefault();
        const { firstname, lastname, email, mobile, password, confirmpassword } = this.state;

        // Basic form validation
        if (firstname === "") {
            toast.warn(validation.firstname);
            //   toast.error("test")
            return;
        }
        else if (lastname === "") {
            toast.warn(validation.lastname);
            return;
        }
        else if (email === "") {
            toast.warn(validation.email);
            return;
        }
        else if(!Common.validateEmail(email)){
            toast.warn(validation.emailcorrect);
            return; 
        }
        else if (mobile === "") {
            toast.warn(validation.Mobile);
            return;
        }
        else if (!Common.mobileNumberFormat(mobile)) {
            toast.warn(validation.validnumber);
            return;
        }

        else if (password === "") {
            toast.warn(validation.Password);
            return;
        }
        else if (confirmpassword === "") {
            toast.warn(validation.confirmpassword);
            return;
        }
        else if(password!==confirmpassword){
            toast.warn(validation.confirmpasswordcorect);
            return;
        }
        else {

            let formData = {
                userid:0,
                userfirstname:firstname,
                userlastname:lastname,
                useremailid:email,
                usermobile:mobile,
                userpassword:password,
                userconfirmpassword:confirmpassword
            };
try{
    const response= await Api.insert_user_details(formData)
    const data= await response
    if(data != null){
        const { router } = this.props
        router.navigate('/')
    }

}catch(e){
    console.log(e)
}


            // console.log(formData);
        }
    };

    render() {
        const { firstname, lastname, email, mobile, password, confirmpassword,isShowpassword,isShowconfirmpassword } = this.state;

        return (
            <div className='container'>
                <p style={{ textAlign: "center" }}>Registerscreen</p>
                <div className="form-group">
                    <label htmlFor="firstname"
                        className="font_family_serif">First name
                        <span className="logo_color_red"> *</span></label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder='Firstname'
                        value={firstname}
                        onChange={this.handleFirstnameChange}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="lastname"
                        className="font_family_serif">Last name:
                        <span className="logo_color_red"> *</span></label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder='Lastname'
                        value={lastname}
                        onChange={this.handleLastnameChange}
                    />
                </div>
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
                <div className="form-group">
                <label htmlFor="mobile"
                        className="font_family_serif">MobileNumber:
                        <span className="logo_color_red"> *</span></label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        placeholder='Mobile'
                        value={mobile}
                        onChange={this.handleMobileChange}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="password"
                        className="font_family_serif">Password:
                        <span className="logo_color_red"> *</span></label>
                    <input
                        type={isShowpassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={this.handlePasswordChange}
                    />
                      <span className="password-toggle-icon" onClick={this.togglepasswordVisibility}>
                        <FontAwesomeIcon icon={isShowpassword ? faEye : faEyeSlash} />
                    </span>
                </div>
                <div className="form-group">
                <label htmlFor="confirmpassword"
                        className="font_family_serif">Confirmpassword:
                        <span className="logo_color_red"> *</span></label>
                    <input
                        type={isShowconfirmpassword ? "text" : "password"}
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder='Confirmpassword'
                        value={confirmpassword}
                        onChange={this.handleConfirmpasswordChange}
                    />
                     <span className="password-toggle-icon" onClick={this.toggleconfirmpasswordVisibility}>
                        <FontAwesomeIcon icon={isShowconfirmpassword ? faEye : faEyeSlash} />
                    </span>
                </div>
                <div>
                    <Button className="btn btn-success padding_horizental_35 font_family_serif" onClick={this.onSubmit}>Submit</Button>
                </div>
            </div>
        );
    }
}
export default withRouter(Registerscreen) 