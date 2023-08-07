import React from 'react'
import styles  from './IconButton.module.css'

export default function IconButton({
  children,
  size,
  className = '',
  onClick
}) {

  const sizes = ['sm', 'md', 'lg', 'xl']
  const CHECK_SIZE = sizes.find(x => x === size) ? size : 'md'

  return (
    <button className={[styles['icon-btn'], styles[`icon-btn--${CHECK_SIZE}`], className].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
