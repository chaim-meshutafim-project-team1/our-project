import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/landing.css'
import Logo from '../../img/yad2Logo.png'
import axios from 'axios'
import Button from '../utils/Button'

const Landing = () => {


    const myFunc = async () => {

        const result = await axios.get('http://localhost:5000/api/translate', {
            url: "test.com"
        })
        console.log(result);

       
    }

    return (
        <div className="landing-page">
            <img src={Logo}></img>
            <Link to="/favorites">to favorites</Link>
            <br></br>
            <Link to="/translation">to translat</Link>
            <Button text="Test" onClick={myFunc} />
        </div>
    )
}

export default Landing