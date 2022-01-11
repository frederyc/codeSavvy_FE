import React from 'react'
import './../CSS/WelcomeMessage.css'

export const WelcomeMessage = ({ smallText, bigText }) => {
    return (
        <div className='WelcomeMessage'>
            <h3>{smallText}</h3>
            <h1>{bigText}</h1>
        </div>
    )
}
