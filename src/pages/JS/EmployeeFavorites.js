import React from 'react'
import { DefaultJobScreen } from '../../components/JS/DefaultJobScreen'
import { JobExtended } from '../../components/JS/JobExtended'
import { JobList } from '../../components/JS/JobList'
import { Sidebar } from '../../components/JS/Sidebar'
import './../CSS/EmployeeFavorites.css'

export const EmployeeFavorites = () => {
    return (
        <div className='EmployeeFavorites'>
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
