// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Right_Grey from '../../assets/images/gray-right.svg';
import Arrow_Left_Grey from '../../assets/images/gray-left.svg';
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';
import Eye_Open from '../../assets/images/ic-eye-open.svg';
import Eye_Closed from '../../assets/images/ic-eye-closed.svg';

// Action Imports
import * as SignUpActions from '../../store/signUpStore/actions';
import * as ForgotPwdActions from '../../store/pwdResetStore/actions';

function SetPassword(props) {
    const [byline, setByline] = useState("set your new password");
    const [stage, setStage] = useState(0);
    const [inputType, setInputType] = useState("password");
    const [controlImage, setControlImage] = useState(Eye_Closed);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [readyNext, setReadyNext] = useState(false);
    const [error, setError] = useState("");
    const [userID, setUserID] = useState("");
    const [underlineColor, setUnderlineColor] = useState("#cfcfcf");
    const [identifier, setIdentifier] = useState("");
    const [uName, setUName] = useState("");
    let history = useHistory();

    function handleInputPassword(val){
        setPassword(val)
        if(val.length>=8){
            setReadyNext(true)
        }
        else{
            setReadyNext(false)
        }
        // var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // var test = reg.test(val);
        // if(test){
        //     setReadyNext(true);
        //     setError("")
        //     setUnderlineColor("#cfcfcf");
        // }
        // else{
        //     setReadyNext(false);
        //     if(val.length>4){
        //         setUnderlineColor("#ff0000");
        //         setError("Password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character");
        //     }
        //     else{
        //         setError("")
        //         setUnderlineColor("#cfcfcf");
        //     }
        // }
    }
    function handleInputConfirmPassword(val){
        setConfirmPassword(val)
        if(val.length>0){
            setReadyNext(true);
        }
        else{
            setReadyNext(false);
        }
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


    function handleStageChange(){
        switch (stage) {
            case 0:
                setByline("confirm your password")
                setStage(1);
                break;
            case 1:
                if(password===confirmPassword){
                    console.log("Ready to set password!");
                    props.setPassword(
                        {
                            "user_id": userID,
                            "data": {"password": password},
                            "type": "forgot"
                        }
                    )
                }
                else{
                    console.log("Passoword don't match")
                    setError("Passwork don't match, please try again");
                    // alert("Passoword don't match")
                    // toast.error("Passwords do not match, please enter the correct password!");
                }
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }

    function handleStageBack(){
        switch (stage) {
            case 1:
                setByline("set your new password")
                setReadyNext(true);
                setStage(0);
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }


    useEffect(() => {
        if(props.signup.setPasswordSuccess === true){
            props.setPasswordInit();
            console.log("Done!");
            history.push('/passwordsuccess');
        }
        if(props.signup.setPasswordFailure === true){
            props.setPasswordInit();
            toast.error("Something went wrong in setting password");
        }
    }, [props.signup])

    useEffect(() => {
        if(props.forgotpwd.checkResetIdentifierSuccess===true){
            props.checkResetIdentifierInit();
            setUserID(props.forgotpwd.userDetails.userId);
            setUName(props.forgotpwd.userDetails.name);
        }
        if(props.forgotpwd.checkResetIdentifierFailure===true){
            props.checkResetIdentifierInit();
            toast.error("Could not verify identifier");
        }
    }, [props.forgotpwd])

    useEffect(() => {
        if(props.forgotpwd.userDetails===null || !('userId' in props.forgotpwd.userDetails)){
            // props.checkResetIdentifier()
            console.log(props.location);
            console.log(props.location.search.substring(12,props.location.search.length));
            setIdentifier(props.location.search.substring(12,props.location.search.length));
        }
    }, [])

    useEffect(() => {
        if(identifier!==""){
            props.checkResetIdentifier({
                "identifier": identifier
            })
        }
    }, [identifier])

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13 && readyNext){
            handleStageChange();
        }
    }

    return (
        <div className="main-component" onKeyDown={handleKeyboardEvent}>
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message">hi {(uName==="")?"user":uName}.</p>
            <p className="greeting-byline">{byline}</p>

            <div className="inputContainer" style={{borderBottomColor: underlineColor}}>
                {
                     (stage===0)?
                    <>
                        <input type={inputType} title="Password must be atleast 8 characters in length" placeholder="new password" value={password} onChange={(e)=>{handleInputPassword(e.target.value)}} />
                        <button onClick={handleInputType}><img className="password-control-img" src={controlImage}/></button>
                    </>
                    :(stage===1)?
                    <>
                        <input type={inputType} placeholder="confirm password" value={confirmPassword} onChange={(e)=>{handleInputConfirmPassword(e.target.value)}} />
                        <button onClick={handleInputType}><img className="password-control-img" src={controlImage}/></button>
                    </>
                    :
                    <span>Nothing to see here</span>
                }                
            </div>
            <div className="errorContainer">{error}</div>

            <div className="standard-action-container">
                        {
                            (stage===0)?
                            <span>&nbsp;</span>
                            :
                            <button onClick={handleStageBack}><img src={Arrow_Left_Blue} /></button>
                        }
                        {(readyNext)?
                            <button onClick={handleStageChange}><img src={Arrow_Right_Blue} /></button>:
                            <button><img src={Arrow_Right_Grey} /></button>                        
                        }
            </div>
            <div id="preloader" className={`${(props.forgotpwd.isPreloader === true || props.signup.isPreloader === true) ? '' : 'disp-none'}`}>
                <div id="status" className={`${(props.forgotpwd.isPreloader === true || props.signup.isPreloader === true) ? '' : 'disp-none'}`}>
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
    forgotpwd: state.ForgotPwd,
    signup: state.SignUp
})

const mapDispatchToProps = dispatch => ({

    setPassword: (data) => dispatch(SignUpActions.setPassword(data)),
    setPasswordInit: () => dispatch(SignUpActions.setPasswordInit()),

    checkResetIdentifier: (data) => dispatch(ForgotPwdActions.checkResetIdentifier(data)),
    checkResetIdentifierInit: () => dispatch(ForgotPwdActions.checkResetIdentifierInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword)
