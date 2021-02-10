import React from 'react';
import './mainPage.css';
import Logo from './assets/mainPage/Logo.svg';
import Sun from './assets/mainPage/Ellipse 10.svg';
import People from './assets/mainPage/Saly-10.svg';
import Hand from './assets/mainPage/White.svg';
import Blog from './assets/mainPage/PT.svg';
import Phone from './assets/mainPage/smartphone.svg';
import Shop from './assets/mainPage/online-shop.svg';
import Card1 from './assets/mainPage/about1.svg';
import Card2 from './assets/mainPage/about2.svg';
import Card3 from './assets/mainPage/about3.svg';
import Card4 from './assets/mainPage/about4.svg';
import Prev from './assets/mainPage/prev.svg';
import Next from './assets/mainPage/next.svg'
import Slick from "react-slick";
import Slider from "react-slick";


const MainPage = ()=> {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let slider = React.createRef()
    const test = 2000
    const next = () => {
      slider.slickNext();
    }
    const previous = () => {
      slider.slickPrev();
    }

return (
    <div className='div'>
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
        <main>
    <div className="hom">
    <div className="photo">
        <img src={Sun} alt="" className="img"/>
        <img src={People} alt="" className="img2"/>
    </div>
        <img src={Hand} alt="" className="img3"/>
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
    </main>
    <div className="product" id="product">
                <div>
                <h2>Semantir упростит и ускорит <br/> написание текстов</h2>
                </div>
                <div className="row">
                <div className='blog'>
                    <img src={Blog} alt="" className='img4'/>
                    <h3>Блог на сайте</h3>
                    <h6>Получите полноценную статью для блога на сайте из заголовка</h6>
                    </div>
                    <div className='blog'>
                    <img src={Phone} alt="" className='img4'/>
                    <h3>Социальные сети</h3>
                    <h6>Создайте пост для ваших социальных медиа из статьи</h6>
                    </div>
                    <div className='blog'>
                    <img src={Shop} alt="" className='img4'/>
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
                <img src={Card1} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Пост из статьи</h2>
                    <h5>Создайте текст поста для ваших социальных сетей из статьи в интернете</h5>
                    <img src={Card2} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Редактор</h2>
                    <h5>Наносите финальные штрихи в тексте прямо внутри Semantir используя возможности нашего редактора</h5>
                    <img src={Card3} alt="" className="img5"/>
                </div>
                <div className="card">
                    <h2>Оригинально</h2>
                    <h5>Текст созданный роботом всегда уникальный и поэтому упростит ваши задачи связанные с SEO</h5>
                    <img src={Card4} alt="" className="img5"/>
                </div>
            </div>
            <div className="pblock">
                <h1>Кому нужен Semantir:</h1>
                <Slider ref={c => slider = c} {...settings}>
                    <div key={1} className='slider'>
                        <h3>Маркетинговые агенства</h3>
                    </div>
                    <div key={2} className='slider'>
                        <h3>SMM-менеджеры</h3>
                    </div>
                    <div key={3} className='slider'>
                        <h3>SEO-специалисты</h3>
                    </div>
                    <div key={4} className='slider'>
                        <h3>копирайтеры</h3>
                    </div>
                    <div key={5} className='slider'>
                        <h3>Блогеры</h3>
                    </div>
                    <div key={6} className='slider'>
                        <h3>онлайн магазины</h3>
                    </div>
                </Slider>
        <button className="button2" onClick={previous}>
            <img src={Prev} alt="previous" className='img6'/>
          </button>
          <button className="button2" onClick={next}>
              <img src={Next} alt="next" className='img6'/>
          </button>
            </div>
            </div>
    </div>
    
    )
}

export default MainPage