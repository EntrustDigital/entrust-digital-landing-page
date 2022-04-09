import React, { useState } from 'react'
import './Input.css'

const Input = ({
  wrapperClassName,
  className,
  value,
  type,
  placeholder,
  onFocus,
  onBlur,
  onChange,
}) => {
  const [inputValue, setInputvalue] = useState(value)
  const CHECK_INPUT_CLASS_NAME = className || ''
  const CHECK_WRAPPER_CLASS_NAME = wrapperClassName || ''
  const onChangeHandler = (e) => {
    const targetValue = e.target.value
    setInputvalue(targetValue)
    onChange && onChange(targetValue)
  }
  return (
    <label className={`input-wrapper ${CHECK_WRAPPER_CLASS_NAME}`}>
      <input 
        className={`input ${CHECK_INPUT_CLASS_NAME}`}
        type={type} 
        value={inputValue}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChangeHandler}
      />
    </label>
  )
}

export default Input