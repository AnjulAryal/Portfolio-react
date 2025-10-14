import React from 'react'
import { GrProjects } from "react-icons/gr";
import weatherImg from "../assets/weather.jpg"
import portfolioImg from "../assets/Portfolio Website.png"
import vanlifeImg from "../assets/vanlife.png"
import evcarImg from "../assets/carPage.png"
const Projects = () => {
    let projects = [
        {
            title: "Weather App",
            description: "A web application that provides weather information for various locations. Fetches data from a weather API and displays current weather conditions, forecasts, and other relevant information.",
            imageUrl: weatherImg,
            projectUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase projects, skills, and experience. Built with modern web technologies and designed to be responsive and visually appealing.",
            imageUrl: portfolioImg,
            projectUrl: "#"
        },
        {
            title: "Van Life",
            description: "A platform for van enthusiasts to share their experiences, tips, and travel stories. Includes features like user profiles, photo galleries, and a blog section.",
            imageUrl: vanlifeImg,
            projectUrl: "#"
        },{
            title: "EV Website",
            description: "A website dedicated to electric vehicles (EVs), providing information on different models, charging stations, and industry news. Features a user-friendly interface and interactive elements.",
            imageUrl: evcarImg,
            projectUrl: "#https://evcar1.netlify.app/"
        }

    ]
    return (
        <section className="projects bg-gradient-to-r from-slate-900 to-gray-800  p-8 sm:px-20 py-15 flex flex-col gap-12 pt-40 ">
            <h1 className='text-4xl font-bold text-center  text-cyan-400 flex items-center justify-center gap-2 font-anta'> <GrProjects/> Projects</h1>
            <div className='flex flex-col gap-8 items-center md:flex-row justify-center flex-wrap'  >
                {
                    projects.map((project,index)=>(
                        <div className="project text-white bg-slate-700 p-4 rounded-[5px] w-full max-w-sm min-h-110 hover:shadow-xl  shadow-cyan-200/20 transition-all duration-300 ease-linear " key={index} >
                            <div className="project-img h-50 overflow-hidden mb-4 w-full ">
                                <img src={project.imageUrl} alt={project.title} className='w-full h-full object-cover'/>
                            </div>
                            <h2 className='text-cyan-300 text-center text-xl font-bold'>{project.title}</h2>
                            <p className='text-sm text-gray-400'>{project.description}</p>
                            <div className='flex justify-center mt-2'>
                                <button className='bg-cyan-500 text-white max-w-32 border-none rounded-lg p-2 cursor-pointer my-3 shadow-lg hover:shadow-cyan-500/50 transition-all duration-700 ease-in-out hover:p-3'><a href={project.projectUrl}>View Project</a></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
