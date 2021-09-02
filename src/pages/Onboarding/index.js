// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

// Additional Imports
import 'react-toastify/dist/ReactToastify.css';

// Action Imports
import * as SignUpActions from '../../store/signUpStore/actions';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Right_Grey from '../../assets/images/gray-right.svg';
import Arrow_Left_Grey from '../../assets/images/gray-left.svg';
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';
import Eye_Open from '../../assets/images/ic-eye-open.svg';
import Eye_Closed from '../../assets/images/ic-eye-closed.svg';
import Icon_Success from '../../assets/images/ic-success.svg'
import Icon_Warning from '../../assets/images/ic-warning.svg'


function SignUpPhase(props) {
    let history = useHistory();
    const [stage, setStage] = useState(0);
    const [inputType, setInputType] = useState("password");
    const [controlImage, setControlImage] = useState(Eye_Closed);
    const [userDetails, setUserDetails] = useState({"userType": "customer",});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userID, setUserID] = useState("");
    const [readyNext, setReadyNext] = useState(false);
    const [error, setError] = useState("");
    const [underlineColor, setUnderlineColor] = useState("#cfcfcf");
    const [byline, setByline] = useState("let’s get to know you better");
    // const passError = () => toast("Passwords do not match, please enter the correct password!");

    function handleInputUsername(val){
        setUsername(val);
    }

    function handleInputEmail(val){
        setEmail(val);
        if(val.length===0){
            setError("");
            setUnderlineColor("#cfcfcf");
            setReadyNext(false);
        }
    }

    function handleInputPassword(val){
        setPassword(val)
        if(val.length>=8){
            setReadyNext(true)
        }
        else{
            setReadyNext(false)
        }
    }
    function handleInputConfirmPassword(val){
        setConfirmPassword(val)
        if(val.length>0){
            setReadyNext(true);
        }
        else{
            setReadyNext(false);
            setError("");
        }
    }

    useEffect(() => {
        if(username.match(/[!@#$%^&*()`]/g)){
            setReadyNext(false);
            setUnderlineColor("#ff8a8a")
            setError("no special characters in here please");
        }
        else if(username.indexOf(" ")===0){
            setReadyNext(false);
            setUnderlineColor("#ff8a8a")
            setError("space not allowed at the beginning of name");
        }
        else{
            setError("");
            setUnderlineColor("#cfcfcf");
            (username.length > 1) ? setReadyNext(true) : setReadyNext(false);
        }
    }, [username])

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
                handleStageChange();
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
        if(stage===1 && e.keyCode === 13){
            checkValidity();
        }
        if(e.keyCode === 13 && readyNext && stage!==1){
            handleStageChange();
        }
    }

    function handleStageChange(){
        switch (stage) {
            case 0:
                setUserDetails({
                    ...userDetails,
                    "name": username
                })
                setByline("just a few more details");
                setStage(1);
                setReadyNext(false);
                break;
            case 1:
                setUserDetails({
                    ...userDetails,
                    "email": email
                })
                setReadyNext(false);
                // setStage(2);
                break; 
            case 2:
                setByline("confirm your password");
                setStage(3);
                setReadyNext(false);
                break;
            case 3:
                if(password===confirmPassword){
                    // console.log(props.signup);
                    setUserID(props.signup.userDetails.userId);
                    // props.setPassword(
                    //     {
                    //         "user_ id": props.signup.userDetails.userId,
                    //         "data": {"password": password}
                    //     }
                    // )
                }
                else{
                    console.log("Passoword don't match")
                    setError("Passwork do not match, please try again");
                    // alert("Passoword don't match")
                    // toast.error("Passwords do not match, please enter the correct password!");
                }
                // history.push('/tnc')
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }

    useEffect(() => {
        if(userID!==""){
            props.setPassword(
                {
                    "user_id": userID,
                    "data": {"password": password},
                    "type": "new"
                }
            )
        }
        else{
            console.log("No user ID present")
        }
    }, [userID])

    useEffect(() => {
        if(userDetails.email){
            console.log("Testing ",userDetails);
            props.createConsumer(userDetails);
        }
    }, [userDetails])

    useEffect(() => {
        if(props.signup.createConsumerSuccess === true){
            props.createConsumerInit();
            console.log("Inside Create consumer Success!!")
            setByline("set your password");
            setStage(2);
        }
        if(props.signup.createConsumerFailure === true){
            props.createConsumerInit();
            console.log("User already exists!");
            if(props.signup.userDetails!==null&&props.signup.userDetails!=="Something went wrong"){
                setByline("set your password");
                setStage(2);
            }
            else{
                toast.error("Email ID already in use. Please register using a different email");
            }
        }
        if(props.signup.setPasswordSuccess === true){
            props.setPasswordInit();
            history.push('/tnc')
        }
        if(props.signup.setPasswordFailure === true){
            props.setPasswordInit();
            if(props.signup.userDetails!==null&&props.signup.userDetails!=="Something went wrong"){
                history.push('/tnc')
            }
            else{
                toast.error("Error in setting password. Redirecting back to homepage");
                setTimeout(() => {
                    history.push('/');
                }, 2000);
            }
        }
    }, [props.signup])

    function handleStageBack(){
        switch (stage) {
            case 1:
                setByline("let’s get to know you better")
                setReadyNext(true);
                setStage(0);
                break;
            case 2:
                setByline("just a few more details");
                setReadyNext(true);
                setStage(1);
                break;
            case 3:
                setByline("set your password");
                setReadyNext(true);
                setStage(2);
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }

    return (
        <div className="main-component" onKeyDown={handleKeyboardEvent}>
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message">hi {(stage>0)?username:"there"}.</p>
            <p className="greeting-byline">{byline}</p>

            <div className="inputContainer" style={{borderBottomColor: underlineColor}}>
                {
                     (stage===0)?
                    <input type="text" placeholder="your name please" value={username} onChange={(e)=>{handleInputUsername(e.target.value)}} />
                    :(stage===1)?
                    <span style={{display: "flex", alignItems:"center"}}>
                        <input type="email" onBlur={checkValidityOnBlur} placeholder="email address" value={email} onChange={(e)=>{handleInputEmail(e.target.value)}} />
                        {
                            (error==""&&readyNext===false)? <img className="ok-error-img" src={Icon_Success} style={{opacity: 0}}/>:
                            (error==""&&email!=""&&readyNext===true)? <img className="ok-error-img" src={Icon_Success}/>:<img src={Icon_Warning}/>
                        }
                    </span>
                    :(stage===2)?
                    <>
                        <input type={inputType} title="Password must be atleast 8 characters in length" placeholder="new password" value={password} onChange={(e)=>{handleInputPassword(e.target.value)}} />
                        <button onClick={handleInputType}><img className="password-control-img" src={controlImage}/></button>
                    </>
                    :(stage===3)?
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
                            <button onClick={()=>{history.push('/signupchoices')}}><img src={Arrow_Left_Blue} /></button>
                            :
                            <button onClick={handleStageBack}><img src={Arrow_Left_Blue} /></button>
                        }
                        {/* <button><img src={Arrow_Left_Blue} /></button> */}
                        {
                        (readyNext)?<button onClick={handleStageChange}><img src={Arrow_Right_Blue} /></button>:
                        (readyNext===false && email.length>0 && stage===1)?<button><img src={Arrow_Right_Blue} /></button>:
                        <button><img src={Arrow_Right_Grey} /></button>                        
                        }
                        {/* <button onClick={handleStageChange}><img src={Arrow_Right_Blue} /></button> */}
            </div>

            <div id="preloader" className={`${(props.signup.isPreloader === true) ? '' : 'disp-none'}`}>
                <div id="status" className={`${(props.signup.isPreloader === true) ? '' : 'disp-none'}`}>
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
    signup: state.SignUp
})

const mapDispatchToProps = dispatch => ({
    createConsumer: (data) => dispatch(SignUpActions.createConsumer(data)),
    createConsumerInit: () => dispatch(SignUpActions.createConsumerInit()),

    setPassword: (data) => dispatch(SignUpActions.setPassword(data)),
    setPasswordInit: () => dispatch(SignUpActions.setPasswordInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPhase)
