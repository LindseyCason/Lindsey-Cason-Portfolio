import React from 'react'

export const Projects=()=>{
    return(
        <div className="projectContainer" id="myWork" data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="1000">      
            <div className="projectTitle">
     
                <div>My Work</div><div className='line'/>
            </div>
            <div className="projects">
                <div className="projectItem">
                    <div>
                    <a href="#">My Project</a>
                    <img src="#" alt="alt text" />
                    </div>
                    <span>
                        This is a description of a project.
                        <p>Tech Stack:</p>
                    </span>
                </div>
                <div className="projectItem">
                    <div>
                    <a href="#">My Project</a>
                    <img src="#" alt="alt text" />
                    </div>
                    <span>
                        This is a description of a project.
                        <p>Tech Stack:</p>
                    </span>
                </div>
                <div className="projectItem">
                    <div>
                    <a href="#">My Project</a>
                    <img src="#" alt="alt text" />
                    </div>
                    <span>
                        This is a description of a project.
                        <p>Tech Stack:</p>
                    </span>
                </div>
            </div>
        </div>

    )
}
