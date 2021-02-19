import React from 'react';
import '../assets/css/Styles.css'
import magnifierLogo from '../../../pages/admin_panel/assets/img/magnifier.png'

const AdminHeader = () => {


    return(
        <div className='admin__header'>
            <div className='admin__header__iner'>
                <input type='search' className='admin__header__input' placeholder='Поиск'></input>
                    <div>
                        <div className='admin__header__toolbar'>
                            arman@gmail.com
                        </div>
                    </div>
            </div>
        </div>
    )
} 


export default AdminHeader;