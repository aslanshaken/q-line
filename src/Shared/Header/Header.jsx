import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Logo from '../../Assets/logo-original.png'

export default function Header() {
    return (
        <div>
            <div className="header-container">
                {/* <Link to="/" id="none"><img className="header-logo" src={Logo} /></Link> */}
                <Link to="/" id="none"><div className="header-logo">Q-LINE</div></Link>
                <Link to="/" id="none"><div className="header-text">HOME</div></Link>
                <Link to="/about" id="none"><div className="header-text">ABOUT US</div></Link>
                <Link to="/services" id="none"><div className="header-text">SERVICES</div></Link>
                <Link to="/contact" id="none"><div className="header-text">CONTACT</div></Link>
                <Link to="/get-hired" id="none"><div className="header-text">BECOME A DRIVER</div></Link>
                <Link to="/get-quote" id="none"><div className="header-get-quote">GET QUOTE</div></Link>
            </div>

        </div>
    )
}