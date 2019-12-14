import React from 'react'
import polar from '../../img/polar-bear.png'


const LogoGen = () => {
    return(
        <div className='header__navbar--logo'>
            <img src={polar} alt='ice-bear' />
            <span>Ice bear</span>
        </div>
    )
}

export default LogoGen