import React from 'react'
import { AdditionalInformation } from '../../components/JS/AdditionalInformation'
import { Button } from '../../components/JS/Button'
import { Logo } from '../../components/JS/Logo'
import { TextInput } from '../../components/JS/TextInput'
import './../CSS/RegisterEmployee.css'
import pic from './../../resources/images/register_user.png'
import { WelcomeMessage } from '../../components/JS/WelcomeMessage'
import { useNavigate } from 'react-router-dom'

import * as credentialsController from './../../controllers/CredentialsController.js'
import * as employeeController from './../../controllers/EmployeeController.js'

export const RegisterEmployee = () => {
    let navigate = useNavigate()

    return (
        <div className='RegisterEmployee'>
            <div id='testDiv' className='UserInformation'>
                <Logo />
                <WelcomeMessage smallText='Ready for a new challange?' bigText='codeSavvy_' />
                <TextInput id='fullname' header='Full Name' type='text' placeholder='Your Name' />
                <TextInput id='email' header='Email' type='email' placeholder='your@email.com' />
                <TextInput id='password' header='Password' type='password' placeholder='password' />
                <TextInput id='confirmPassword' header='Confirm Password' type='password' placeholder='re-password' />
                <Button text='Register' action={async () => {
                    var employeeData = {
                        fullname: document.getElementById('fullname').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value,
                        confirmPassword: document.getElementById('confirmPassword').value
                    }
                    
                    var issues = ''

                    /*  Check if fields are not empty and respect constraints
                        ex: password must be at least 10 characters long
                    */

                    // check if fields are empty    
                    if(employeeData.fullname === '' || employeeData.email === '' || employeeData.password === '' || employeeData.confirmPassword=== '') 
                        issues += 'Fields cannot be empty\n'

                    // check if name is at least 5 characters long
                    if(employeeData.fullname.length < 5) 
                        issues += 'Name must be at least 5 characters long\n'

                    // check if email is valid
                    if(!employeeData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
                        issues += 'Email address must be valid\n'

                    // check if password matches constraints: at least 8 characters, 1 number, 1 upper and 1 lowercase 
                    if(!employeeData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))
                        issues += 'Password must containt at least 8 characters, 1 number, 1 upper and 1 lowercase\n'

                    // check if passwords match 
                    if(employeeData.password !== employeeData.confirmPassword)
                        issues += 'Passwords must match\n' 

                    /*  Check if email is already in use by another account 
                    */  
                   
                    if(await credentialsController.getCredentialsByIdOrEmail(employeeData.email))
                        issues += 'Email is already in use\n'
                    
                    /*  If there are issues, prompt them, else, create account
                    */    

                    if(issues === '') {
                        var credentials = await credentialsController.createCredentials(employeeData.email, employeeData.password)
                        if(credentials) {
                            var employee = await employeeController.createEmployee(credentials.id, employeeData.fullname) 
                            if(employee) {
                                alert('Account created successfully')
                                navigate('/')
                            }
                        }
                        else 
                            alert('INTERNAL SERVER ERROR')
                    }
                    else
                        alert(issues)
                    
                }}/>
            </div>
            <div className='AdditionalInformation'>
                <AdditionalInformation title='Ready to find a job?'
                        information='Over 45,500+ companies have over 800,000 listed
                        on CodeSavvy_, so there is plenty to choose from. After creating
                        your account, browse jobs relevant to your field, level, location
                        and salary expectations. When you find the perfect job, just apply
                        by providing your resume in .pdf format.'
                        image={pic} />
            </div>
        </div>
    )
}