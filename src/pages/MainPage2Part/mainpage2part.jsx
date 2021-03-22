import React from 'react'
import Footer from '../../components/footer/footer'
import Blog from '../../components/blog/blog'
import Partners from '../../components/partners/partners'
import Tariffs from '../../components/tariffs/tariffs'
import Css from './mainpage2part.module.css'

const MainPage2Part = () => {
  return (
    <div className={Css.container}>
      <Tariffs/>
      <Partners/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default MainPage2Part;