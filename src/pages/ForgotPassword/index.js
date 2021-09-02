// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';
import Arrow_Right_Grey from '../../assets/images/gray-right.svg';
import Icon_Success from '../../assets/images/ic-success.svg'
import Icon_Warning from '../../assets/images/ic-warning.svg'

// Action Imports
import * as ForgotPwdActions from '../../store/pwdResetStore/actions';

function ForgotPassword(props) {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [readyNext, setReadyNext] = useState(false);
    const [underlineColor, setUnderlineColor] = useState("#cfcfcf");

    function handleInputEmail(val){
        setEmail(val);
        if(val.length===0){
            setError("");
            setUnderlineColor("#cfcfcf");
            setReadyNext(false);
        }
    }

    function checkValidity(){
        if (email !== "") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                setError("Please enter a valid Email ID");
                setUnderlineColor("#ff0000");
                setReadyNext(false);
            }
            else{
                setReadyNext(true);
                setError("");
                setUnderlineColor("#cfcfcf");
                handleForgotPassword();
            }
        }  
        else{
            setError("");
            setUnderlineColor("#cfcfcf");
            setReadyNext(false);
        }
    }

    function checkValidityOnBlur(){
        if (email !== "") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                setError("Please enter a valid Email ID");
                setUnderlineColor("#ff0000");
                setReadyNext(false);
            }
            else{
                setReadyNext(true);
                setError("");
                setUnderlineColor("#cfcfcf");
            }
        }  
        else{
            setError("");
            setUnderlineColor("#cfcfcf");
            setReadyNext(false);
        }
    }

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13){
            checkValidity();
        }
    }

    const handleForgotPassword = () => {
        // history.push('/forgotpasswordsuccess');
        props.forgotPasswordEmail({
            "email": email
        })
    }


    useEffect(() => {
        if(props.forgotpwd.forgotPasswordEmailSuccess===true){
            props.forgotPasswordEmailInit();
            history.push('/forgotpasswordsuccess');
        }
        if(props.forgotpwd.forgotPasswordEmailFailure===true){
            props.forgotPasswordEmailInit();
            toast.error("Email does not exist. Please try again!");
            // checkValidity();
            // alert("Wrong Username/Password")
        }
    }, [props.forgotpwd])

    return (
        <div className="main-component" onKeyDown={handleKeyboardEvent}>
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message" style={{fontWeight: 500}}>forgot password</p>
            <p className="greeting-byline" style={{fontWeight: 200}}>don't you worry.</p>

            <div className="inputContainer" style={{borderBottomColor: underlineColor}}>
                <input type="email" onBlur={checkValidityOnBlur} value={email} onChange={(e)=>handleInputEmail(e.target.value)} placeholder="enter email" /> 
                {
                    (error===""&&readyNext===false)? <img className="ok-error-img" src={Icon_Success} style={{opacity: 0}}/>:
                    (error===""&&email!=""&&readyNext===true)? <img className="ok-error-img" src={Icon_Success}/>:<img className="ok-error-img" src={Icon_Warning}/>
                }
            </div>
            <div className="errorContainer">{error}</div>
            <div className="standard-action-container">
                        <button onClick={()=>{history.push('/')}}><img src={Arrow_Left_Blue} /></button>
                        {(readyNext)?
                        <button onClick={handleForgotPassword}><img src={Arrow_Right_Blue} /></button>:
                        (readyNext===false && email.length>0)?<button><img src={Arrow_Right_Blue} /></button>:
                        <button><img src={Arrow_Right_Grey} /></button>                       
                        }
            </div>
            <div id="preloader" className={`${(props.forgotpwd.isPreloader === true) ? '' : 'disp-none'}`}>
                <div id="status" className={`${(props.forgotpwd.isPreloader === true) ? '' : 'disp-none'}`}>
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
    forgotpwd: state.ForgotPwd
})

const mapDispatchToProps = dispatch => ({
    forgotPasswordEmail: (data) => dispatch(ForgotPwdActions.forgotPasswordEmail(data)),
    checkResetIdentifier: (data) => dispatch(ForgotPwdActions.checkResetIdentifier(data)),
    forgotPasswordEmailInit: () => dispatch(ForgotPwdActions.forgotPasswordEmailInit()),
    checkResetIdentifierInit: () => dispatch(ForgotPwdActions.checkResetIdentifierInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
