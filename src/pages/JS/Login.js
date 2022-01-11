import React, { useEffect } from 'react'
import './../CSS/Login.css'
import { AdditionalInformation } from '../../components/JS/AdditionalInformation.js'
import { Button } from '../../components/JS/Button.js'
import { Logo } from '../../components/JS/Logo.js'
import { TextInput } from '../../components/JS/TextInput.js'
import pic from './../../resources/images/login.png'
import { WelcomeMessage } from '../../components/JS/WelcomeMessage'
import { useNavigate } from 'react-router-dom'

import * as credentialsController from './../../controllers/CredentialsController.js'
import * as applicationController from './../../controllers/ApplicationController.js'
import * as employeeController from './../../controllers/EmployeeController.js'
import * as employerController from './../../controllers/EmployerController.js'
import * as favoriteController from './../../controllers/FavoriteController.js'
import * as jobController from './../../controllers/JobController.js'
import { useAuthContext } from '../../contexts/authContext'

export const Login = () => {
    let navigate = useNavigate();
    
    const {setToken, setUserType} = useAuthContext()

    return (
        <div className='Login'>
            <div className='UserInformation'>
                <Logo />
                <WelcomeMessage smallText='Welcome to' bigText='codeSavvy_' />
                <TextInput id='email' header='Email' type='email' placeholder='your@email.com'/>
                <TextInput id='password' header='Password' type='password' placeholder='password'/>

                <Button text='Login' action={async () => {
                    var loginData = { 
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value
                    }

                    /*  Check if fields are empty
                    */
                    if(loginData.email === '' || loginData.password === '') {
                        alert('Fields cannot be empty')
                        return
                    }
                    
                    /*  Check if user with specific email exists
                    */
                    var credentials = await credentialsController.getCredentialsByIdOrEmail(loginData.email)
                    if(!credentials) {
                        alert('Account with specified email address not found')
                        return
                    }

                    /*  Check if users password is correct
                    */
                    if(!credentials.password === loginData.password) 
                        alert('Incorrect password')

                    /*  Extract account data if the user is an employee or employer
                        Navigate to employee menu or employer portal
                    */    
                    var employeeData = await employeeController.getEmployeeByIdOrEmail(loginData.email)
                    if(employeeData) {
                        setToken(employeeData)
                        setUserType('employee')
                        navigate('/employee_browse_jobs')
                        return 
                    }
                    
                    var employerData = await employerController.getEmployerByIdOrEmail(loginData.email)
                    if(employerData) {
                        setToken(employerData)
                        setUserType('employer')
                        navigate('/employer_job_manager')
                        return 
                    }
                    
                    alert('INTERNAL SERVER ERROR')
                    
                }} />
                <div className='CreateAccount'>
                    <h5>Looking for a job?</h5>
                    <button onClick={() => {
                        navigate('/register_employee');
                    }}>
                        Sign Up
                    </button>
                </div>
                <div className='CreateAccount'>
                    <h5>Hire some new talent!</h5>
                    <button onClick={() => {
                        navigate('/register_employer');
                    }}
                    >
                        Create Account
                    </button>
                </div>
            </div>
            <div className='AdditionalInformation'> 
                <AdditionalInformation title='About codeSavvy_'
                    information='CodeSavvy_ is a platform for software developers 
                    to find the best fitting job for their growing career. Unlike
                    other job posting applications, where recruiters label a job
                    as “Software Developer”, CodeSavvy_ is more specific, giving
                    the oportunity to employees to find roles for their field
                    easier while also helping employers filter candidates with
                    skills in the relevant field. So, what are you waiting for?'
                    image={pic} />
            </div> 
        </div>
    )
}
