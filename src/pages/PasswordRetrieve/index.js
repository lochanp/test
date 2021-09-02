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

function PasswordRetrieve(props) {
    let history = useHistory();
    const [uName, setUName] = useState("person");
    const [uEmail, setUEmail] = useState("person@email.com");

    useEffect(() => {
        if(props.forgotpwd.userDetails!==null&&props.forgotpwd.userDetails!=="Something went wrong"){
            setUName(props.forgotpwd.userDetails.name);
            setUEmail(props.forgotpwd.userDetails.email);
        }
    }, [])

    return (
        <div className="main-component">
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <img src={Green_Tick} className="green-tick" />
            <p className="greeting-message" style={{marginTop: "0px"}}>hey {uName}.</p>
            <p className="greeting-byline">you are done</p>
            <p className="data-container">
                We have sent a mail to you on your registered mail id {uEmail} which will allow you to reset your password.
            </p>
            <div className="login-action-container">
                        <button onClick={()=>{history.push('/')}}><img style={{marginRight: "6px"}} src={Arrow_Right_Blue_Small} className="small-arrow" />sign in</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    forgotpwd: state.ForgotPwd
})

export default connect(mapStateToProps)(PasswordRetrieve)
