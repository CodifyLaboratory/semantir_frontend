import  './mainPage.css'
import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
        <h2>{props.name}</h2>
        <h5>{props.description}</h5>
        <img src={props.pic} className="img5"/>
        </div>
    )
}
export default Card