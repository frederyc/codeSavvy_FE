import React from 'react'
import './../CSS/JobExtended.css'
import testImage from './../../resources/images/google_bck.png'
import { Button } from './Button'
import { useJobContext } from '../../contexts/jobContext'
import { DefaultJobScreen } from './DefaultJobScreen'

import { useAuthContext } from '../../contexts/authContext'
import * as applicationController from './../../controllers/ApplicationController.js'

export const JobExtended = () => {

    const {job} = useJobContext()
    const {token} = useAuthContext()
    var base64_format = ''

    const convertPositionToString = (position) => {
        switch(position) {
            case 0: return 'Frontend'
            case 1: return 'Backend'
            case 2: return 'Fullstack'
            case 3: return 'Data Scientist'
            case 4: return 'DevOps'
            case 5: return 'Cloud Developer'
            case 6: return 'AI Engineer'
            case 7: return 'Network Engineer'
            default: return 'Not Found'
        }
    }

    const convertLevelToString = (level) => {
        switch(level) {
            case 0: return 'Internship'
            case 1: return 'Entry Level'
            case 2: return 'Associate'
            case 3: return 'Mid Level'
            case 4: return 'Senior'
            default: return 'Not Found'
        }
    }

    const convertLocationToString = (location) => {
        switch(location) {
            case 0: return 'Bucharest'
            case 1: return 'Cluj Napoca'
            case 2: return 'Timisoara'
            case 3: return 'Iasi'
            case 4: return 'Constanta'
            case 5: return 'Craiova'
            case 6: return 'Brasov'
            case 7: return 'Galati'
            case 8: return 'Ploiesti'
            case 9: return 'Oradea'
            default: return 'Not Found'
        }
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const uploadPdf = async (event) => {
        var file = event.target.files[0]
        base64_format = await convertBase64(file)
    }

    if(!job) {
        return <DefaultJobScreen />
    }
    return (
        <div className='JobExtended'>
            <div className='CompanyInformation'>
                <img src={job.employer.image} />
                <h1>{job.employer.companyName}</h1>
            </div>
            <div className='JobInformation'>
                <div className='Row1'>
                    <h3 id='Position'>{convertPositionToString(job.position)}</h3>
                    <h3 id='Salary' className='EndText'>{'$ ' + job.salary + '/month'}</h3>
                </div>
                <div className='Row2'>
                    <h3 id='Level'>{convertLevelToString(job.level)}</h3>
                    <h3 id='Location' className='EndText'>{convertLocationToString(job.location)}</h3>
                </div>
            </div>
            <div className='Qualifications'>
                <h3>Minimum qualifications</h3>
                <p>{job.minimumQualifications}</p>
                <h3>Preffered qualifications</h3>
                <p>{job.preferredQualifications}</p>
            </div>
            <div className='About'>
                <h3>About the job</h3>
                <p>{job.description}</p>
            </div>
            <div className='ButtonDiv'>
                <input id='resumeInput' type='file' accept='application/pdf' 
                    onChange={(event) => {
                        uploadPdf(event)
                    }}/>
                <Button text='Apply' action={async () => {
                    // Check if user has uploaded a resume
                    if(base64_format === '') {
                        alert('You must select your resume (.pdf)')
                        return
                    }

                    // Check if user already applied to this position
                    const applications = await applicationController.getApplicationForEmployee(token.id)
                    var alreadyApplied = false
                    applications.forEach(element => {
                        if(element.job.id === job.id) {
                            alreadyApplied = true
                            return
                        }
                    });

                    // Create application for the job if there isn't already one
                    if(alreadyApplied)
                        alert('You already applied to this opening')
                    else {
                        await applicationController.createApplication(job.id, token.id, base64_format)
                        alert('Applied to job success')
                    }
                }} />
            </div>
        </div>
    )
}
