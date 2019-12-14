import React from 'react'
import LogoGen from './logoGen'

const isi = ['Home','Sinopsis','Film','Crew']

const NavbarGen = () => {
    const navbarRes = isi.map((satu) =>{
    return <a className='header__navbar--item' href={`#${satu}`}>{satu}</a>
    }) 
return (<div className='header__navbar--list'>{navbarRes}</div>);
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