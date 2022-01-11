import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../CSS/Button.css'

export const Button = ({ text, action }) => {
    return (
        <button className="Button" 
            onClick={() => 
            {
                action();
            }}
        >
            {text}
        </button>
    )
}