import React from 'react';
import '../assets/css/styles.css';
// import semantir__logo from '../../pages/assets/img/semantir__logo.png';
import logo from '../../pages/assets/img/Logo.svg'
import NavButton from './NavButton';
import Nav from './Nav';

const Header = (props) => {

    return (
        <header className='header'>
        
            <div className='container'>
                <div className='header__iner'>
                    
                <a href="#start__page">   

                    <img className="semantir__logo" id="semantir__logo" 
                        src={logo} alt='semantir__logo'/>
                        
                </a>
                
                <Nav/>
                <NavButton/>


                </div>
            </div>   
                
        </header>
    )
}

export default Header;