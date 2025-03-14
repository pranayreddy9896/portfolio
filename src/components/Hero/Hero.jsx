import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumePdf from '../../assets/resume.pdf';
const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm, Pranay,</span>Full Stack Developer</h1>
        <p> Hi, I’m Pranay, a Full-Stack Developer with a passion for building scalable, user-friendly web applications.
             I specialize in both frontend and backend development, leveraging technologies like React, JavaScript, Java, Python, SQL, 
             and MongoDB to create seamless digital experiences. Whether it’s 
            crafting intuitive user interfaces or designing robust databases, I thrive on turning ideas into reality.</p>
    <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink></div>
<<<<<<< HEAD
            <div className="hero-resume">
              <a href={resumePdf} download="Pranay_Resume.pdf">Download Resume</a>
=======
            <div className="hero-resume"><a href={resumePdf} download="Pranay_Resume.pdf">Download Resume</a>
>>>>>>> origin/master
            </div>
        </div>
    </div>
  )
}

export default Hero
