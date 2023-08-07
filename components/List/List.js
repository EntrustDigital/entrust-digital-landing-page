import React from 'react'
import styles from './List.module.css'


export default function List({
  children,
  className = '',
  component,
  subheader
}) {

  const Component = component || 'ul'

  return (
    <Component className={`${styles.list} ${className}`}>
      {subheader}
      {children}
    </Component>
  )
}

List.styles = styles
