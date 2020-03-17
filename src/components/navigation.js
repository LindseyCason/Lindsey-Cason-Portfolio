import React from 'react'
import L from "../utils/L.png"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown"
const Navigation=()=>{

    const dropdownShow=()=>{
        var el = document.getElementById("mobNavA")
        console.log(el)
        // el.classList.add("NavDropdownOff")
    }

    return(
        
        
        <div className = "navContainer">
            <img src={L} className="icon"></img>
            <div className="navItem">
                <a href="#about" className="navLinks navDesk">ABOUT</a>
            </div>

            <div className="navItem">
                <a href="#myWork" className="navLinks navDesk">WORK</a>
            </div>

            <div className="navItem">
                <a href="#contact" className="navLinks navDesk">CONTACT</a>
            </div>

            <div className="navItem">
                <a href="#resume" className="navLinks navDesk resumeLink">RESUME</a>
            </div>

            {/* <NavDropdown title={<i class="fas fa-bars burg" style={{fontSize: 40, color: "white"}}/>} id="basic-nav-dropdown" className="Nav-Drop navMob">
                <><NavDropdown.Item eventKey="4.2" href="#about" className="mobnavLinks">ABOUT</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.1" href="#myWork" className="mobnavLinks">WORK</NavDropdown.Item>
                </>
                <><NavDropdown.Item eventKey="4.2"href="#contact" className="mobnavLinks">CONTACT</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3" href="#resume" className="mobnavLinks">RESUME</NavDropdown.Item></>
            </NavDropdown> */}
            <div className="menu-wrap">
                <input className="toggler" type="checkbox"></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#myWork">MY WORK</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a href="#resume">RESUME</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    {/* <div className="mobnavLinks"> <a href="#about" className="navLinks">ABOUT</a></div>
                    <div className="mobnavLinks"><a  href="#myWork" className="navLinks">WORK</a></div>
                    <div className="mobnavLinks"><a href="#contact" className="navLinks">CONTACT</a></div>
                    <div className="mobnavLinks"><a href="#resume" className="navLinks">RESUME</a></div> */}
                </div>
            </div>
    
        
        
    )

}
export default Navigation