import React from 'react'
import './../CSS/FilterDiv.css'
import { Button } from './Button'

export const FilterDiv = () => {
    return (
        <div className='FilterDiv'>
            <div className='Row1'>
                <select id='locationSelector'>
                    <option value='Select'>Select</option>
                    <option value='Bucharest'>Bucharest</option>
                    <option value='ClujNapoca'>Cluj-Napoca</option>
                    <option value='Timisoara'>Timisoara</option>
                    <option value='Iasi'>Iasi</option>
                    <option value='Constanta'>Constanta</option>
                    <option value='Craiova'>Craiova</option>
                    <option value='Brasov'>Brasov</option>
                    <option value='Galati'>Galati</option>
                    <option value='Ploiesti'>Ploiesti</option>
                    <option value='Oradea'>Oradea</option>
                </select>
                <select id='positionSelector'>
                    <option value='Select'>Select</option>
                    <option value='Frontend'>Frontend</option>
                    <option value='Backend'>Backend</option>
                    <option value='Fullstack'>Fullstack</option>
                    <option value='DataScientist'>Data Scientist</option>
                    <option value='DevOps'>DevOps</option>
                    <option value='CloudDev'>Cloud Developer</option>
                    <option value='AIEngineer'>AI Engineer</option>
                    <option value='NetworkEngineer'>Network Engineer</option>
                </select>
                <Button text='Filter' />
            </div>
            <div className='Row2'>
                <select id='levelSelector'>
                    <option value='Select'>Select</option>
                    <option value='Internship'>Internship</option>
                    <option value='Entry'>Entry Level</option>
                    <option value='Associate'>Associate</option>
                    <option value='Mid'>Mid Level</option>
                    <option value='Senior'>Senior</option>
                </select>
                <select id='salarySelector'>
                    <option value='Select'>Select</option>
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
    )
}
