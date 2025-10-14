import React from 'react'
import { GiSkills } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import Typewriter from 'typewriter-effect';
import { icons } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            name: "Frontend Development",
            tools: ["HTML", "CSS", "JavaScript", "React"]

        },
        {
            name: "SEO & Analytics",
            tools: ["Google Analytics", "Google Search Console", "Yoast SEO",  "SEMrush"],
            
        },
        {
            name: "Version Control",
            tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
        },
        {
            name: "Design Tools",
            tools: ["Figma", "Adobe XD", "Canva", "Photoshop"],
        }
    ]
    return (
        <section className="skills bg-gradient-to-r from-slate-900 to-gray-800 text-white pt-40  sm:px-20  flex flex-col lg:items-center gap-10 ">
            <h1 className='text-4xl font-bold text-center mb-12 text-cyan-400 flex items-center justify-center gap-2'> <GiSkills className='w-10 h-8' /> Skills</h1>
            <div className='flex flex-row group-hover:ring-cyan-500 lg:w-[1000px] flex-wrap lg:justify-center h-full m-4 '>
                {
                    skills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className=" w-full lg:max-w-sm bg-slate-800 rounded-sm m-4 p-4 h-auto flex flex-col  hover:shadow-lg hover:shadow-cyan-800/100 transition-all duration-400 ease-initial"
                            >
                                <h3 className='text-white text-center font-bold font-anta mb-2'>{skill.name}</h3>
                                <ul className='flex flex-col gap-2'>
                                    {
                                        skill.tools.map((tool, index) => (
                                            <li key={index} className='text-gray-400 text-sm bg-slate-500 p-2 rounded-sm flex items-center'> {tool}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills
