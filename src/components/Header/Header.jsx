import React, { useState, useEffect } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import data from '../../utils/data'
import AccordionPanel from '../Accordion/AccordionPanel'
import LinkText from '../Links/LinkText'
import Shader from '../Shader/Shader'
import './Header.css'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)
  const menuHandler = () => {
    setMenu(menu ? false : true)
  }
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
  }, [menu])
  useEffect(function() {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setScrollDown(false)
          setMenu(false)
      } else {
        setScrollDown(true)
        setMenu(false)
      }
      prevScrollpos = currentScrollPos;
    }) 
  }, [])
  
  return (
    <>
      <header className='header' aria-label={scrollDown}>
        <div className="flex flex-col px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20 ">
            <Link to="/" className='focus:outline-none'>
              <img className='h-6 lg:h-8' src={data.logo[0].image}/>
            </Link>
            <span className='text-2xl cursor-pointer lg:hidden' onClick={menuHandler}>
              <RiMenu4Fill/>
            </span>
            <div className="hidden lg:flex">
              <NavItems/>
            </div>
          </div>
          <AccordionPanel panelActive={menu}>
            <NavItems/>
          </AccordionPanel>
        </div>
      </header>
      { menu ? <Shader closeFunction={menuHandler}/> : ''}
    </>
  )
}

const NavItems = () => {
  const navigation = useNavigate()
  return (
    <ul className="flex flex-col py-5 space-y-4 text-xs font-bold border-t lg:border-none lg:flex-row lg:space-y-0 lg:space-x-8">
      {data.links.map((link) => (
        <li key={`navLink${link.id}`}>
          <LinkText href={link.path} linkActive={link.path === location.pathname}  onClick={() => navigation(link.path)}>{link.name.toUpperCase()}</LinkText>
        </li>
      ))}
    </ul>
  )
}

export default Header