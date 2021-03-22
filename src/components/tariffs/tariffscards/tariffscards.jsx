import React from 'react';
import Css from './tariffscards.module.css'

const TariffsCards = (props) => {
    return(
        <div>
            <div className={`${Css.box_title}`}>
                <img src={props.img}/>
                <div>{props.title}</div>
            </div>
            <div className={`font_middle`} >
                {
                    props.children
                }
            </div>
            <div className={`${Css.price}`}>{props.price} руб</div>
            <button className={Css.button}>Выбрать тариф</button>
        </div>
    )
}

export default TariffsCards;