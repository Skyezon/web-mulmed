import React from 'react'
import polar from '../../img/polar-bear.png'

const isi = ['Home','Sinopsis','Film','Crew']

const NavbarGen = () => {
    const navbarRes = isi.map((satu) =>{
    return <a className='header__navbar--item' href={`#${satu}`}>{satu}</a>
    }) 
return (<div className='header__navbar--list'>{navbarRes}</div>);
}

const LogoGen = () => {
    return(
        <div className='header__navbar--logo'>
            <img src={polar} alt='ice-bear' />
            <span>Ice bear</span>
        </div>
    )
}

function navbar(){
    return(
        <nav className='header__navbar'>
            <LogoGen />
            <NavbarGen />
        </nav>
    )
}

export default navbar;