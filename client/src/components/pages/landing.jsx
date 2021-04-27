import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/landing.css'
import Logo from '../../img/yad2Logo.png'
import axios from 'axios'

const Landing = () => {

    useEffect(() => {
        const fetchData = async () => {
            // const result = await axios.get('http://localhost:5000/api/translate')
            // console.log(result);
        }
        fetchData()
    }, [])

    return (
        <div className="landing-page">
            <img src={Logo}></img>
            <Link to="/favorites">to favorites</Link>
            <br></br>
            <Link to="/translation">to translat</Link>
        </div>
    )
}

export default Landing