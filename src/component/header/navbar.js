import React from 'react'

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
            <span>Kelompok IceBear</span>
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