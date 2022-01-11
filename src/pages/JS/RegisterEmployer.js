import React, { useEffect } from 'react'
import { AdditionalInformation } from '../../components/JS/AdditionalInformation'
import { Button } from '../../components/JS/Button'
import { Logo } from '../../components/JS/Logo'
import { TextInput } from '../../components/JS/TextInput'
import { WelcomeMessage } from '../../components/JS/WelcomeMessage'
import './../CSS/RegisterEmployer.css'
import pic from './../../resources/images/create_account_company.png'
import insertImage from './../../resources/images/insert-picture.png'
import { useNavigate } from 'react-router-dom'

import * as credentialsController from './../../controllers/CredentialsController.js'
import * as employerController from './../../controllers/EmployerController.js'

export const RegisterEmployer = () => {
    let navigate = useNavigate()
    var base64_format = ''

    const uploadImage = async (event) => {
        var file = event.target.files[0]
        base64_format = await convertBase64(file)
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                var imageDisplay = document.getElementById('companyImageDisplay')
                if(imageDisplay)
                    imageDisplay.src = fileReader.result
                else 
                    alert('INTERNAL SERVER ERROR')
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    return (
        <div className='RegisterEmployer'>
            <div className='UserInformation'>
                <Logo />
                <div className='ImageInformation'>
                    <img id='companyImageDisplay' src={insertImage} />
                    <input id='imageInput' type='file' id='image_input' name='image_input' accept='image/png, image/jpeg' 
                        onChange={(event) => {
                            uploadImage(event)
                        }} />
                </div>
                <TextInput id='companyName' header='Company Name' type='text' placeholder='Company Inc.' />
                <TextInput id='email' header='Email' type='email' placeholder='company@email.com' />
                <TextInput id='password' header='Password' type='password' placeholder='password' />
                <TextInput id='confirmPassword' header='Confirm Password' type='password' placeholder='re-password' />
                <Button text='Register' action={async () => {
                    var employerData = {
                        companyName: document.getElementById('companyName').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value,
                        confirmPassword: document.getElementById('confirmPassword').value
                    }

                    var issues = ''

                    /*  Check if fields are not empty and respect constraints
                        ex: password must be at least 10 characters long
                    */

                    // check if an image has been selected
                    if(base64_format === '')
                        issues += 'You must select an image\n'

                    // check if fields are empty    
                    if(employerData.companyName === '' || employerData.email === '' || employerData.password === '' || employerData.confirmPassword=== '') 
                        issues += 'Fields cannot be empty\n'

                    // check if name is at least 5 characters long
                    if(employerData.companyName.length < 5) 
                        issues += 'Name must be at least 5 characters long\n'

                    // check if email is valid
                    if(!employerData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
                        issues += 'Email address must be valid\n'

                    // check if password matches constraints: at least 8 characters, 1 number, 1 upper and 1 lowercase 
                    if(!employerData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))
                        issues += 'Password must containt at least 8 characters, 1 number, 1 upper and 1 lowercase\n'

                    // check if passwords match 
                    if(employerData.password !== employerData.confirmPassword)
                        issues += 'Passwords must match\n'

                    /*  Check if email is already in use by another account 
                    */  
                   
                    if(await credentialsController.getCredentialsByIdOrEmail(employerData.email))
                        issues += 'Email is already in use\n'

                    /*  If there are issues, prompt them, else, create account
                    */    

                    if(issues === '') {
                        var credentials = await credentialsController.createCredentials(employerData.email, employerData.password)
                        if(credentials) {
                            var employer = await employerController.createEmployer(credentials.id, employerData.companyName, base64_format) 
                            if(employer) {
                                alert('Account created successfully')
                                navigate('/')
                            }
                        }
                        else 
                            alert('INTERNAL SERVER ERROR')
                    }
                    else
                        alert(issues)

                }} />
            </div>
            <div className='AdditionalInformation'>
                <AdditionalInformation title='Hire the best of the best!'
                            information='With over 3,500,000 visitors daily, CodeSavvy_ is 
                            the perfect place to find the best developers in the country. 
                            After creating your account, post your first job from the 
                            "Create Opening" section. After creating an opening, navigate to
                            "Job Manager" section and click a job to download the resumes of
                            all the applicants'
                            image={pic} />
            </div>
        </div>
    )
}
