// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Green_Tick from '../../assets/images/ic-tick-green.svg'
import Arrow_Right_Blue_Small from '../../assets/images/arrow-right-blue-small.svg';

function PwdConfirm(props) {
    const [uName, setUName] = useState("person");

    useEffect(() => {
        if(props.forgotpwd.userDetails!==null&&props.forgotpwd.userDetails!=="Something went wrong"){
            setUName(props.forgotpwd.userDetails.name);
        }
    }, [])

    let history = useHistory();
    return (
        <div className="main-component">
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <img src={Green_Tick} alt="green tick" className="green-tick" />
            <p className="greeting-message" style={{marginTop: "0px"}}>hey {uName}.</p>
            <p className="greeting-byline">your new password has been set</p>
            <p className="data-container">
                You may now use your updated login credentials to sign in within the app or web portal
            </p>
            <div className="login-action-container">
                        <button onClick={()=>{history.push('/')}}><img style={{marginRight: "6px", marginTop: "5px"}} src={Arrow_Right_Blue_Small} className="small-arrow" />sign in</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    forgotpwd: state.ForgotPwd
})

export default connect(mapStateToProps)(PwdConfirm)
