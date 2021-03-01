import React from "react";
import "../assets/css/Styles.css";
import magnifierLogo from '../../../pages/admin_panel/assets/img/magnifier.png'
import AdminMainHeader from './AdminMainHeader'

const AdminMain = () => {
  return (
    <div className="admin__main">
      <AdminMainHeader/>
      <div className="admin__main__iner">
        <div className="admin__main__iner__header">
          <div className="admin__main__iner__header__input">
            <input
              className="admin__main__iner__header__input__iner"
              placeholder="Опишите содержание"
            ></input>
          </div>
          <div>
            <button
              onClick={() => {
                alert(`it's work`);
              }}
              className="admin__main__iner__header__button"
            >
              
              Создать
            </button>
          </div>
        </div>

        <div className="admin__main__iner__header__text__box">
              
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
