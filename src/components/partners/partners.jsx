import React from 'react'
import Css from './partners.module.css'
import './../main2partcomponents.css'
import Adobe from './../images/adobe.svg'
import Epam from './../images/epam.svg'
import Mailru from './../images/mailru_group.svg'
import Sber from './../images/sber.png'

const Partners = () =>{
    return(
        <div className={Css.container}>
            <div className={`${Css.title} title`}>Партнёры</div>
            <div className={Css.box}>
                <img src={Mailru} className={Css.mailru}/>
                <img src={Adobe} className={Css.img}/>
                <img src={Epam} className={Css.img}/>
                <img src={Sber} className={Css.sber}/>
            </div>
        </div>
    )
}

export default Partners;