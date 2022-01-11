import React, { useEffect } from 'react'
import { JobExtended } from '../../components/JS/JobExtended'
import { JobList } from '../../components/JS/JobList'
import { Sidebar } from '../../components/JS/Sidebar'
import './../CSS/EmployeeBrowseJobs.css'
import noJobSelected from './../../resources/images/creativity.png'
import { DefaultJobScreen } from '../../components/JS/DefaultJobScreen'
import { useAuthContext } from '../../contexts/authContext'


export const EmployeeBrowseJobs = () => {

    const {token} = useAuthContext()

    return (
            <div className='EmployeeBrowseJobs'>
                <div className='Menu'>
                    <Sidebar />
                </div>
                <div id='contentList' className='ContentList'>
                    <JobList />
                </div>
                <div className='ContentExtended'>
                    <JobExtended />
                </div>
            </div>
    )
}
