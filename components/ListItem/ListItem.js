import React from 'react'
import List from '../List/List'

export default function ListItem({
  className = '',
  children,
  variant,
  component
}) {

  const variants = ['noPadding']

  const CHECK_VARIANT = variants.find(x => x === variant) ? variant : ''

  const Component = component || 'li'

  return (
    <Component className={`${List.styles.list__item} ${className}`} aria-label={CHECK_VARIANT}>
      {children}
    </Component>
  )
}
