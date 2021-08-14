import React from 'react'
import { toggleDropdown } from '../../customHooks/toggleDropdown'
import './Dropdown.css'

const Dropdown = ({children}) => {

    return (
        <div className="relative flex flex-col">
            <div className="relative" onClick={(e)=>toggleDropdown(e)}>
                <div className="absolute inset-0"></div>
                {children[0]}
            </div>
            <div className={`dropdown__menu ${children[1].props.className}`}>
                <ul className="flex flex-col p-3 bg-white rounded-lg">{children[1].props.children}</ul>
            </div>
        </div>
    )
}

export default Dropdown
