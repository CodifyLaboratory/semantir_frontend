import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import Logo from './../mainPage/assets/mainPage/Logo.svg';

const Header = ()=> {
return (
    <div>
        <header>
            <div className='container'>
                <Link className='Header_logo' to="/" ><img src={Logo} alt="Логотип Semantir" /></Link>
                <nav>
                    <ul className='menu'>
                        <li><a className='a1' href="#product">Продукты</a></li>
                        <li><a className='a1' href="#tariffc">Тарифы</a></li>
                        <li><a className='a1' href="#partners">Партнёры</a></li>
                        <li><a className='a1' href="#blog">Новости</a></li>
                    </ul>
                    <button><Link to="/auth">Вход</Link></button>
                 </nav>
            </div> 
        </header>
    </div>
)
}
export default Header 