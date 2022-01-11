import React, { useEffect } from 'react'
import './../CSS/JobPost.css'

import uFavorite from './../../resources/images/heart_unselected.png'
import sFavorite from './../../resources/images/heart_selected.png'
import { useJobContext } from '../../contexts/jobContext'
import { useAuthContext } from '../../contexts/authContext'

import * as favoriteController from './../../controllers/FavoriteController.js'

export const JobPost = ({ job }) => {
    var isFavorite = false

    const {setJob} = useJobContext()
    const {token} = useAuthContext()

    useEffect(async () => {
        const postImage = document.getElementById('image' + job.id)
        const aux = (await favoriteController.getFavoriteForEmployee(token.id)).filter(value => value.job.id === job.id)
        if(aux.length === 0)
            postImage.src = uFavorite
        else if(aux.length === 1)
            postImage.src = sFavorite
        else
            alert('INTERNAL SERVER ERROR')
    }, [])

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

    const changeFavoriteStatus = async () => {
        const postImage = document.getElementById('image' + job.id)
        const favorites = await favoriteController.getFavoriteForEmployee(token.id)
        const aux = favorites.filter(value => value.job.id === job.id )
        console.log('test: ' + aux)
        if(aux.length === 0) {
            postImage.src = sFavorite
            var t1 = await favoriteController.createFavorite(job.id, token.id)
            console.log('test - set as favorite: ' + t1)
        }
        else if(aux.length === 1) {
            postImage.src = uFavorite
            var t2 = await favoriteController.deleteFavoriteById(aux[0].id)
            console.log(t2)
        }
        else {
            alert('INTERNAL SERVER ERROR')
        }
    }

    return (
        <div className='JobPost' onClick={() => {
            setJob(job)
        }}>
            <div className='CompanyImageDiv'>
                <img id={'companyLogo_' + job.employer.id} src={job.employer.image} alt='Failed to retrieve image' />
            </div>
            <div className='JobDescriptionDiv'>
                <div className='CompanyFavorites'>
                    <h1>{job.employer.companyName}</h1>
                    <div className='Favorites'>
                        <img id={'image' + job.id} src={isFavorite ? sFavorite : uFavorite} onClick={changeFavoriteStatus} />
                    </div>
                </div>
                <div className='PositionSalary'>
                    <h3 className='Position'>{convertPositionToString(job.position)}</h3>
                    <h3 className='Salary'>{'$ ' + job.salary + ' /month'}</h3>
                </div>
                <div className='LevelLocation'>
                    <h5 className='Level'>{convertLevelToString(job.level)}</h5>
                    <h5 className='Location'>{convertLocationToString(job.location)}</h5>
                </div>
            </div>
        </div>
    )

    function _changeFavoriteStatus() {
        document.getElementById('image' + job.id).src = isFavorite ? uFavorite : sFavorite
        isFavorite = !isFavorite
    }
}


