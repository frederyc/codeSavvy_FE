import React from 'react'
import './../CSS/DefaultJobScreen.css'
import image from './../../resources/images/creativity.png'

export const DefaultJobScreen = () => {
    return (
        <div className='DefaultJobScreen'>
            <img src={image} />
            <h3>Click a job posting to expand it here</h3>
        </div>
    )
}
