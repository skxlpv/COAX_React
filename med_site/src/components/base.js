import React from "react";
import './css/base.css'
import card_pic from './images/card-pic.jpg'
import CardLine from "./cardLine";

const Base = () => {
    return (
        <div className='base-content'>
            <CardLine/>
            <CardLine/>
            <CardLine/>
        </div>
    );
}

export default Base;