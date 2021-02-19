import React from "react";
import link_home from "../../../pages/admin_panel/assets/img/home_logo_link.png";
import "../assets/css/Styles.css";

const AdminNavLink = () => {
  return (
    <div className='admin__nav__link'>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          Семантир
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          SMM-Сокращение
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          Планнер
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          Интеграция
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          Рерайтинг
        </div>
      </a>
      <a href="#" className="admin__nav__link__header">
        <div className='admin__nav__link__main'>
          <img src={link_home} alt="link_home" />
          Семантир
        </div>
      </a>
    </div>
  );
};

export default AdminNavLink;
