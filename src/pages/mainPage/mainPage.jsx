import React from 'react';
import './mainPage.css';
import Photo from './assets/mainPage/Logo.svg';
import Photo1 from './assets/mainPage/Ellipse 10.svg';
import Photo2 from './assets/mainPage/Saly-10.svg'


const MainPage = ()=> {

    const test = 2000
    return (
        <div>
        <header>
            <div className='container'>
                <img className='logo' src={Photo} />
                <nav>
                    <ul className='menu'>
                        <li><a className='a1' href="#product">Продукты</a></li>
                        <li><a className='a1' href="#product">Тарифы</a></li>
                        <li><a className='a1' href="#product">Партнёры</a></li>
                        <li><a className='a1' href="#product">Новости</a></li>
                    </ul>
                    <button>Вход</button>
                </nav>
            </div> 
        </header>
        <div className='conteiner'>
            <div className='conteiner-flex'>
                <main className='content'>
                    <img src={Photo1} alt="" className="img"/>
                    <img src={Photo2} alt="" className="img2"/>
                </main>
            </div>
        </div>
        </div>
    )
}

export default MainPage