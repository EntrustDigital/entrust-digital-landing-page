import React from 'react'
import './SimpleButton.css'

const SimpleButton = ({children, buttonColor, buttonOnClick, className}) => {
  const buttonColors = ['primary', 'secondary', 'black']
  const CHECK_BUTTON_COLOR = buttonColors.find(x => x === buttonColor) ? buttonColor : buttonColors[0]
  return (
    <div className={`spl-btn ${className || ''}`} onClick={buttonOnClick}>
      <div className='spl-btn__line'>
        <span aria-label={CHECK_BUTTON_COLOR}/>
      </div>
      <div className='spl-btn__content'>{children}</div>
    </div>
  )
}

export default SimpleButton