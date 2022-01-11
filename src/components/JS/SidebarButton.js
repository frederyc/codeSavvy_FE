import React from 'react'
import './../CSS/SidebarButton.css'
import { Link } from 'react-router-dom'

export const SidebarButton = ({ uImagePath, sImagePath, text, link }) => {
    // Holds a boolean value, TRUE if the current path equals the path specified to the button, FALSE otherwise
    const isSelected = (window.location.pathname.split('/').at(-1) === link.substring(1)) ? true : false

    return (
        <Link to={link} style={{textDecoration: 'none'}}>
            <div className='SidebarButton'>
                <img src={isSelected ? sImagePath : uImagePath} alt='ana are mere'/>
                <h4 style={{color: isSelected ? '#5160FF' : '#3D4758'}}>{text}</h4>
            </div>
        </Link>
    )
}