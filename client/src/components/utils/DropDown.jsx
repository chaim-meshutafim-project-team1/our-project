import React from 'react';
import './css/dropdown.css';

function DropDown({onChange}) {

    return (
       <div className="dropdown">
        <select id="dropdown" onChange={onChange} >
            <option value=''>Language</option> 
            <option value="ar">العربية</option> 
            <option value="ru">Pусский</option> 
            <option value="en">English</option> 
          </select>  
       </div>
    )
}

export default DropDown
