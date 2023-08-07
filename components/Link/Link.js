import React from 'react'
import styles from './Link.module.css'

const NextLink = require('next/link')

export default function Link({
  className = '',
  children,
  href,
  onClick,
  active,
  target
}) {
  return (
    <NextLink 
      href={href} 
      className={`${styles.link} ${className}`}
      onClick={onClick}
      target={target}
      aria-label={active ? 'active' : ''}
    >
      {children}
    </NextLink>
  )
}
