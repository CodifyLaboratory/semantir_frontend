import React from 'react'
import Css from './blog.module.css'
import './../main2partcomponents.css'
import Blog_photo from './../images/blog.svg'
import Blogcards from './blogcards/blogcards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
    return(
        <div className={Css.container_purple}>
            <div className={`${Css.container}`}>
                <div className={`${Css.title} title color_white`}>Блог</div>
                <Slider {...settings}>
                <div className={Css.box}>
                    <Blogcards
                        img={Blog_photo}
                        title={'Почему длина описания имеет значение'}
                        text={'Сегодня, покупатели онлайн используют несколько устройств, тратят много времени чтобы найти продукт который им нужен онлайн, даже могут искать его на разных языках, поэтому выделяться в объявлениях становится все сложнее.'}
                        data={'29.01.2021'}
                    />
                    <Blogcards
                        img={Blog_photo}
                        title={'Будущее маркетинга строится прямо сейчас'}
                        text={'Скорость и упрощение задач имеет большое значение для развития бизнеса.Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.'}
                        data={'29.01.2021'}
                    />
                </div>
                <div className={Css.box}>
                    <Blogcards
                        img={Blog_photo}
                        title={'Почему длина описания имеет значение'}
                        text={'Сегодня, покупатели онлайн используют несколько устройств, тратят много времени чтобы найти продукт который им нужен онлайн, даже могут искать его на разных языках, поэтому выделяться в объявлениях становится все сложнее.'}
                        data={'29.01.2021'}
                    />
                    <Blogcards
                        img={Blog_photo}
                        title={'Будущее маркетинга строится прямо сейчас'}
                        text={'Скорость и упрощение задач имеет большое значение для развития бизнеса.Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.'}
                        data={'29.01.2021'}
                    />
                </div>
                <div className={Css.box}>
                    <Blogcards
                        img={Blog_photo}
                        title={'Почему длина описания имеет значение'}
                        text={'Сегодня, покупатели онлайн используют несколько устройств, тратят много времени чтобы найти продукт который им нужен онлайн, даже могут искать его на разных языках, поэтому выделяться в объявлениях становится все сложнее.'}
                        data={'29.01.2021'}
                    />
                    <Blogcards
                        img={Blog_photo}
                        title={'Будущее маркетинга строится прямо сейчас'}
                        text={'Скорость и упрощение задач имеет большое значение для развития бизнеса.Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.'}
                        data={'29.01.2021'}
                    />
                </div>
                </Slider>
            </div>
        </div>
    )
}

export default Blog;