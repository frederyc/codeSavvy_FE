import React, { useEffect, useState } from 'react'
import './../CSS/JobList.css'
import { FilterDiv } from './FilterDiv'
import { JobPost } from './JobPost'
import { JobPostEmployer } from './JobPostEmployer'
import { Button } from './Button'

import * as jobController from './../../controllers/JobController.js'
import * as favoriteController from './../../controllers/FavoriteController.js'
import * as applicationController from './../../controllers/ApplicationController.js'

import { useJobContext } from '../../contexts/jobContext'
import { useAuthContext } from '../../contexts/authContext'

export const JobList = () => {

    const [jobs, setJobs] = useState([])
    const {token, userType} = useAuthContext()

    useEffect(async () => {
        if(userType === 'employee')
            switch(window.location.pathname.substring(1)) {
                case 'employee_browse_jobs':
                    setJobs(await jobController.getJobs(-1, -1, -1, -1))
                    break
                case 'employee_favorites':
                    setJobs((await favoriteController.getFavoriteForEmployee(token.id)).map((favorite) => favorite.job))
                    break
                case 'employee_applied':    
                    setJobs((await applicationController.getApplicationForEmployee(token.id)).map((application) => application.job))
                    break
            }
        else if(userType === 'employer')
            setJobs(await jobController.getJobsForEmployer(token.id))
        else
            alert('INTERNAL SERVER ERROR')

    }, [])

    const filter = async () => { 
        setJobs(await jobController.getJobs(
            parseInt(document.getElementById('locationSelector').value),
            parseInt(document.getElementById('positionSelector').value),
            parseInt(document.getElementById('levelSelector').value),
            parseInt(document.getElementById('salarySelector').value),
        ))
    }

    if(window.location.pathname.substring(1) === 'employee_browse_jobs')
        return (
            <div className='JobList' >
                <div className='ListFilter'>       
                    <div className='Row1'>
                        <select id='locationSelector'>
                            <option value='-1'>Select</option>
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
                            <option value='-1'>Select</option>
                            <option value='0'>Frontend</option>
                            <option value='1'>Backend</option>
                            <option value='2'>Fullstack</option>
                            <option value='3'>Data Scientist</option>
                            <option value='4'>DevOps</option>
                            <option value='5'>Cloud Developer</option>
                            <option value='6'>AI Engineer</option>
                            <option value='7'>Network Engineer</option>
                        </select>
                        <Button text='Filter' action={filter} />
                    </div>
                    <div className='Row2'>
                        <select id='levelSelector'>
                            <option value='-1'>Select</option>
                            <option value='0'>Internship</option>
                            <option value='1'>Entry Level</option>
                            <option value='2'>Associate</option>
                            <option value='3'>Mid Level</option>
                            <option value='4'>Senior</option>
                        </select>
                        <select id='salarySelector'>
                            <option value='-1'>Select</option>
                            <option value='500'>$ 500</option>
                            <option value='1000'>$ 1000</option>
                            <option value='1500'>$ 1500</option>
                            <option value='2000'>$ 2000</option>
                            <option value='2500'>$ 2500</option>
                            <option value='3000'>$ 3000</option>
                            <option value='3500'>$ 3500</option>
                            <option value='4000'>$ 4000</option>
                            <option value='4500'>$ 4500</option>
                            <option value='5000'>$ 5000</option>
                            <option value='5500'>$ 5500</option>
                            <option value='6000'>$ 6000</option>
                            <option value='6500'>$ 6500</option>
                            <option value='7000'>$ 7000</option>
                            <option value='7500'>$ 7500</option>
                            <option value='8000'>$ 8000</option>
                            <option value='8500'>$ 8500</option>
                            <option value='9000'>$ 9000</option>
                            <option value='9500'>$ 9500</option>
                            <option value='10000'>$ 10000</option>
                        </select>
                    </div>
                </div>
                <div id='listContent' className='ListContent'>
                {
                    jobs.map((job) => userType === 'employee' ? <JobPost job={job} /> : <JobPostEmployer job={job} />)
                }      
                </div> 
            </div>
        )
    else 
        return (
            <div className='JobList' >
                <div id='listContent' className='ListContent'>
                {
                    jobs.map((job) => userType === 'employee' ? <JobPost job={job} /> : <JobPostEmployer job={job} />)
                }      
                </div> 
            </div>
        )
                
}

