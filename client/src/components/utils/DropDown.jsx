import React, { useState } from 'react';
import './css/dropdown.css';
import Button from './Button'

function DropDown() {

    const [isClick, setIsClick] = useState(false)

    const revel = () => {
        setIsClick(prev => !prev)
    }

    return (
        <div className="dropdown">
            <div>
                <Button className="dd-btn" onClick={revel} text="Choose Language" />
                <i class="fas fa-arrow-down"></i>
            </div>
            <Button className={isClick ? "dd-btn-secondary" : "hide"} text="Choose Language" />
            <Button className={isClick ? "dd-btn-secondary" : "hide"} text="Choose Language" />
            <Button className={isClick ? "dd-btn-secondary" : "hide"} text="Choose Language" />
        </div>
    )
}

export default DropDown
