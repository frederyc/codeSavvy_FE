import React from 'react'
import './../CSS/SidebarEmployer.css'
import { Logo } from './Logo'
import { WelcomeMessage } from './WelcomeMessage'

import uJobManager from './../../resources/images/job_manager_unselected.png'
import sJobManager from './../../resources/images/job_manager_selected.png'

import uAddJob from './../../resources/images/add_job_unselected.png'
import sAddJob from './../../resources/images/add_job_selected.png'

import logoutIcon from './../../resources/images/logout.png'

import { SidebarButton } from './SidebarButton'
import { useAuthContext } from '../../contexts/authContext'

export const SidebarEmployer = () => {

    const {token} = useAuthContext()

    return (
        <div className='SidebarEmployer'>
            <Logo />
            <WelcomeMessage smallText='Company console' bigText={token ? token.companyName : 'error'} />
            <SidebarButton uImagePath={uJobManager} sImagePath={sJobManager} text='Job manager' link='/employer_job_manager' />
            <SidebarButton uImagePath={uAddJob} sImagePath={sAddJob} text='Create opening' link='/employer_add_job' />
            <SidebarButton uImagePath={logoutIcon} sImagePath={logoutIcon} text='Logout' link='/' />
        </div>
    )
}
