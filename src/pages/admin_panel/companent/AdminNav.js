import React from 'react';
import adminNavLogo from '../assets/img/adminNavLogo.png';
import '../assets/css/Styles.css'
import AdminNavLogo from '../companent/AdminNavLogo';
import AdminNavLink from '../companent/AdminNavLink';
import AdminNavToolbar from '../companent/AdminNavToolbar'

const AdminNav = () => {


    return (
        <div className='admin__nav'>
            <AdminNavLogo/>
            <AdminNavLink/>
            <AdminNavToolbar/>
        </div>
    )
}

export default AdminNav;