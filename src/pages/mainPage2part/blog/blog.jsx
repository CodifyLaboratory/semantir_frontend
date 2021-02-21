import React from 'react'
import Css from './blog.module.css'
import './../mainpage2part.css'
import Blog_photo from './../images/blog.svg'
import Slider from "react-slick";

const Blog = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className={Css.container_purple}>
            {/* <div className={Css.container}>
                <div className={`${Css.title} title color_white`}>Блог</div>
                <br/>
                <div className={Css.box}>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                </div>
            </div> */}
            <Slider {...settings}>
                <div>
                <div className={Css.container}>
                <div className={`${Css.title} title color_white`}>Блог</div>
                <br/>
                <div className={Css.box}>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <div>
                <div className={Css.container}>
                <div className={`${Css.title} title color_white`}>Блог</div>
                <br/>
                <div className={Css.box}>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                <div>
                <div className={Css.container}>
                <div className={`${Css.title} title color_white`}>Блог</div>
                <br/>
                <div className={Css.box}>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                    <div className={Css.box_left_right}>
                        <div className={Css.box_wrapp}>
                            <img className={Css.img} src={Blog_photo}/>
                            <div className={Css.box_title}>
                                Будущее маркетинга строится прямо сейчас          
                            </div>
                            <div className={Css.text}>
                                <div>
                                    Скорость и упрощение задач имеет большое значение для развития бизнеса.
                                </div>
                                <div>
                                    Наши алгоритмы помогут ускорить и автоматизировать процесс создания любого текстового контента для ваших сайтов, блогов, социальных сетей.
                                </div>
                            </div>
                            <br/>
                            <spon className={Css.read}>
                                <spon>Читать дальше</spon>
                            </spon>
                            <spon className={Css.data}>29.01.2021</spon>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </Slider>
        </div>
    )
}

export default Blog;