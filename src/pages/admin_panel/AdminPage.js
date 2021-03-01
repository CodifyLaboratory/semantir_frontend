import React, {useState} from 'react';
import AdminNav from './companent/AdminNav';
import AdminHeader from './companent/AdminHeader';
import AdminMain from '../admin_panel/companent/AdminMain';
import AdminMainText from '../admin_panel/companent/admin_main/AdminMainText';

const AdminPage = () => {
    const [editorState, setEditorState] = useState('');

    return(
        <div className='admin__page'>
            <AdminNav/>
            <AdminHeader/>
            <AdminMain/>
            <AdminMainText editorState={editorState} setEditorState={setEditorState}/>
        </div>
    )
}

export default AdminPage;