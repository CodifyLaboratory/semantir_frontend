import React from 'react';
import './mainPage.css';
import Photo from './assets/mainPage/Logo.svg';
import Photo1 from './assets/mainPage/Ellipse 10.svg';
import Photo2 from './assets/mainPage/Saly-10.svg';
import Photo3 from './assets/mainPage/White.svg';
import Photo4 from './assets/mainPage/PT.svg';
import Photo5 from './assets/mainPage/smartphone.svg';
import Photo6 from './assets/mainPage/online-shop.svg';
import Photo7 from './assets/mainPage/about1.svg';
import Photo8 from './assets/mainPage/about2.svg';
import Photo9 from './assets/mainPage/about3.svg';
import Photo10 from './assets/mainPage/about4.svg';

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
                        <li><a className='a1' href="#">Тарифы</a></li>
                        <li><a className='a1' href="#">Партнёры</a></li>
                        <li><a className='a1' href="#">Новости</a></li>
                    </ul>
                    <button>Вход</button>
                 </nav>
            </div> 
        </header>

        <main>
            <div className="hom">
                <div className="photo">
                    <img src={Photo1} alt="" className="img"/>
                    <img src={Photo2} alt="" className="img2"/>
                </div>
                <img src={Photo3} alt="" className="img3"/>
                    <div className="hom-text">
                    <h1>Превращайте 
идеи в контент</h1>
<d2 className='description'>Semantir- это искусственный интеллект гененрирующий 
лаконичные тексты для блогов или постов в социальных 
сетях из нескольких ключевых слов.</d2>
<br/>
<button className="b">Создать текст</button>
                    </div>
            </div>
            <div className="product" id="product">
                <div>
                <h2>Semantir упростит и ускорит <br/> написание текстов</h2>
                </div>
                <div className="row">
                <div className='blog'>
                    <img src={Photo4} alt="" className='img4'/>
                    <h3>Блог на сайте</h3>
                    <h6>Получите полноценную статью для блога на сайте из заголовка</h6>
                    </div>
                    <div className='blog'>
                    <img src={Photo5} alt="" className='img4'/>
                    <h3>Социальные сети</h3>
                    <h6>Создайте пост для ваших социальных медиа из статьи</h6>
                    </div>
                    <div className='blog'>
                    <img src={Photo6} alt="" className='img4'/>
                    <h3>Онлайн магазины</h3>
                    <h6>Генерируйте красивые описания для товаров в онлайн магазинах</h6>
                    </div>
                </div>
            </div>

            <div className="about">
            <div className="about-row">
                <div className="card">
                <h2>Робот - автор</h2>
                <h5>Мы используем самые последние технологии
искусственного интеллекта и обработки естественного языка (Natural Language Processing) для того, чтобы помочь вам с созданием контента.</h5>
                <img src={Photo7} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Пост из статьи</h2>
                    <h5>Создайте текст поста для ваших социальных сетей из статьи в интернете</h5>
                    <img src={Photo8} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Редактор</h2>
                    <h5>Наносите финальные штрихи в тексте прямо внутри Semantir используя возможности нашего редактора</h5>
                    <img src={Photo9} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Оригинально</h2>
                    <h5>Текст созданный роботом всегда уникальный и поэтому упростит ваши задачи связанные с SEO</h5>
                    <img src={Photo10} alt="" className="img5"/>
                </div>
            </div>
            <div className="pblock">
                <h1>Кому нужен Semantir:</h1>
            </div>
            </div>
        </main>
    </div>
    )
}

export default MainPage