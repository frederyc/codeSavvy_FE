import React from 'react'
import './../CSS/PageNotFound.css'
import image from './../../resources/images/page_not_found.png'
import { Button } from '../../components/JS/Button.js'

export const PageNotFound = () => {
    return (
        <div className='PageNotFound'>
            <div className='ImagePanel'>
                <img src={image} />
            </div>
            <div className='InfoPanel'>
                <h1>Error 404: Page Not Found</h1>
                <p>Uups, it looks like you took a wrong turn there</p>
                <p>Click the button below to return back to login screen</p>
                <Button text='Go back' />
            </div>
        </div>
    )
}
