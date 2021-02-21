import React from 'react'
import Css from './footer.module.css'
import LeftPhoto from './../images/footer_photoleft.svg'
import RightPhoto from './../images/footer_photoright.svg'
import Logo from'./../images/footer_logo.svg'
import Facebook from'./../images/facebook_logo.svg'
import Instagram from'./../images/instagram_logo.svg'

const Footer = () => {
    return(
      <footer>
        <div className={`${Css.container_tryfree}`}>
          <div className={Css.container1}>
            <div className={`${Css.tryfree_box}`}>
              <img className={`${Css.img}`} src={LeftPhoto}/>
              <div>
                <div className='title color_white'>Попробуйте Semantir бесплатно</div>
                <br/>
                <input type = "email" placeholder="Ваш Email" className={`${Css.tryfree_email}`}/>
                <button className={`${Css.button}`}>Начать</button>
              </div>
              <img className={`${Css.img}`} src={RightPhoto}/>
            </div>
          </div>
        </div>
        <div className={`${Css.footer_container}`}>
          <div className={Css.container2}> 
            <div className={`${Css.footer_box}`}>
              <img className={`${Css.logo}`} src={Logo}/>
              <div className={Css.footer_infowords}>
                <div>Продукты</div>
                <div>Тарифы</div>
                <div>Партнеры</div>
                <div>Блог</div>
              </div>
              <img src={Facebook}className={Css.facebook}/>
              <img src={Instagram} className={Css.instagram}/>
            </div>
            <div className={Css.wrapp_rule}>
            <p className={`${Css.rule}`}>Правило пользования и соглашение</p>
            </div>
            <div className={`${Css.footer_end}`}>Копирайтинг 2021 Бишкек</div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;