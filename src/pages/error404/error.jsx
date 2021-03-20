import './error.css'
import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './../mainPage/assets/mainPage/Logo.svg'

const Error404 = () => {
    return(
        <div className='body'>
            <header className='header_error'>
                <div className='container_error'>
                    <Link className='Header_logo' to="/" ><img src={Logo} alt="Логотип Semantir" /></Link>
                    <nav>
                        <ul className='menu'>
                            <li className='a1_error'>Продукты</li>
                            <li className='a1_error'>Тарифы</li>
                            <li className='a1_error'>Партнёры</li>
                            <li className='a1_error'>Новости</li>
                        </ul>
                    </nav>
                </div> 
            </header>
            <div className="error-style"> 
                <div className="error-code">404</div>
                <div className="error-text">Хмм... Кажется что-то пошло не так!</div>
                <button className="b-error"><Link to='/'>Вернуться на главную</Link></button>
            </div>     
        </div>
    )
}
export default Error404