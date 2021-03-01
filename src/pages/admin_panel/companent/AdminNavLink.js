import React from "react";
import link_home from "../../../pages/admin_panel/assets/img/home_logo_link.png";
import link_menu from "../../../pages/admin_panel/assets/img/link_menu.png";
import cil_calendar_check from "../../../pages/admin_panel/assets/img/cil_calendar-check.png";
import grommet_icons_integration from "../../../pages/admin_panel/assets/img/grommet-icons_integration.png";
import jam_write from "../../../pages/admin_panel/assets/img/jam_write.png";
import down_logo from "../../../pages/admin_panel/assets/img/down_logo.png";



import "../assets/css/Styles.css";

const AdminNavLink = () => {
  return (
    <div className='admin__nav__link'>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" className='admin__nav__link__header__logo'/>
          Семантир
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_menu} alt="link_home" className='admin__nav__link__header__logo'/>
          SMM-Сокращение
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={cil_calendar_check} alt="link_home" className='admin__nav__link__header__logo'/>
          Планнер
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={grommet_icons_integration} alt="link_home" className='admin__nav__link__header__logo'/>
          Интеграция
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={jam_write} alt="link_home" className='admin__nav__link__header__logo'/>
          Рерайтинг
        </div>
      </a>
    </div>
  );
};

export default AdminNavLink;
