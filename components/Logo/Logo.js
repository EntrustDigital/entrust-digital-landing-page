import Image from 'next/image'
import React from 'react'
import primary from './logo-primary.png'
import secondary from './logo-secondary.png'

export default function Logo({
  className = '',
  variant,
  size,
  multiplier
}) {

  const variants = [
    {
      variant: 'primary',
      logo: primary
    }, 
    {
      variant: 'secondary',
      logo: secondary
    }
  ]

  const sizes = [
    {
      size: 'sm',
      multiplier: 1,
    },
    {
      size: 'md',
      multiplier: 2,
    },
    {
      size: 'lg',
      multiplier: 3,
    },
  ]
  
  const CHECK_VARIANT = variants.find(x => x.variant === variant) || variants[0]
  const CHECK_SIZE = sizes.find(x => x.size === size) || sizes[0]

  return (
    <>
      <Image className={className} src={CHECK_VARIANT.logo} alt={`logo-${CHECK_VARIANT.variant}`} height={40 * (multiplier || CHECK_SIZE.multiplier)} width={108 * (multiplier || CHECK_SIZE.multiplier)}/>
    </>
  )
}
