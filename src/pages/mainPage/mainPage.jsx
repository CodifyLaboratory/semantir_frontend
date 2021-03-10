import React, {useState} from 'react';
import './mainPage.css';
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
import Card from './Card';
import Blog2 from './Blog';
import Slider from "react-slick";



const MainPage = ()=> {

    const [card] = useState ([
        {
            pic: Card1,
            name: 'Робот - автор',
            description: 'Мы используем самые последние технологии искусственного интеллекта и обработки естественного языка (Natural Language Processing) для того, чтобы помочь вам с созданием контента.'
        },
        {
            pic: Card2,
            name: 'Пост из статьи',
            description: 'Создайте текст поста для ваших социальных сетей из статьи в интернете',
        },
        {
            pic: Card3,
            name: 'Редактор',
            description: 'Наносите финальные штрихи в тексте прямо внутри Semantir используя возможности нашего редактора',
        },
        {
            pic: Card4,
            name: 'Оригинально',
            description: 'Текст созданный роботом всегда уникальный и поэтому упростит ваши задачи связанные с SEO',
        }
    ]) 

    let cards = card.map((item)=>{
       return <Card name={item.name} description={item.description} pic={item.pic} /> 
    })

    const [blog] = useState ([
        {
            pic: Blog,
            name: 'Блог на сайте',
            discription: 'Получите полноценную статью для блога на сайте из заголовка',
        },
        {
            pic: Phone,
            name: 'Социальные сети',
            discription: 'Создайте пост для ваших социальных медиа из статьи',
        },
        {
            pic: Shop,
            name: 'Онлайн магазины',
            discription: 'Генерируйте красивые описания для товаров в онлайн магазинах',
        }
    ])

    let blogs = blog.map((item)=>{
        return <Blog2 name={item.name} description={item.discription} pic={item.pic} />
    })

    const arr = ['Маркетинговые агенства', 'SMM-менеджеры', 'SEO-специалисты', 'Копирайтеры', 'Блогеры', 'Онлайн магазины']
    const newArr = arr.map((item)=><div key={item} className='slider'><h3>{item}</h3></div>)
    const [prevState, setPrevState] = useState(true);
    const [nextState, setNextState] = useState(false); 


    const settings = {
        dots: false, 
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: (e) => {
            console.log(e);
            if(e === 0){
            setPrevState(true)
            }else{
                setPrevState(false)
            }
            if(e === 3){
                setNextState(true)
            }else{
                setNextState(false)
            }
        }
    };
    let slider = React.createRef()

    const next = () => {
      slider.slickNext();
    }
    const previous = () => {
      slider.slickPrev();
    }

return (
    <div>
    <div className='div'>
        <main id="main">
    <div className="hom">
    <div className="photo">
        <img src={Sun} alt="Солнце" className="img"/>
        <img src={People} alt="Человек" className="img2"/>
    </div>
        <img src={Hand} alt="Рука" className="img3"/>
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
                    {blogs}
                </div>
            </div>
            <div className="about_semantir">
            <div className="about-row">
                {cards}
            </div>
            </div>
            <div className="pblock">
                <h1>Кому нужен Semantir:</h1>
                <Slider  ref={c => slider = c} {...settings}>
                    {newArr}
                </Slider>
            <button disabled={prevState} className="button2" onClick={previous}>
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" alt="стрелка" style={{transform: 'rotate(180deg)'}}>
            <circle cx="25" cy="25" r="24.5" transform="rotate(-180 25 25)" fill="white" stroke="black" cursor="pointer"/>
            <path d="M19.33 33.23L21.1 35L31 25.1L21.1 15.2L19.33 16.97L27.46 25.1L19.33 33.23Z" fill={!prevState ? "black" : "grey"}/>
            </svg>
            </button>
            <button disabled={nextState} className="button1" onClick={next}>
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" alt="стрелка">
            <circle cx="25" cy="25" r="24.5" transform="rotate(-180 25 25)" fill="white" stroke="black" cursor="pointer"/>
            <path d="M19.33 33.23L21.1 35L31 25.1L21.1 15.2L19.33 16.97L27.46 25.1L19.33 33.23Z" fill={!nextState ? "black" : "grey"}/>
            </svg>
            </button>
            </div>
            </div>
    </div>

    )
}

export default MainPage