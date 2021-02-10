import React from 'react';
import './mainPage.css';
import Logo from './assets/mainPage/Logo.svg';

const MainPage = ()=> {

const test = 2000

return (
    <div>
        <header>
            <div className='container'>
                <img className='logo' src={Logo} />
                <nav>
                    <ul className='menu'>
                        <li><a className='a1' href="#product">Продукты</a></li>
                        <li><a className='a1' href="#">Тарифы</a></li>
                        <li><a className='a1' href="#">Партнёры</a></li>
                        <li><a className='a1' href="#">Новости</a></li>
                    </ul>
                    <button>Вход</button>
                 </nav>
            </div> 
        </header>
    </div>
)
}