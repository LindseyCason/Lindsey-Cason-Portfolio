import React from 'react'

const Footer=()=>{
    return(
        <div className = "footerContainer">
            <div className="footerItem">
                <a href="mailto:lindseyacason@gmail.com" className="navLinks"><i class="far fa-envelope"></i></a>
            </div>

            <div className="footerItem">
                <a href="https://github.com/LindseyCason" className="navLinks"><i class="fa fa-github"></i></a>
            </div>

            <div className="footerItem">
                <a href="tel:+15045643792" className="navLinks"><i class="fas fa-phone"></i></a>
            </div>

            <div className="footerItem">
                <a href="https://www.linkedin.com/in/lindseyacason/" className="navLinks"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
        
    )

}
export default Footer