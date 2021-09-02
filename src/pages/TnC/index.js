// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Checkbox_Unchecked from '../../assets/images/ic-checkbox-unfilled.svg'
import Checkbox_Checked from '../../assets/images/ic-checkbox-filled.svg'
import Arrow_Right_Grey from '../../assets/images/gray-right.svg';
import Arrow_Left_Grey from '../../assets/images/gray-left.svg';
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';

// Additional Imports
import TnCData from '../../components/TnC';
import 'react-toastify/dist/ReactToastify.css';

// Action Imports
import * as SignUpActions from '../../store/signUpStore/actions';

function TnC(props) {
    let history = useHistory();
    const [uName, setUName] = useState("person");
    const [checked, setChecked] = useState(Checkbox_Unchecked);
    const [userId, setUserId] = useState("");
    const [nextRoute, setNextRoute] = useState("confirm");

    useEffect(() => {
        if(props.signup.userDetails!==null&&props.signup.userDetails!=="Something went wrong"){
            setUName(props.signup.userDetails.name);
            setUserId(props.signup.userDetails.userId)
        }
        else if(props.auth.userDetails!==null&&props.auth.userDetails!=="Something went wrong"){
            setUName(props.auth.userDetails.name);
            setUserId(props.auth.loginDetails.userId);
        }
        else{ 
            console.log("Something went wrong");
        }
    }, [])

    function handleCheckboxAction(){
        if(checked===Checkbox_Unchecked){
            setChecked(Checkbox_Checked)
        }
        else{
            setChecked(Checkbox_Unchecked)
        }
    }

    function handleTnCAcceptance(){
        // history.push('/confirm')
        if(props.auth.userDetails!==null&&props.auth.userDetails!=="Something went wrong"){
            console.log("You came in from some login route. Now you would be thrown to login after acceptance");
            setNextRoute("home")
        }
        else if(props.signup.userDetails!==null&&props.signup.userDetails!=="Something went wrong"){
            console.log("You came here via sign up route. You would go to the success screen");
        }
        else{
            console.log("Logic failing somewhere");
        }
        props.setTnCAcceptance({
            "user_id": userId
        })
    }


    useEffect(() => {
        if(props.signup.setTnCSuccess === true){
            props.setTnCAcceptanceInit();
            console.log("Inside set TnC Success!");
            history.push(`/${nextRoute}`)
        }
        if(props.signup.setTnCFailure === true){
            props.setTnCAcceptanceInit();
            console.log("Inside set TnC Failure!")
        }
    }, [props.signup])

    return (
        <div className="main-component">
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message">hey {uName}.</p>
            <p className="greeting-byline">kindly read the terms &amp; conditions</p>
            {/* <TnCData/> */}
            <iframe className="tncContainer" src="https://tgp-documents-public.s3.ap-south-1.amazonaws.com/TGP_T%26C.html" title="TGP Terms and Conditions"></iframe>
            <div className="checkboxActionContainer" onClick={handleCheckboxAction}>
                <img src={checked} className="customCheckbox" alt="checkbox" /> I agree to the Gallry Project Terms &amp; conditions
            </div>
            <div className="mainActionContainer">
                        <button>&nbsp;</button>
                        {
                            (checked===Checkbox_Unchecked)?
                            <button><img src={Arrow_Right_Grey} /></button>
                            :
                            <button onClick={handleTnCAcceptance}><img src={Arrow_Right_Blue} /></button>
                        }
                        {/* <button onClick={()=>{history.push('/confirm')}}><img src={Arrow_Right_Blue} /></button> */}
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
    signup: state.SignUp,
    auth: state.Auth
})

const mapDispatchToProps = dispatch => ({
    setTnCAcceptance: (data) => dispatch(SignUpActions.setTnCAcceptance(data)),
    setTnCAcceptanceInit: () => dispatch(SignUpActions.setTnCAcceptanceInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(TnC)
