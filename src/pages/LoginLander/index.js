// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';
import Arrow_Right_Blue_Small from '../../assets/images/arrow-right-blue-small.svg';
import Icon_Google from '../../assets/images/ic-google.svg';
import Icon_Facebook from '../../assets/images/ic-fb.svg';
import Eye_Open from '../../assets/images/ic-eye-open.svg';
import Eye_Closed from '../../assets/images/ic-eye-closed.svg';

// Additional Imports
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

// Action Imports
import * as AuthActions from '../../store/authStore/actions';


function LoginLander(props) {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState("password");
    const [controlImage, setControlImage] = useState(Eye_Closed);

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13){
            handleLogin();
        }
    }

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

    function handleInputUsername(val){
        setUsername(val);
    }

    function handleInputPassword(val){
        setPassword(val);
    }

    function handleLogin(){
        console.log("Inside Handle Login")
        props.loginUser({
            "username": username,
            "password": password
        })
    }

    function handleInputType(){
        if(inputType==="password"){
            setInputType("text");
            setControlImage(Eye_Open);
        }
        else{
            setInputType("password");
            setControlImage(Eye_Closed);
        }
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
            toast.error("Invalid Username/Password. Please try again!");
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
            if(props.auth.userDetails.termsAccepted===true){
                console.log("We can login directly");
                history.push('/home');
            }
            else if(props.auth.userDetails.termsAccepted===false || !('termsAccepted' in props.auth.userDetails)){
                console.log("We now have to redirect to TnC page");
                history.push('/tnc')
            }
            else{
                console.log(props.auth.userDetails);
                console.log("Terms accepted key not found");
            }
            // history.push('/home')
        }
    }, [props.auth.userDetails])

    useEffect(() => {
        props.storeInit();
    }, [])

    return (
        <div className="main-component" onKeyDown={handleKeyboardEvent}>
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message" style={{fontWeight: 500}}>sign in</p>

            <div className="login-input-container">
                <div className="login-input-fields">
                    <input type="email" value={username} onChange={(e)=>{handleInputUsername(e.target.value)}} placeholder="enter email" /> 
                </div>
                <div className="login-input-fields">
                    <input type={inputType} value={password} onChange={(e)=>{handleInputPassword(e.target.value)}} placeholder="enter password" /> 
                    <button onClick={handleInputType}><img className="password-control-img" src={controlImage}/></button>
                </div>
            </div>
            <button className="signin-option"  onClick={()=>{history.push('/chooseusertype')}}><img src={Arrow_Right_Blue_Small} className="small-arrow" /><span>sign up</span></button>
            <div className="login-action-container">
                        <button onClick={()=>{history.push('/forgotpassword')}}><img style={{marginRight: "6px"}} src={Arrow_Right_Blue_Small} alt="blue arrow left" className="small-arrow" />forgot password</button>
                        <button onClick={handleLogin}><img alt="blue arrow right" src={Arrow_Right_Blue} /></button>
            </div>

            <div className="separator">
                <hr/>
                <span>OR</span>
                <hr/>
            </div>

            <div className="extra-login-actions">
                <button className="login-button">
                    <span>
                    <GoogleLogin
                        clientId="792888191028-d73sas4omh4jl95q0uk4oqamofcqg35g.apps.googleusercontent.com"
                        render={(renderProps)=>{
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
                </button>
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
                </div>
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
            toastClassName="toast-main"
            progressClassName="toast-progress"
            />
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.Auth
})

const mapDispatchToProps = dispatch => ({
    loginUser: (data) => dispatch(AuthActions.loginUser(data)),
    getUserDetails: (data) => dispatch(AuthActions.getUserDetails(data)),
    loginUserInit: () => dispatch(AuthActions.loginUserInit()),
    getUserDetailsInit: () => dispatch(AuthActions.getUserDetailsInit()),
    loginUserSocialMedia: (data) => dispatch(AuthActions.loginUserSocialMedia(data)),
    registerCustomer: (data) => dispatch(AuthActions.registerCustomer(data)),
    storeInit: () => dispatch(AuthActions.storeInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginLander)
