import React, { useState } from 'react'
import './Navbar.css'
import { IoClose, IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { FullLogo, FullWhiteLogo } from '../../assets/logo'
import { goToSection } from '../../customHooks/goToSection'


const Navbar = () => {
    
    const [navbarMenu, setNavbarMenu] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);

    navbarMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "";
    
    const ifNavbarActive = (value1, value2) => {
        return navbarActive ? value1 : value2;
    };
    
    window.onscroll = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setNavbarActive(true);
        } else {
            setNavbarActive(false);
        }
    };



    return (
        <nav className={`navbar ${ifNavbarActive('navbar--scroll', '')}`} >
            <div className="flex items-center justify-between w-full responsive ">
                <Link to='/' className="relative">
                    <FullWhiteLogo className={`absolute h-8 md:h-10  transition duration-300 ${ifNavbarActive('opacity-0', 'opacity-100')}`}/>
                    <FullLogo className={`h-8 md:h-10  transition duration-300 ${ifNavbarActive('opacity-100', 'opacity-0')}`}/>
                </Link>
                <button onClick={() =>setNavbarMenu(!navbarMenu ? true : false)} className={`relative text-4xl ${ifNavbarActive('text-entrust-blue', 'text-white')} link-text link-text--red lg:hidden`}>
                    <div className="absolute inset-0"></div>
                    <IoMenu/>
                </button>
                <div className={`navbar__menu ${navbarMenu ? 'navbar__menu--active' : ''}`}>
                    <div className="relative flex items-center justify-between w-full h-16 px-4 text-3xl lg:hidden">
                        <FullWhiteLogo className={`h-8`}/>
                        <div className="" onClick={()=>setNavbarMenu(false)}>
                            <IoClose/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-6 text-2xl font-medium text-center lg:flex-row lg:space-y-0 lg:-mt-16 lg:text-base lg:space-x-8 xl:space-x-12">
                        <span className="cursor-pointer link-text link-text--red" onClick={()=>goToSection('', setNavbarMenu)}>Home</span>
                        <span className="cursor-pointer link-text link-text--red" onClick={()=>goToSection('#about', setNavbarMenu)}>About Us</span>
                        <span className="cursor-pointer link-text link-text--red" onClick={()=>goToSection('#service', setNavbarMenu)}>Our Service</span>
                        <span className="cursor-pointer link-text link-text--red" onClick={()=>goToSection('#reasons', setNavbarMenu)}>Why Entrust</span>
                        <span onClick={()=>goToSection('#contact', setNavbarMenu)}>
                            <Button className="rounded-md" buttonColor="red">Get in Touch</Button>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
