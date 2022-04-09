import React, { useState, useEffect } from 'react'
import './Shader.css'

const Shader = ({closeFunction}) => {

  const [ active, setActive ] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])
  
  return (
    <div className="shader" aria-label={active} onClick={closeFunction}/>
  )
}

export default Shader