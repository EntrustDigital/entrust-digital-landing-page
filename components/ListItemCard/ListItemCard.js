import Card from '@/common/components/Card/Card'
import CardContent from '@/common/components/CardContent/CardContent'
import React from 'react'

export default function ListItemCard({
  wrapperClassName = '',
  className = '',
  children,
  endAdronment
}) {
  return (
    <Card  shadow={'none'} className={`w-full ${wrapperClassName}`}>
      <CardContent className='flex justify-between w-full group'>
        <div className={className}>
          {children}
        </div>
        {endAdronment}
      </CardContent>
    </Card>
  )
}