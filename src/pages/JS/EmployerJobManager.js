import React from 'react'
import { DefaultJobScreenEmployer } from '../../components/JS/DefaultJobScreenEmployer'
import { JobExtended } from '../../components/JS/JobExtended'
import { JobList } from '../../components/JS/JobList'
import { SidebarEmployer } from '../../components/JS/SidebarEmployer'
import './../CSS/EmployerJobManager.css'

export const EmployerJobManager = () => {
    return (
        <div className='EmployerJobManager'>
            <div className='Menu'>
                <SidebarEmployer />
            </div>
            <div className='ContentList'>
                <JobList />
            </div>
            <div className='ContentExtended'>
                <DefaultJobScreenEmployer />
            </div>
        </div>
    )
}
