import React,{useState,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import './css/navbar.css'
import Logo from '../../img/yad2Logo.png'

function Navbar() {

  const [selected,setSelected]=useState("home");

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath){
      case '/':
        setSelected("home");
        break;
      case '/translation':
        setSelected("translation");
        break;
      case '/favorites':
        setSelected("favorites");
        break;
      default:
    }
  }, [location]);

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="yad2logo"/>
      <div className="navBtns">
         <div className="navBtn" ><Link className={selected==="home"? "selected":''} to="/">Home</Link></div>
         <div className="navBtn" ><Link className={selected==="translation"? "selected":''}to="/translation">Translate</Link></div>
         <div className="navBtn" ><Link className={selected==="favorites"? "selected":''}to="/favorites">Favorites</Link></div>
      </div>
    </div>
  )
}

export default Navbar
