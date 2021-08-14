import React from 'react'
import './Button.css'

const Button = (props) => {
    const buttonColors = ["blue", "cyan", "red", "orange", "white", "black"];
    const buttonSizes = ["base", "xs", "sm", "md", "lg"];
    const buttonRounded = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
    
    const CHECK_CLASSNAME = props.className || props.className !== undefined ? props.className : '';
    const CHECK_BUTTON_COLOR = buttonColors.find(x => x === props.buttonColor) ? props.buttonColor : buttonColors[0];
    const CHECK_BUTTON_SIZE = buttonSizes.find(x => x === props.buttonSize) ? props.buttonSize : buttonSizes[0];
    const CHECK_BUTTON_ROUNDED = buttonRounded.find(x => x === props.buttonRounded) ? `-${props.buttonRounded}` : '-md';

    const BUTTON_CLASSNAME = `
        btn 
        btn--${CHECK_BUTTON_COLOR} 
        ${props.roundButton ? `btn--round btn--round` : 'btn'}--${CHECK_BUTTON_SIZE} 
        ${props.roundButton ? '' : `rounded${CHECK_BUTTON_ROUNDED}`} 
        ${CHECK_CLASSNAME}
    `
         
    return (
        <button className={BUTTON_CLASSNAME} onClick={props.onClick} type={props.type}>
            {props.children ? props.children : props.roundButton ? 'L' : 'Lorem Ipsum'}
        </button>
    )
}

export default Button
