import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="dekstopMenu">
                <Link className="dekstopMenuListItem">Home</Link>
                <Link className="dekstopMenuListItem">About</Link>
                <Link className="dekstopMenuListItem">Portfolio</Link>
                <Link className="dekstopMenuListItem">clients</Link>
            </div>    
                <button className="dekstopMenuBtn">
                    <img src={contactImg} alt="" className="dekstopMenuImg" />Contact Me</button>
        </nav>    
    )
}

export default Navbar