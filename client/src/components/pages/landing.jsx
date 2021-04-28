import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/landing.css'
import axios from 'axios'
import Button from '../utils/Button'
import Logo from '../../img/yad2Logo.png'

const Landing = () => {

    useEffect(() => {
        const fetchData = async () => {
            const test = await axios.get('/api/test')
            console.log(test);
        }
        fetchData()
    }, [])


    return (
        <div className="landing-page">
            <div className="landing-content-container">
                <div className="landing-textbox">
                    <div className="landing-textbox-heading"><h1 className="hebrew">ברוכים הבאים</h1></div>
                    <p className="hebrew">!אנחנו מציעים פתרון תרגום למוצרים שמוצעים למכירה באתר "יד 2" ומאפשרים לכם לשמור אותם אצלנו באתר</p></div>
                <div className="landing-textbox">
                    <div className="landing-textbox-heading"><h1>Welcome</h1></div>
                    <p>We offer a translation solution for products offered for sale on the "Yad2" website and allow you to save them with us on the website</p></div>
                <div className="landing-textbox">
                    <div className="landing-textbox-heading"><h1 className="arabic">أهلا بك</h1></div>
                    <p className="arabic">نحن نقدم حل ترجمة للمنتجات المعروضة للبيع على موقع "Yad2" ونسمح لك بالاحتفاظ بها معنا على الموقع.</p></div>
                <div className="yad2logo"><img src={Logo} alt="yad2logo" /></div>
            </div>
            <Link to="/translation"><Button text="START" /></Link>
        </div>
    )
}

export default Landing