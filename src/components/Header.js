import React, { useContext, useEffect, useState } from 'react'

// import '../assets/fonts/fonts.css';
// import '../assets/css/libraries/swiper.5.2.1.min.css';
// import '../assets/css/libraries/nouislider.min.css';
// import '../assets/css/libraries/jquery.mCustomScrollbar.min.css';
// import '../assets/css/linear-icons.css';
// import '../assets/css/custom.css';

import Icon_Close from '../assets/images/ic-close.svg'
import Icon_User from '../assets/images/ic-user.svg'
import Icon_Search from '../assets/images/ic-search.svg'
import Icon_Hamburger from '../assets/images/ic-hamburger.svg'
import Icon_Cart from '../assets/images/ic-cart.svg'
import logo from '../assets/images/logo.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { Modal } from '@material-ui/core';
import Search from './Search';
import ArtworkContext from '../utils/DataContext'

function Header(props) {
    let history = useHistory();
    const [active, setactive] = useState("")
    // const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const [searchState, setsearchState] = useState("free")
    const [isRefreshed, setisRefreshed] = useState(false)
    const contextArts = useContext( ArtworkContext )

    const handleOpen = () => {
        contextArts.setSearchModalOpen(true);
      };
    
    const handleClose = () => {
        contextArts.setSearchModalOpen(false);
    };

    useEffect(() => {
        if(isRefreshed===true){
            setisRefreshed(false);
            let temp = pathname.substr(1,pathname.length-1)
            setactive(temp);
        }
    }, [isRefreshed])

    useEffect(() => {
        // let temp = pathname.substr(1,pathname.length-1)
        // console.log(temp);
        // setactive(temp);
        setisRefreshed(true);
    }, [props.location])

    function handleLogout(){
        history.push('/');
    }

    function handleAFAction(){
        setsearchState("artfinder");
        handleOpen();
    }

    function handleSAction(){
        setsearchState("free");
        handleOpen();
    }

    return (
    <div className="container">
        <div className="bs-header">
            <a href="/home" className="logo-wrap">
                <picture>
                    <source media="(min-width: 1024px)" type="image/svg+xml" src={logo} />
                    <source media="(max-width: 1024px)" type="image/svg+xml" src={logo} />
                    <img src={logo} alt="logo" className="logo-img" />
                </picture>
            </a>
            <div className="nav-wrap">
                <div className="nav-icons">
                    <div onClick={()=>{handleSAction()}}><img src={Icon_Search} /></div>
                    <div><img src={Icon_User} /></div>
                    <div><img src={Icon_Cart} /></div>
                    <div><img src={Icon_Hamburger} /></div>
                </div>
                <nav>
                    {/* <ul className="quick-nav-list">
                        <li className="nav-list-item"><a href="#"><span className="icon icon-dummy"></span></a></li>
                        <li className="nav-list-item"><a href="#"><span className="icon icon-dummy"></span></a></li>
                        <li className="nav-list-item"><a href="#"><span className="icon icon-dummy"></span></a></li>
                        <li className="nav-list-item"><a href="#"><span className="icon icon-dummy"></span></a></li>
                    </ul> */}
                    <div className="header-list">
                        <ul className="main-header-list">
                            <li className={(active==="logout")?"active-item":""} onClick={handleLogout}><a>Logout.</a></li>
                            <li className={(active==="home")?"active-item":""} onClick={()=>{history.push('/home')}}><a>Home.</a></li>
                            <li className={(active==="artists")?"active-item":""} onClick={()=>{history.push('/artists')}}><a>Artists.</a></li>
                            <li className={(active==="galleries")?"active-item":""}><a>Galleries.</a></li>
                            <li className={(active==="events")?"active-item":""} onClick={()=>{history.push('/events')}}><a >Events.</a></li>
                            <li className="" onClick={()=>{handleAFAction()}}><a>Art Finder.</a></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        <Modal
            open={contextArts.searchModalOpen}
            onClose={handleClose}
        >
                <div className="modal-container">
                    <button onClick={handleClose} className="close-button">Close <img src={Icon_Close}/></button>
                    <Search active={searchState} />
                </div>
        </Modal>
    </div>
    )
}

export default Header
