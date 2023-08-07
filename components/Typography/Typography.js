import { IBM_Plex_Serif, Inter } from 'next/font/google'
import React from 'react'
import styles from './Typography.module.css'

const inter = Inter({subsets: ['latin']})
const plex = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']

})

export default function Typography({
  variant = 'body1',
  component,
  children,
  font,
  className = ''
}) {

  const fonts = [
    {
      variant: 'primary',
      font: inter
    },
    {
      variant: 'secondary',
      font: plex
    },
  ]

  const variants = [
    {
      variant: `h1`,
      component: 'h1',
      className: styles.h1,
      font: 'secondary'
    },
    {
      variant: `h2`,
      component: 'h2',
      className: styles.h2,
      font: 'secondary'
    },
    {
      variant: `h3`,
      component: 'h3',
      className: styles.h3,
      font: 'secondary'
    },
    {
      variant: `h4`,
      component: 'h4',
      className: styles.h4,
      font: 'secondary'
    },
    {
      variant: `h5`,
      component: 'h5',
      className: styles.h5,
      font: 'secondary'
    },
    {
      variant: `h6`,
      component: 'h6',
      className: styles.h6,
      font: 'secondary'
    },
    {
      variant: `subtitle1`,
      component: 'p',
      className: styles.subtitle1,
      font: 'primary'
    },
    {
      variant: `subtitle2`,
      component: 'p',
      className: styles.subtitle2,
      font: 'primary'
    },
    {
      variant: `subtitle3`,
      component: 'p',
      className: styles.subtitle3,
      font: 'primary'
    },
    {
      variant: `subtitle4`,
      component: 'p',
      className: styles.subtitle4,
      font: 'primary'
    },
    {
      variant: `subtitle5`,
      component: 'p',
      className: styles.subtitle5,
      font: 'primary'
    },
    {
      variant: `subtitle6`,
      component: 'p',
      className: styles.subtitle6,
      font: 'primary'
    },
    {
      variant: `body1`,
      component: 'p',
      className: styles.body1,
      font: 'primary'
    },
    {
      variant: `body2`,
      component: 'p',
      className: styles.body2,
      font: 'primary'
    },
    {
      variant: `body3`,
      component: 'p',
      className: styles.body3,
      font: 'primary'
    },
    {
      variant: `body4`,
      component: 'p',
      className: styles.body4,
      font: 'primary'
    },
  ]

  const CHECK_VARIANT = variants.find(x => x.variant === variant) 
  const CHECK_FONT = fonts.find(x => x.variant === (font || CHECK_VARIANT.font))?.font || fonts[0].font

  const Component = component || CHECK_VARIANT.component

  return (
    <Component className={`${CHECK_VARIANT?.className} ${CHECK_FONT?.className} ${className}`} >
      {children}
    </Component>
  )
}
