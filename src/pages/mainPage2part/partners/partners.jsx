import React from 'react'
import Css from './partners.module.css'
import './../mainpage2part.css'
import PartnersLogo from './../images/partners_logo.svg'

const Partners = () =>{
    return(
        <div className={Css.container}>
            <div className={`${Css.title} title`}>Партнёры</div>
            <div className={Css.box}>
                <img src={PartnersLogo}/>
                <img src={PartnersLogo}/>
                <img src={PartnersLogo}/>
                <img src={PartnersLogo}/>
            </div>
        </div>
    )
}

export default Partners;