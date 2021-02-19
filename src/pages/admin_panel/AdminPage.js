import React from 'react';
import AdminNav from './companent/AdminNav';
import AdminHeader from './companent/AdminHeader';
import AdminMain from '../admin_panel/companent/AdminMain'

const AdminPage = () => {


    return(
        <div className='admin__page'>
            <AdminNav/>
            <AdminHeader/>
            <AdminMain/>
        </div>
    )
}

export default AdminPage;