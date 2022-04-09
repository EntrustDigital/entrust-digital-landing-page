import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LinkText.css'

const LinkText = ({
  href, 
  className, 
  onClick,
  children,
  linkActive
}) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(linkActive)
  }, [linkActive])
  
  return (
    <Link to={href} className={`link-text ${className || ''}`} aria-activedescendant={active}>
      {children}
    </Link>
  )
}

export default LinkText