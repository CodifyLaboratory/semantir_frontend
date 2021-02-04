import React from 'react';
import '../assets/css/styles.css';
import semantir__logo from '../../pages/assets/img/semantir__logo.png';

const Header = () => {

    return (
        <header className='header'>
            <img src={semantir__logo} alt='semantir__logo'/>
                <nav className='nav'>
                    <a className='nav__link' href='#'>Продукты</a>
                    <a className='nav__link' href='#'>Тарифы</a>
                    <a className='nav__link' href='#'>Партнеры</a>
                    <a className='nav__link' href='#'>Блог</a>
                </nav>
                
                
        </header>
    )
}

export default Header;