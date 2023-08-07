import React from 'react'
import List from '../List/List'

export default function ListItemIcon({
  children,
}) {

  return (
    <div className={List.styles.list__item__icon}>
      {children}
    </div>
  )
}
