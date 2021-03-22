import React from 'react'
import Css from './footer.module.css'
import './../main2partcomponents.css'
import LeftPhoto from './../images/footer_photoleft.svg'
import RightPhoto from './../images/footer_photoright.svg'
import Logo from'./../images/footer_logo.svg'
import Twitter from'./../images/twitter.svg'

const Footer = () => {
    return(
      <footer>
        <div className={`${Css.container_tryfree}`}>
          <div className={Css.container1}>
            <div className={`${Css.tryfree_box}`}>
              <img className={`${Css.img}`} src={LeftPhoto}/>
              <div>
                <div className={Css.box_media}>
                  <div className={`${Css.title} title color_white`}>Попробуйте Semantir бесплатно</div>
                  <img className={`${Css.img_media} `} src={RightPhoto}/>
                </div>
                <div className={Css.box_button_email}>
                  <form>
                    <input type = "email" placeholder="Ваш Email" className={`${Css.tryfree_email}`}/>
                    <button className={`${Css.button}`}>Начать</button>
                  </form>
                </div>
              </div>
              <img className={`${Css.img}`} src={RightPhoto}/>
            </div>
          </div>
        </div>
        <div className={`${Css.footer_container}`}>
          <div className={Css.container2}> 
            <div className={`${Css.footer_box}`}>
              <img className={`${Css.logo}`} src={Logo}/>
              <div>
                  <ul className={`${Css.footer_box_infowords} font_middle`}>
                    <li>Продукты</li>
                    <li>Тарифы</li>
                    <li>Партнеры</li>
                    <li>Блог</li>
                  </ul>
                  <div className={`${Css.rule} font_small`}>Правило пользования и соглашение</div>
              </div>
              <div className={Css.social}>
                <img src={Twitter} className={Css.social}/>
              </div>
            </div>
            <div className={`${Css.last_words} font_small`}>Копирайтинг 2021 Бишкек</div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;