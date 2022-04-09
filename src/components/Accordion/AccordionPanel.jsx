import React, { useEffect, useRef } from 'react'
import './AccordionPanel.css'

const AccordionPanel = ({children, panelActive}) => {

  const panel = useRef(null)
  const CHECK_PANEL_ACTIVE = panelActive || false
  
  const expandPanel = () => {
    const currentPanel = panel.current
    const panelScrollHeight = currentPanel.scrollHeight
    currentPanel.style.maxHeight = CHECK_PANEL_ACTIVE ? `${panelScrollHeight}px` : ''
  }

  useEffect(() => {
    expandPanel()
  },[CHECK_PANEL_ACTIVE])

  return (
    <div ref={panel} className='accordion__panel'>
      {children}
    </div>
  )
}

export default AccordionPanel