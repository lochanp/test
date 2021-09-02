// Project Name: TGP Consumer Webapp
// -----------------------------
// Author: Priyanshu Chauhan
// Last Updated:   22/7/2021, 5:00:00 pm

//Dependency Importsncy Imports
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from "react-router-dom";

// Image Imports
import TGP_Logo from '../../assets/images/logo_small.svg'
import Arrow_Right_Grey from '../../assets/images/gray-right.svg';
import Arrow_Left_Grey from '../../assets/images/gray-left.svg';
import Arrow_Left_Blue from '../../assets/images/blue-left.svg';
import Arrow_Right_Blue from '../../assets/images/blue-right.svg';

function UserChoice() {
    let history = useHistory();
    const [switchValue, setSwitchValue] = useState("No")
    function handleSwitchChange(val){
        if(val){
            setSwitchValue("Yes")
        }
        else{
            setSwitchValue("No")
        }
    }

    // useEffect(() => {
    //     if(switchValue==="Yes"){
    //         console.log("aa")
    //     }
    //     else{
    //         console.log("bb")
    //     }
    // }, [switchValue])

    const neutralizeBack = (callback) => {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = () => {
          window.history.pushState(null, "", window.location.href);
        //   callback();
            console.log("Back button is disabled");
        };
    };

    const revivalBack = () => {
        window.onpopstate = undefined;
        window.history.back();
    };

    useEffect(() => {
        // neutralizeBack();
    }, [])

    const handleKeyboardEvent = (e) => {
        if(e.keyCode === 13){
            if(switchValue==="Yes"){
                window.location.href = 'https://tgpwithbackend.netlify.app/';
            }
            else{
                history.push('/signupchoices');
            }
        }
    }

    return (
        <div className="main-component" onKeyDown={handleKeyboardEvent}>
            <img src={TGP_Logo} alt="logo" className="main-component-logo" />
            <p className="greeting-message">hi there.</p>
            <p className="greeting-byline">Do you want to sign up as an Artist</p>
            <div className="switch-container">
            <label className="switch">
                <input type="checkbox" onClick={(e)=>{handleSwitchChange(e.target.checked)}} />
                <span className="slider round"></span>
            </label>
            <span>{switchValue}</span>
            </div>
            <div className="standard-action-container">
                        <button onClick={()=>{history.push('/')}}><img src={Arrow_Left_Blue} /></button>
                        {
                            (switchValue==="Yes")?
                            <a href="https://tgpwithbackend.netlify.app/">
                                <button><img src={Arrow_Right_Blue} /></button>
                            </a>
                            // <button onClick={()=>{history.push('/artistonboarding')}}><img src={Arrow_Right_Blue} /></button>
                            :
                            <button onClick={()=>{history.push('/signupchoices')}}><img src={Arrow_Right_Blue} /></button>
                        }
                        {/* <button><img src={Arrow_Right_Blue} /></button> */}
            </div>
        </div>
    )
}

export default UserChoice
