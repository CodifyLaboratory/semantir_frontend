import React from 'react'
import Css from './tariffs.module.css'
import './../mainpage2part.css'
import ArrowLeft from './../images/tariffs_arrowleft.svg'
import ArrowRight from './../images/tariffs_arrowright.svg'
import Trial from './../images/tariffs_trial.svg'
import Author from './../images/tariffs_author.svg'
import Agency from './../images/tariffs_agency.svg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Tariffs = () =>{
    return(
        <div className={Css.container}>
            <div className='title'>Тарифы</div>
            <div className={`${Css.tariffs_container}`}>
                <img src={ArrowLeft}/>
                <div className={`${Css.box_trial_agency}`}>
                    <div className={Css.box_title_trial_author}>
                        <img src={Trial}/>
                        <spon>Trial</spon>
                    </div>
                    <div className={`${Css.text_trial_author}`}>
                        <div>10 текстов</div>
                        <br/>
                        <div>Сохраненные тексты</div>
                    </div>
                    <div className={`${Css.price_trial_agency}`}>0 руб</div>
                    <button className={Css.button}>Выбрать тариф</button>
                </div>
                <div className={`${Css.box_author}`}>
                    <div className={Css.box_title_trial_author}>
                        <img src={Author}/>
                        <spon>Автор</spon>
                    </div>
                    <div className={`${Css.text_trial_author}`}>
                        <div>500 текстов </div>
                        <br/>
                        <div>SMM-сокращение</div>
                    </div>
                    <div className={`${Css.price_author}`}>790 руб</div>
                        <button className={Css.button}>Выбрать тариф</button>
                </div>
                <div className={`${Css.box_trial_agency}`}>
                    <div className={`${Css.box_title_agency}`}>
                        <img src={Agency}/>
                        <spon>Агенство</spon>
                    </div>
                    <div className={`${Css.text_agency}`} >
                        <div>Безлимитный </div>
                        <div>+ Планнер</div>
                        <div>+ Рерайтинг</div>
                        <div>+ Интеграции</div>
                    </div>
                    <div className={`${Css.price_trial_agency}`}>1200 руб</div>
                        <button className={Css.button}>Выбрать тариф</button>
                </div>
                <img src={ArrowRight}/>
            </div>
        </div>
    )
}

export default Tariffs; 