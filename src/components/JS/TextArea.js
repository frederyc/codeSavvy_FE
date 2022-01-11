import React from 'react'
import './../CSS/TextArea.css'

export const TextArea = ({ id, description, placeholder }) => {
    return (
        <div className='TextArea'>
            <h2>{description}</h2>
            <textarea id={id} 
                name={'textArea_' + description} 
                placeholder={placeholder}
                rows='6' />
        </div>
    )
}
