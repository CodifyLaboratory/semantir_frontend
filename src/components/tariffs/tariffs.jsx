import React from 'react'
import Css from './tariffs.module.css'
import './../main2partcomponents.css'
import ArrowLeft from './../images/tariffs_arrowleft.svg'
import ArrowRight from './../images/tariffs_arrowright.svg'
import TariffsCards from './tariffscards/tariffscards'
import Trial from './../images/tariffs_trial.svg'
import Author from './../images/tariffs_author.svg'
import Agency from './../images/tariffs_agency.svg'

const Tariffs = () =>{
    return(
        <div className={Css.container}>
            <div className='title'>Тарифы</div>
            <div className={`${Css.tariffs_container}`}>
                <img src={ArrowLeft}/>
                <div className={Css.box_trial_agency}>
                    <TariffsCards
                       img={Trial}
                       title={'Trial'}
                       price={0}
                    >
                        <div className={Css.text_trial}>
                            <div>10 текстов</div>
                            <div>Сохраненные тексты</div>
                        </div>
                    </TariffsCards>
                </div>
                <div className={`${Css.box_author} color_white`}>
                    <TariffsCards
                        img={Author}
                        title={'Автор'}
                        price={700}      
                    >
                        <div className={Css.text_author}>
                            <div>500 текстов</div>
                            <div>SMM-сокращение</div>
                        </div>
                    </TariffsCards>
                </div>
                <div className={Css.box_trial_agency}>
                    <TariffsCards
                        img={Agency}
                        title={'Агентсво'}
                        price={1200}
                    >
                        <div className={Css.text_agency}>
                            <div>Безлимитный</div>
                            <div>+ Планнер</div>
                            <div>+ Рерайтинг</div>
                            <div>+ Интеграции</div>
                        </div>
                    </TariffsCards>
                </div>
                <img src={ArrowRight}/>
            </div>
        </div>
    )
}

export default Tariffs; 