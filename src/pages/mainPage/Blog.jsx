import  './mainPage.css'
import React from 'react';

const Blog = (props) => {
    return(
        <div className='blog'>
        <img src={props.pic} alt='blog' className='img4'/>
        <h3>{props.name}</h3>
        <h6>{props.description}</h6>
        </div>
    )
}
export default Blog