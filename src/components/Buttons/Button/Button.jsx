import React from 'react'
import './Button.css'

const Button = ({buttonColor, buttonOnClick, children}) => {
  const buttonColors = ['primary', 'secondary', 'white']
  const CHECK_BUTTON_COLOR = buttonColors.at(x => x === buttonColor) ? buttonColor : buttonColors[0]
  return (
    <button className={`btn btn--md btn--${CHECK_BUTTON_COLOR}`} onClick={buttonOnClick}>
      <div className="btn__color"></div>
      <div className='btn__content'>
        <span>{children}</span>
      </div>
    </button>
  )
}

export default Button