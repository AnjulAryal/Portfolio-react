import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import EducationTimeline from "./EducationTimeline";
import  Contact  from "./Contact";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <EducationTimeline/>
        <Skills/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default HomePage
