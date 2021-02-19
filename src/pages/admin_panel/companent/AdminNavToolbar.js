import React from 'react';
import '../assets/css/Styles.css';
import downLogo from '../../../pages/admin_panel/assets/img/down_logo.png'


const AdminNavToolbar = () => {

    return (
        <div className='admin__nav__toolbar'>
            <div>
                <a href='#' className='admin__nav__toolbar__link'>
                    <img src={downLogo}/>
                    Сохраненные
                </a>
            </div>
            <div>
                <a href='#' className='admin__nav__toolbar__link'>
                    Выход
                </a>
            </div>
        </div>
    )
}

export default AdminNavToolbar;