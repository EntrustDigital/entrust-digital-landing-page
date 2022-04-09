import React, { useEffect, useState } from 'react'
import { useDoIfTypeof } from '../../hooks/useDoIfTypeof'
import { useWindowEvent } from '../../hooks/useWindowEvent'
import './Heading.css'

const Heading = ({headingAlignment, title, subtitle, description}) => {
  const { windowResize } = useWindowEvent()
  const [alignment, setAlignment] = useState('left')
  const headingAlignments = ['left', 'center', 'right']
  const findAlignment = (_alignment) => {
    return headingAlignments.find(x => x === _alignment) ? _alignment : headingAlignments[0]
  }
  function headingAlignmentHandler() {
    if (headingAlignment !== undefined) {
      useDoIfTypeof(
        headingAlignment, 
        [
          {
            typeof: 'string',
            function: setAlignment(findAlignment(headingAlignment)),
          },
          {
            typeof: 'object',
            function: windowResize(headingAlignment, 'screen', setAlignment, 'align')
          }
        ]     
      )
    } else {
      setAlignment(headingAlignments[0])
    }
  }
  useEffect(() => {
    let isMounted = true
    headingAlignmentHandler()
    return () => { isMounted = false }
  }, [])
  return (
    <div className='heading__wrapper' aria-label={alignment}>
      {subtitle ? <div className='subheading'>{subtitle }</div> : ''}
      <h2 className='heading'>{title}</h2>
      {description ? <p className='description'>{description}</p> : ''}
    </div>
  )
}

export default Heading