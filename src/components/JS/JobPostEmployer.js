import React from 'react'
import './../CSS/JobPostEmployer.css'

import testImage from './../../resources/images/google_bck.png'
import trashImage from './../../resources/images/delete_job.png'
import viewApplicantsIcon from './../../resources/images/view_applicants_icon.png'

import * as applicationController from './../../controllers/ApplicationController.js'
import * as employeeController from './../../controllers/EmployeeController.js'

export const JobPostEmployer = ({ job }) => {

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

    const downloadPdfFile = (base64_format, applicantName) => {
        var a = document.createElement('a')
        a.href = base64_format
        a.setAttribute('download', `${applicantName}.pdf`)
        a.click()
    }

    return (
        <div className='JobPostEmployer' onClick={async () => {
            const applications = await applicationController.getApplicationForJob(job.id)
            console.log(applications)
            if(applications.length == 0) {
                alert('No applicants for this job')
                return
            }

            applications.forEach((element) => {
                downloadPdfFile(element.resume, element.employee.fullName)
            })

            console.log('Job: ' + job.id)
        }}>
            <div className='CompanyImageDiv'>
                <img src={job.employer.image} alt='Failed to retrieve image' />
            </div>
            <div className='JobDescriptionDiv'>
                <div className='CompanyFavorites'>
                    <h1>{job.employer.companyName}</h1>
                    <div className='Favorites'>
                        <img src={trashImage} />
                    </div>
                </div>
                <div className='PositionSalary'>
                    <h3 className='Position'>{convertPositionToString(job.position)}</h3>
                    <h3 className='Salary'>{'$ ' + job.salary + '/month'}</h3>
                </div>
                <div className='LevelLocation'>
                    <h5 className='Level'>{convertLevelToString(job.level)}</h5>
                    <h5 className='Location'>{convertLocationToString(job.location)}</h5>
                </div>
            </div>
        </div>
    )


}
