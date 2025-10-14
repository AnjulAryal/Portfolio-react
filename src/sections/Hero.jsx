import React from 'react'
import heroImg from '../assets/Anjul Aryal .png'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-gray-900 to-slate-900 text-white flex  py-20 justify-between  px-10 flex-col lg:flex-row sm:p-20 items-center lg:h-screen'>
            <div className="content w-full md:max-w-3xl p-4 pt-20 flex flex-col gap-2  md:mb-0  sm:pt-30 ">
                <h1 className='font-anta text-2xl md:text-5xl'>Hi, I am Anjul</h1>
                <h2 className='text-cyan-400 text-center text-2xl sm:text-4xl font-freehand'>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'and', 'Sofware Engineer'],
                            autoStart: true,
                            loop: true
                        }}
                    > Frontend Developer</Typewriter>
                </h2>
                <p className='text-sm sm:text-lg text-gray-300'>

                    I am a seasoned professional in web design and development, bringing years of expertise to every project. As a web designer, I excel in crafting visually compelling layouts that enhance user experience. With extensive experience in web development and modern tools, I ensure websites are not only beautiful but also functional and user-friendly across various platforms
                </p>
                <div className="programming-icons flex gap-4 mt-4 items-center justify-start">
                    <FaHtml5 className='text-4xl inline-block mr- text-orange-500 transition-all duration-300 ease-in cursor-pointer' />
                    <IoLogoCss3 className='text-4xl inline-block mr-2 hover:text-blue-500 transition-all duration-300 ease-in cursor-pointer' />
                    <FaReact className='text-4xl inline-block mr-2 text-sky-400 transition-all duration-300 ease-in cursor-pointer animate-spin' />
                    <RiTailwindCssFill className='text-4xl inline-block mr-2 hover:text-cyan-400 transition-all duration-300 ease-in cursor-pointer' />
                </div>
                <button className='bg-cyan-500 text-white max-w-32 border-none rounded-lg p-2 cursor-pointer my-10 shadow-lg hover:shadow-cyan-500/50 transition-all duration-700 ease-in-out hover:p-3'> <a href="../assets/Anjul Aryal Cv frontend(1).pdf" download>Resume</a></button>
            </div>
            <div className="img p-4 max-w-xl flex items-center sm:pt-35">
                <img src={heroImg} alt="Hero Image" className='w-full h-auto max-w-3xl  object-center transition-all duration-1000 ease-out sm:min-w-74' />
            </div>
        </section>
    )
}

export default Hero;
