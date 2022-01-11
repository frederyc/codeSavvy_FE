import React from 'react'
import { JobExtended } from '../../components/JS/JobExtended'
import { JobList } from '../../components/JS/JobList'
import { Sidebar } from '../../components/JS/Sidebar'
import './../CSS/EmployeeApplied.css'

export const EmployeeApplied = () => {
    return (
        <div className='EmployeeApplied'>
            <div className='Menu'>
                <Sidebar />
            </div>
            <div className='ContentList'>
                <JobList />
            </div>
            <div className='ContentExtended'>
                <JobExtended />
            </div>
        </div>
    )
}
