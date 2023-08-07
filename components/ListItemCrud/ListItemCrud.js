import React from 'react'
import IconButton from '../IconButton/IconButton'
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5'

export default function ListItemCrud({
  className = '',
  onView,
  onUpdate,
  onDelete,
  size
}) {
  return (
    <div className={`flex space-x-1 transition duration-150 opacity-0 group-hover:opacity-100 ${className}`}>
      {onView && (
        <IconButton size={size} title={'View'} onClick={onView}>
          <IoPencilOutline/>
        </IconButton>
      )}
      {onUpdate && (
        <IconButton size={size} title={'Update'} onClick={onUpdate}>
          <IoPencilOutline/>
        </IconButton>
      )}
      {onDelete && (
        <IconButton size={size} title={'Delete'}  onClick={onDelete}>
          <IoTrashOutline/>
        </IconButton>
      )}
    </div>
  )
}
