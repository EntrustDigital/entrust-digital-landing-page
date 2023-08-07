import React from 'react'
import Link from 'next/link'
import List from '../List/List'

export default function ListItemButton({
  className = '',
  children,
  color,
  href,
  active,
  activeColor,
  onClick,
  viewMode,
  target
}) {

  const colors = ['default', 'primary']

  const CHECK_COLOR = colors.find(x => x === color) ? color : colors[0]
  const CHECK_ACTIVE_COLOR = colors.find(x => x === activeColor) ? activeColor : colors[0]

  const Component = viewMode ? 'div' : href ? Link : 'button'

  return (
    <Component 
      href={href} 
      className={`${List.styles.list__item__btn} ${List.styles[`list__item__btn--${CHECK_COLOR}`]} ${className}`}
      onClick={onClick}
      aria-label={active ? `active-${CHECK_ACTIVE_COLOR}` : ''}
      target={target}
    >
      {children}
    </Component>
  )
}
