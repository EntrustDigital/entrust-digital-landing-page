import React from 'react'
import Typography from '../Typography/Typography'
import List from '../List/List'

export default function ListSubheader({
  children,
  className = ''
}) {
  return (
    <div className={`${List.styles.list__subheader} ${className}`}>
      <Typography variant={'subtitle2'} className='uppercase'>
        {children}
      </Typography>
    </div>
  )
}
