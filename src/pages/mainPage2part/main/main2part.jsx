import React from 'react'
import Css from './main2part.module.css'

const MainPage2Part = () =>{
  return(
      <div className={`${Css.container}`}>
         <div className={`${Css.tarifiword}`} align="center">Тарифы</div>
         <div className={`${Css.tarifi_flexbox}`} align='center'>
            <img width="30px" height="30px"/>
            <div className={`${Css.tarifi_flexchild}`}>
              <div className={`${Css.tarifi_firstword}`}>
                  <img width='50px' height='36px'/>
                  <spon>Trial</spon>
              </div>
              <div className={`${Css.tarifi_text}`}>
                  <div>10 текстов</div>
                  <br/>
                  <div>Сохраненные тексты</div>
              </div>
              <div className={`${Css.price}`}>0 руб</div>
              <button className={`${Css.tarifi_button}`}>Выбрать тариф</button>
            </div>
            <div className={`${Css.tarifi_flexchild2}`}>
            <div className={`${Css.tarifi_firstword_author}`}>
                  <img width='50px' height='36px'/>
                  <spon>Автор</spon>
              </div>
              <div className={`${Css.tarifi_text}`}>
                  <div>500 текстов </div>
                  <br/>
                  <div>SMM-сокращение</div>
              </div>
              <div className={`${Css.price}`}>790 руб</div>
              <button className={`${Css.tarifi_button}`}>Выбрать тариф</button>
            </div>
            <div className={`${Css.tarifi_flexchild3}`}>
              <div className={`${Css.tarifi_firstword_agency}`}>
                  <img width='50px' height='36px'/>
                  <spon>Агенство</spon>
              </div>
              <div className={`${Css.tarifi_text_agency}`} align="start">
                  <div>Безлимитный </div>
                  <div>+ Планнер</div>
                  <div>+ Рерайтинг</div>
                  <div>+ Интеграции</div>
              </div>
              <div className={`${Css.price}`}>1200 руб</div>
            <button className={`${Css.tarifi_button}`}>Выбрать тариф</button>
            </div>
            <img  width="30px" height="30px"/>
         </div>
         <div className={`${Css.partnersword}`} align="center">Партнёры</div>
         <div className={`${Css.partners_flexbox}`}>
           <img width="269.12px" height="234px"/>
           <img width="269.12px" height="234px"/>
           <img width="269.12px" height="234px"/>
           <img width="269.12px" height="234px"/>
         </div>
         <br/>
         <br/>
         <br/>
         <h1 align="center">Блог</h1>
         <br/>
         <br/>
         <br/>
         <div className={`${Css.containet_tryfree}`}>
         <div className={`${Css.tryfree_flexbox}`}>
            <img width="172" height="151px" className={`${Css.tryfree_img}`}/>
            <div width="100%">
              <div className={`${Css.tryfree_word}`}>Попробуйте Semantir бесплатно</div>
              <form>  {/*Это надо ? form*/}
              <input type = "email" class="reg" placeholder="Ваш Email" className={`${Css.tryfree_email}`}/>
              <button className={`${Css.tryfree_button}`}>Начать</button>
              </form>
            </div>
            <img width="172" height="151px" className={`${Css.tryfree_img}`}/>
         </div>
         </div>
      </div>
  )
}

export default MainPage2Part;