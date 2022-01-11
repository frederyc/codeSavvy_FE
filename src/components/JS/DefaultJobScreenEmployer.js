import React from 'react'
import './../CSS/DefaultJobScreenEmployer.css'
import image from './../../resources/images/recruiter.png'

export const DefaultJobScreenEmployer = () => {
    return (
        <div className='DefaultJobScreenEmployer'>
            <img src={image} />
            <h3>Find the best developers in the country</h3>
        </div>
    )
}
