import React from 'react'
import './../CSS/Logo.css'
import logo from './../../resources/images/final_logo_128x128.png'
export const Logo = () => {
    return (
        <div className='Logo'>
            <img src={logo} />
            <h2>codeSavvy_</h2>
        </div>
    )
}
