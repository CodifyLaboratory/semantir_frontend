import './error.css'
import React from 'react';
import {Link} from 'react-router-dom';
import Gelaxy from './images/Error404.svg'

const Error404 = () => {
    return(
        <body className='body'>
        <div>
            <div className="error-style"> 
            <img src={Gelaxy} alt="Gelaxy" className='gelaxy-error'/>         
                <div className="error-code">404</div>
                <div className="error-text">Хмм... Кажется что-то пошло не так!</div>
                <button className="b-error"><Link to='/'>Вернуться на главную</Link></button>
            </div>     
        </div>
        </body>
    )
}
export default Error404