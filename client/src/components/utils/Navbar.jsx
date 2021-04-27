import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
import Logo from '../../img/yad2Logo.png'

function Navbar() {

  const [selected,setSelected]=useState("home");

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="yad2logo"/>
      <div className="navBtn" onClick={()=>setSelected("home")}><Link className={selected==="home"? "selected":''} to="/">Home</Link></div>
      <div className="navBtn" onClick={()=>setSelected("favorites")}><Link className={selected==="favorites"? "selected":''}to="/favorites">Favorites</Link></div>
      <div className="navBtn" onClick={()=>setSelected("translation")}><Link className={selected==="translation"? "selected":''}to="/translation">Translate</Link></div>
    </div>
  )
}

export default Navbar
