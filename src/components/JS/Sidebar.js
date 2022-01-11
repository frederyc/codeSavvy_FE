import React from 'react'
import './../CSS/Sidebar.css'
import { Logo } from './Logo.js'
import { SidebarButton } from './SidebarButton'
import { WelcomeMessage } from './WelcomeMessage'

import uSearchIcon from './../../resources/images/search_unselected.png'
import sSearchIcon from './../../resources/images/search_selected.png'

import uAppliedIcon from './../../resources/images/apply_unselected.png'
import sAppliedIcon from './../../resources/images/apply_selected.png'

import uFavoritesIcon from './../../resources/images/favorites_unselected.png'
import sFavoritesIcon from './../../resources/images/favorites_selected.png'

import logoutIcon from './../../resources/images/logout.png'

import { useEffect } from 'react/cjs/react.development'

export const Sidebar = () => {

    useEffect(() => {
    }, [])

    return (
        <div className='Sidebar'>
            <Logo />
            <WelcomeMessage smallText='Welcome back,' bigText='Feder Mircea' />
            <SidebarButton uImagePath={uSearchIcon} sImagePath={sSearchIcon} text='Browse Jobs' link='/employee_browse_jobs' />
            <SidebarButton uImagePath={uAppliedIcon} sImagePath={sAppliedIcon} text='Applied' link='/employee_applied' />
            <SidebarButton uImagePath={uFavoritesIcon} sImagePath={sFavoritesIcon} text='Favorites' link='/employee_favorites' />
            <SidebarButton uImagePath={logoutIcon} sImagePath={logoutIcon} text='Logout' link='/' />
        </div>
    )
}
