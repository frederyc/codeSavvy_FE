import React from 'react'
import { CreateJob } from '../../components/JS/CreateJob'
import { DefaultJobScreenEmployer } from '../../components/JS/DefaultJobScreenEmployer'
import { JobExtended } from '../../components/JS/JobExtended'
import { JobList } from '../../components/JS/JobList'
import { SidebarEmployer } from '../../components/JS/SidebarEmployer'
import './../CSS/EmployerAddJob.css'

export const EmployerAddJob = () => {
    return (
        <div className='EmployerAddJob'>
            <div className='Menu'>
                <SidebarEmployer />
            </div>
            <div className='ContentList'>
                <CreateJob />
            </div>
            <div className='ContentExtended'>
                <DefaultJobScreenEmployer />
            </div>
        </div>
    )
}
