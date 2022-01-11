import React from 'react'
import './../CSS/CreateJob.css'

import testImage from './../../resources/images/google_bck.png'
import { TextArea } from './TextArea'
import { Button } from './Button'

import * as jobController from './../../controllers/JobController.js'
import { useAuthContext } from '../../contexts/authContext'

export const CreateJob = () => {

    const {token} = useAuthContext()

    return (
        <div className='CreateJob'>
            <div className='CompanyLogo'>
                <img src={token.image} />
                <h1>{token.companyName}</h1>
            </div>
            <div className='Content'>
                <div className='JobDetails'>
                    <h2>Job Details:</h2> 
                    <div className='JobPref'>
                        <select id='locationSelector'>
                            <option value='0'>Bucharest</option>
                            <option value='1'>Cluj-Napoca</option>
                            <option value='2'>Timisoara</option>
                            <option value='3'>Iasi</option>
                            <option value='4'>Constanta</option>
                            <option value='5'>Craiova</option>
                            <option value='6'>Brasov</option>
                            <option value='7'>Galati</option>
                            <option value='8'>Ploiesti</option>
                            <option value='9'>Oradea</option>
                        </select>
                        <select id='positionSelector'>
                            <option value='0'>Frontend</option>
                            <option value='1'>Backend</option>
                            <option value='2'>Fullstack</option>
                            <option value='3'>Data Scientist</option>
                            <option value='4'>DevOps</option>
                            <option value='5'>Cloud Developer</option>
                            <option value='6'>AI Engineer</option>
                            <option value='7'>Network Engineer</option>
                        </select>
                        <select id='levelSelector'>
                            <option value='0'>Internship</option>
                            <option value='1'>Entry Level</option>
                            <option value='2'>Associate</option>
                            <option value='3'>Mid Level</option>
                            <option value='4'>Senior</option>
                        </select>
                        <select id='salarySelector'>
                            <option value='500'>€ 500</option>
                            <option value='1000'>€ 1000</option>
                            <option value='1500'>€ 1500</option>
                            <option value='2000'>€ 2000</option>
                            <option value='2500'>€ 2500</option>
                            <option value='3000'>€ 3000</option>
                            <option value='3500'>€ 3500</option>
                            <option value='4000'>€ 4000</option>
                            <option value='4500'>€ 4500</option>
                            <option value='5000'>€ 5000</option>
                            <option value='5500'>€ 5500</option>
                            <option value='6000'>€ 6000</option>
                            <option value='6500'>€ 6500</option>
                            <option value='7000'>€ 7000</option>
                            <option value='7500'>€ 7500</option>
                            <option value='8000'>€ 8000</option>
                            <option value='8500'>€ 8500</option>
                            <option value='9000'>€ 9000</option>
                            <option value='9500'>€ 9500</option>
                            <option value='10000'>€ 10000</option>
                        </select>
                    </div>
                </div>
                <div className='Requirements'>
                    <TextArea id='minimumRequiremets' description='Minimum Requiremets:' placeholder='Type here...' />
                    <TextArea id='preferredRequirements' description='Preferred Requiremets:' placeholder='Type here...' />
                    <TextArea id='description' description='About job:' placeholder='Type here...' />
                </div>
                <div className='Create' >
                    <Button text='Post opening' action={async () => {
                        const jobData = {
                            minimumRequiremets: document.getElementById('minimumRequiremets').value,
                            preferredRequirements: document.getElementById('preferredRequirements').value,
                            description: document.getElementById('description').value
                        }

                        await jobController.createJob(
                            token.id,
                            parseInt(document.getElementById('locationSelector').value),
                            parseInt(document.getElementById('positionSelector').value),
                            parseInt(document.getElementById('levelSelector').value),
                            parseInt(document.getElementById('salarySelector').value),
                            document.getElementById('minimumRequiremets').value,
                            document.getElementById('preferredRequirements').value,
                            document.getElementById('description').value
                        )
                        alert('Job has been posted successfully')
                    }} />
                </div>
            </div>
        </div>
    )
}
