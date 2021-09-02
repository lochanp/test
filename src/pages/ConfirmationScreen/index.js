// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Green_Tick from '../../assets/images/ic-tick-green.svg'
import Arrow_Right_Blue_Small from '../../assets/images/arrow-right-blue-small.svg';

function ConfirmationScreen(props) {
    const [uName, setUName] = useState("person");
    const [uEmail, setUEmail] = useState("person@email.com");

    useEffect(() => {
        if(props.signup.userDetails!==null&&props.signup.userDetails!=="Something went wrong"){
            setUName(props.signup.userDetails.name);
            setUEmail(props.signup.userDetails.email);
        }
    }, [])

    let history = useHistory();
    return (
        <div className="main-component">
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <img src={Green_Tick} alt="green tick" className="green-tick" />
            <p className="greeting-message" style={{marginTop: "0px"}}>hey {uName}.</p>
            <p className="greeting-byline">you are simply awesome</p>
            <p className="data-container">
            <>We have sent out a confirmation mail to you on your registered email ID.</>
            <span>{uEmail}</span>
            <>Please click on the confirmation link to complete your registration</>
            </p>
            <div className="login-action-container">
                        <button onClick={()=>{history.push('/')}}><img style={{marginRight: "6px", marginTop: "5px"}} src={Arrow_Right_Blue_Small} className="small-arrow" />sign in</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    signup: state.SignUp
})

export default connect(mapStateToProps)(ConfirmationScreen)
