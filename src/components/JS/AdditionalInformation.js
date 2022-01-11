import React from 'react'
import './../CSS/AdditionalInformation.css'

export const AdditionalInformation = ({ title, information, image }) => {
    return (
        <div className='AdditionalInformation'>
            <h1>{title}</h1>
            <p>{information}</p>
            <img src={image} />
        </div>
    )
}
