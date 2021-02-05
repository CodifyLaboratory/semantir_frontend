import React from 'react';
import '../assets/css/styles.css';
import semantir__logo from '../../pages/assets/img/semantir__logo.png';

const Header = () => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__iner'>
                    <a href="#"><img className="semantir__logo" id="semantir__logo" src={semantir__logo} alt='semantir__logo'/></a>
                        <nav className='nav'>
                            <a className='nav__link' href='#'>Продукты</a>
                            <a className='nav__link' href='#'>Тарифы</a>
                            <a className='nav__link' href='#'>Партнеры</a>
                            <a className='nav__link' href='#'>Блог</a>
                        </nav>

                    <button className='nav__button' id='nav__button' onClick={()=>{
                        alert(`it's button work`)
                    }}>

                        Вход

                    </button>

                </div>
            </div>   
                
        </header>
    )
}

export default Header;