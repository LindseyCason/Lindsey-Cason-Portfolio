import React from 'react'
import L from "../utils/L.png"

const Navigation=()=>{
    return(
        
        
        <div className = "navContainer">
            <img src={L} className="icon"></img>
            <div className="navItem">
                <a href="#about" className="navLinks">ABOUT</a>
            </div>

            <div className="navItem">
                <a href="#myWork" className="navLinks">WORK</a>
            </div>

            <div className="navItem">
                <a href="#contact" className="navLinks">CONTACT</a>
            </div>

            <div className="navItem">
                <a href="#resume" className="navLinks resumeLink">RESUME</a>
            </div>
        </div>
        
        
    )

}
export default Navigation