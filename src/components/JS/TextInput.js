import React from 'react'
import './../CSS/TextInput.css'

export const TextInput = ( {id, header, type, placeholder} ) => {
    return (
        <div className='TextInput'>
            <h5>{header}</h5>
            <input id={id} type={type} placeholder={placeholder}/>
        </div>
    )
}
