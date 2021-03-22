import React from 'react'
import Css from './blogcards.module.css'

const Blogcards = (props) => {
    return (
        <div className={Css.box}>
            <div className={Css.box_wrapp}>
                <img className={Css.img} src={props.img}/>
                <div className={`${Css.box_title} font_middle`}>
                    {props.title}          
                </div>
                 <div className={`${Css.text} font_small`}>
                    {props.text}
                </div>
                <spon className={`${Css.read} font_small`}>Читать дальше</spon>
                <spon className={Css.arrow}></spon>
                <spon className={Css.data}>{props.data}</spon>
            </div>
        </div>
    )
}

export default Blogcards;