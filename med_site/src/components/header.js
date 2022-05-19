import React from "react";
import './css/header.css';
import searchIcon from './images/search.png';
import logo from './images/logoicon.ico'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-content">
            <img style={{"width":"40px","margin-left":"30px"}} src={logo}></img><h1 className="logo-text"><i><a href=''>HellScare</a></i></h1>
            <input className="search-bar" placeholder="Search..."></input>
            <a href="#"><img src={searchIcon} alt='searchIcon' style={{"width":"30px"}}/></a>
            <h3 className="login"><Link to={"/login"}>Login</Link></h3>
            <h3 className="profile"><Link to={"/"}>Profile</Link></h3>
        </div>
    );
}

export default Header;