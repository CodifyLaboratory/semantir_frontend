import React from 'react';

const NavButton = (props) => {


    return (
        <button className='nav__button' id='nav__button' onClick={()=>{
                alert(`it's button work`)
            }}>

            Вход

        </button>
    )
}

export default NavButton;