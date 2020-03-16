import React from 'react';


export const TopMain=()=>{
    return(
        <div className="topMain" data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000">

            <div className="smallText">
                Hi, my name is
            </div>
            <div className="nameText">
                Lindsey Cason.
            </div>
            <div className="topContent">
                <p>
                    I am a software developer based in New Orleans, LA. I specialize in building high-quality websites and applications.
                </p>
            </div>
            <button>Let's Connect</button>
            <div className="sectionBreak" data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="1000" id="about"><div className="blink" style={{color:"rgb(119, 254, 233)", textAlign:"center"}}>&#x2B07; scroll &#x2B07;</div></div>
        </div>

    )
}
