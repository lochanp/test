// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';
import Icon_Google from '../../assets/images/ic-google.svg';
import Icon_Facebook from '../../assets/images/ic-fb.svg';
import Icon_Email from '../../assets/images/ic-email.svg';

// Additional Imports
import 'react-toastify/dist/ReactToastify.css';

// Action Imports
import * as AuthActions from '../../store/authStore/actions';

function SignUpOptions(props) {
    let history = useHistory();

    const responseGoogle = (response) => {
        console.log(response);
        var profile = response.getBasicProfile();
        console.log(profile.getId());
        console.log(profile);
        var id_token = response.getAuthResponse().id_token;
        console.log(id_token);
        props.loginUserSocialMedia({
            "type": "google-login",
            "data": {"accessToken" : id_token}
        })
    }

    const responseFacebook = (response) => {
        console.log(response);
        props.loginUserSocialMedia({
            "type": "fb-login",
            "data": {"accessToken" : response.accessToken}
        })
    }

    useEffect(() => {
        if(props.auth.loginUserSuccess===true){
            props.loginUserInit();
            props.getUserDetails({
                "user_type": "customer",
                "user_id": props.auth.loginDetails.userId
            })
        }
        if(props.auth.loginUserFailure===true){
            toast.error("Login attempt failed. Please try again!");
            // alert("Wrong Username/Password")
        }
        if(props.auth.getUserDetailsFaiure===true){
            var userAction = window.confirm("We noticed you have an artist account but not a customer profile. Would you like to register for a customer profile?");
            if(userAction===true){
                console.log("Now I will register user");
                props.getUserDetailsInit();
                props.registerCustomer({
                    "user_id": props.auth.loginDetails.userId
                })
            }
            else{
                console.log("Do nothing")
            }
        }
    }, [props.auth])

    useEffect(() => {
        if(props.auth.userDetails!==null && props.auth.getUserDetailsSuccess===true){
            props.getUserDetailsInit();
            history.push('/home')
        }
    }, [props.auth.userDetails])

    return (
        <div className="main-component">
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />

            
            <div className="extra-login-actions" style={{marginTop: "137px"}}>
                <button className="login-button" onClick={()=>{history.push('/signup')}}>
                    <span>
                        <img src={Icon_Email} className="icon" /> Sign up with your email
                    </span>
                    <img src={Arrow_Right_Blue} className="arrow" />
                </button>
                <hr className="login-separator" />
                <div className="login-button">
                <span>
                    <GoogleLogin
                        clientId="792888191028-d73sas4omh4jl95q0uk4oqamofcqg35g.apps.googleusercontent.com"
                        render={(renderProps )=>{
                            return (
                            <span onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                <img src={Icon_Google} alt="google" className="icon" />
                                <span>Continue with Google</span>
                            </span>
                            )
                        }}
                        buttonText="Login"
                        autoLoad={false}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        icon={false}
                        cookiePolicy={'single_host_origin'}
                        className="google-icon"      
                    />
                </span>
                <img src={Arrow_Right_Blue} className="arrow" />
                </div>
                <hr className="login-separator" />
                <div className="login-button">
                    <span>
                        <FacebookLogin
                            appId="1943486972469811"
                            // autoLoad
                            disableMobileRedirect={true}
                            callback={responseFacebook}
                            cssClass="login-button"
                            textButton="Continue with Facebook"
                            icon={<img src={Icon_Facebook} alt="fb" className="icon" />}
                        />
                    </span>
                    <img src={Arrow_Right_Blue} className="arrow" />
                </div>
            </div>

            <div className="standard-action-container">
                        <button onClick={()=>{history.push('/chooseusertype')}}><img src={Arrow_Left_Blue} /></button>
                        <span>&nbsp;</span>
            </div>
            <div id="preloader" className={`${(props.auth.isPreloader === true) ? '' : 'disp-none'}`}>
                <div id="status" className={`${(props.auth.isPreloader === true) ? '' : 'disp-none'}`}>
                    <div className="spinner-chase">
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    <div className="chase-dot"></div>
                    </div>
                </div>
            </div>
            <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            bodyClassName="toast-body"
            />
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.Auth
})

const mapDispatchToProps = dispatch => ({
    getUserDetails: (data) => dispatch(AuthActions.getUserDetails(data)),
    loginUserInit: () => dispatch(AuthActions.loginUserInit()),
    getUserDetailsInit: () => dispatch(AuthActions.getUserDetailsInit()),
    loginUserSocialMedia: (data) => dispatch(AuthActions.loginUserSocialMedia(data)),
    registerCustomer: (data) => dispatch(AuthActions.registerCustomer(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpOptions)
