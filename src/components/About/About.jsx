import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-tittle">
            <h1> About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
           <div className="about-section">
            <div className="about-left">
                {/*<img src={profile_img} alt="" />*/}
            </div>
            <div className="about-right"> 
                <div className="about-para">
                    <p>I’m a passionate Full-Stack Developer specializing in the MERN stack (React.js, Node.js, MongoDB) 
                        with hands-on experience in building dynamic, 
                        user-friendly web applications. Skilled in frontend (React.js, HTML, CSS, JavaScript) and backend
                         (Node.js, Express.js, Python, Java) development, 
                        I thrive on solving real-world problems through clean and efficient code.I’ve developed projects like a
                         MERN-based eCommerce platform with payment integration,a Blood Donor Engagement System with real-time updates, 
                         and a personal portfolio showcasing my skills and projects. Proficient in version control (Git, GitHub) and 
                         deployment (Vercel, Netlify), I’m eager to contribute to impactful projects and grow as a developer.Open to roles in frontend, 
                         backend, or full-stack development—let’s build something amazing together!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p> HTML & CSS</p> <hr style={{width:"65%"}} /> </div>
                    <div className="about-skill">   <p> Java</p> <hr style={{width:"70%"}} /> </div>
                    <div className="about-skill"> <p> Python</p> <hr style={{width:"60%"}} /> </div>
                    <div className="about-skill"> <p> SQL</p> <hr style={{width:"60%"}} /> </div>
                    <div className="about-skill"> <p> React</p> <hr style={{width:"70%"}} /> </div>
                   
                </div>
            </div>
           </div>
           <div className="about-achievements">
            <div className="about-achievement">
                <h1>Intern</h1>
                <p> EXPERIENCE</p>
            </div>
            <div className="about-achievement">
                <h1> 3</h1>
                <p> PROJECTS COMPLETED</p>
            </div>
           
           </div>
        </div>
  )
}

export default About