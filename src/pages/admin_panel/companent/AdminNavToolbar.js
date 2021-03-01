import React from "react";
import "../assets/css/Styles.css";
import downLogo from "../../../pages/admin_panel/assets/img/down_logo.png";
import bx_bx_log_out from "../../../pages/admin_panel/assets/img/bx_bx-log-out.png";
import exit_logo from "../../../pages/admin_panel/assets/img/exit_logo.png";

const AdminNavToolbar = () => {
  return (
    <div className="admin__nav__toolbar">
      <div className="admin__nav__toolbar__intro">
        <div>
          <a href="#" className="admin__nav__toolbar__link">
            <img src={downLogo} className="admin__nav__toolbar__link__logo__save" />
            Сохраненные
          </a>
        </div>
        <div>
          <a href="#" className="admin__nav__toolbar__link">
            <img
              src={exit_logo}
              className="admin__nav__toolbar__link__logo__exit"
            /> Выход
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminNavToolbar;
