import React from 'react'
import aboutImg from '../assets/aboutImg.jpg'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <section className="about-me bg-gradient-to-r from-gray-900 to-slate-900 flex flex-col   lg:h-screen  p-4 sm:p-20  items-center justify-center pt-40">
            <h1 className='font-anta text-white text-center text-4xl m-8 sm:text-6xl hover:text-cyan-200 transition-all duration-500 ease-in'>About Me</h1>
            <div className='flex flex-col items-center lg:flex-row sm:justify-around sm:max-h-full lg:gap-20'>
                <div className="about-img max-w-60 sm:min-w-80">
                    <img src={aboutImg} alt="About Me " className='rounded-full' />
                </div>
                <div className="about-content m-8 flex  flex-col gap-4 justify-between max-w-xl font-poppins">
                    <h3 className='text-white font-anta text-2xl text-center sm:text-5xl sm:my-5 lg:text-start'>Who am <span className='text-cyan-500'>I</span>  <span className='text-cyan-500'>?</span></h3>
                    <p className='text-white text-sm'>Hi, I’m Anjul Aryal — a passionate frontend developer and tech enthusiast from Nepal. I love turning creative ideas into clean, responsive, and interactive web experiences. </p>
                    <p className='text-white text-sm'>With a strong foundation in HTML, CSS, and JavaScript, I specialize in building user-friendly websites and applications that not only look great but also function seamlessly across all devices. My expertise extends to popular frameworks like React and Tailwind CSS, allowing me to create dynamic and visually appealing interfaces.</p>
                    <Link to="/projects" className='bg-cyan-500 text-white max-w-32 border-none rounded-lg p-2 cursor-pointer my-10 shadow-lg hover:shadow-cyan-500/50 transition-all duration-700 ease-in-out hover:p-3 text-center'> My Works</Link>
                </div>
            </div>
        </section>
    )
}

export default About
