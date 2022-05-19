import React from "react";
import './css/base.css'
import card_pic from './images/card-pic.jpg'

const CardLine = () => {
    return (
        <div className="card-line">
            <div className="card">
                <img src={card_pic} alt="Card_pic" style={{"width": "100%"}}/>
                <div class="text-container">
                    <h4 className="card-title"><b><a href="#">Some Interesting Title</a></b></h4>
                    <p className="card-desc">Very long description, but still fits the container</p>
                </div>
            </div>

            <div className="card">
                <img src={card_pic} alt="Card_pic" style={{"width": "100%"}}/>
                <div class="text-container">
                    <h4 className="card-title"><b><a href="#">Some Interesting Title</a></b></h4>
                    <p className="card-desc">Very long description, but still fits the container</p>
                </div>
            </div>

            <div className="card">
                <img src={card_pic} alt="Card_pic" style={{"width": "100%"}}/>
                <div class="text-container">
                    <h4 className="card-title"><b><a href="#">Some Interesting Title</a></b></h4>
                    <p className="card-desc">Very long description, but still fits the container</p>
                </div>
            </div>
        </div>
    );
}

export default CardLine;