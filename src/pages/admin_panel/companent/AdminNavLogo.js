import React from "react";
import adminNavLogo from "../assets/img/adminNavLogo.png";

const AdminNavLogo = () => {
  return (
    <div>

      <a href="#">

        <img
          className="admin__nav__logo"
          id="admin__pages__logo"
          src={adminNavLogo}
          alt="admin__nav__logo"
        />

      </a>
      
    </div>
  );
};

export default AdminNavLogo;
