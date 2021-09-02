import React from 'react'
import Icon_Instagram from '../assets/images/ic-instagram.svg';
import Icon_Facebook from '../assets/images/ic-fb.jpg';
import Logo_Inline from '../assets/images/inlinelogo.svg';

function Footer() {
    return (
        <div className="container">
            <div className="bs-footer">
                <ul className="social-link">
                    <li className="link-item"><a><img src={Icon_Facebook} alt="facebook" /></a></li>
                    <li className="link-item"><a><img src={Icon_Instagram} height={32} alt="instagram" /></a></li>
                </ul>
                <div className="bottom-wrap">
                    <a href="/home" className="logo-wrap">
                        <img src={Logo_Inline} alt="logo" />
                    </a>
                    <ul className="footer-nav-list">
                        <li className="nav-list-item"><a>About Us.</a></li>
                        <li className="nav-list-item"><a>TGP team.</a></li>
                        <li className="nav-list-item"><a>Reach us.</a></li>
                        <li className="nav-list-item"><a>Affiliattions.</a></li>
                        <li className="nav-list-item"><a>Disclaimers.</a></li>
                        <li className="nav-list-item"><a>Privacy Policy.</a></li>
                    </ul>
                    <div className="copyright">
                        <small><span>&copy;</span>&nbsp;Content Copyright reserved with TGP.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
