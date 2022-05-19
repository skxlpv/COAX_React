import React from "react";
import './css/sideBar.css';
import boxIcon from './images/box-icon.png';
import homeIcon from './images/home-icon.png';
import noteIcon from './images/note-icon.png';
import peopleIcon from './images/people-icon.png';
import logoutIcon from './images/logout-icon.png';
import settingsIcon from './images/settings-icon.png';

const SideBar = () => {
    return (
        <div className="side-content">
            <a href="#"><img src={homeIcon} alt='home'/></a>
            <a href="#"><img src={noteIcon} alt='appointments'/></a>
            <a href="#"><img src={peopleIcon} alt='hr'/></a>
            <a href="#"><img src={boxIcon} alt='inventory'/></a>
            <a href="#"><img src={settingsIcon} alt='inventory'/></a>
            <a href="#"><img src={logoutIcon} alt='inventory'/></a>
        </div>
    );
}

export default SideBar;