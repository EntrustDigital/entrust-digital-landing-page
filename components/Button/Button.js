import React from 'react'
import styles from './Button.module.css'
import { ImSpinner2 } from 'react-icons/im'
import Link from 'next/link'
import { useStyles } from '@/hooks/useStyles'

export default function Button({
  children,
  className = '',
  color,
  variant,
  disabled,
  onClick,
  loading,
  active,
  activeColor,
  rounded,
  size,
  href,
  target
}) {

  const colors = ['primary', 'secondary', 'gray', 'danger']
  const variants = ['filled', 'outlined', 'text']
  const sizes = ['xs', 'sm', 'md', 'lg']
  const roundeds = ['normal', 'full']

  const CHECK_COLOR = colors.find(x => x === (active ? activeColor ? activeColor : color : color)) || colors[0]
  const CHECK_VARIANT = variants.find(x => x === variant) ? variant : variants[0]
  const CHECK_SIZE = sizes.find(x => x === size) ? size :'md'
  const CHECK_ROUNDED = roundeds.find(x => x === rounded) ? rounded :'normal'

  const styled = useStyles(styles, [
    `btn`,
    `btn--${CHECK_COLOR}`,
    `btn--${CHECK_VARIANT}`,
    `btn--${CHECK_SIZE}`,
    rounded && `btn--rounded--${CHECK_ROUNDED}`
  ])

  const onClickHandler = (e) => {
    if(disabled) return
    onClick && onClick(e)
  }

  const Component = href ? Link : 'button'

  return (
    loading || disabled ? (
      <div className={`${styled} ${className}`} disabled={loading || disabled} >
        {loading ? (
          <ImSpinner2 className='text-lg animate-spin'/>
        ) : children}
      </div>
    ) : (
      <Component href={href} target={target} className={`${styled} ${className}`} disabled={disabled} onClick={onClickHandler} aria-label={active ? 'active' : ''}>
        {children}
      </Component>
    )
  )
}
