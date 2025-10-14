import React from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    function handleMenuButton() {
        setOpen(!open);
    }
    return (
        <nav className={`fixed top-0 flex justify-between items-center p-4 px-8 bg-black bg-gradient-to-r from-slate-900 to-gray-800 font-anta sm:p-4 sm:px-24  w-full z-10 shadow-lg shadow-cyan-500/10`}>
            {/* logo */}
            <Link to="/" className="text-3xl text-white font-anta cursor-pointer flex items-center gap-1 hover:text-4xl transition-all duration-1000 ease-in-out shadow-lg hover:shadow-cyan-500/2 hover:text-lg0">
                An <span className='text-cyan-400  text-4xl'>Z</span>ooL
            </Link>
            {/* menu button */}
            <button className='z-20 absolute top-6 right-6'>
                {
                    open ? <FaTimes className='text-white text-3xl lg:hidden' onClick={handleMenuButton} size={20} /> : <IoMdMenu className='text-white text-4xl lg:hidden' onClick={handleMenuButton} size={0} />
                }
            </button>
            <ul className={`text-white fixed top-0 right-0 h-screen bg-gradient-to-r from-slate-900 to-gray-800 p-12 flex flex-col gap-12 transition-all duration-700 ease-in-out ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 "} 
            lg:static lg:h-auto lg:w-auto lg:flex-row 
            lg:translate-x-0 lg:opacity-100 lg:p-0 lg:gap-5 lg:bg-none z-10` }>
                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-1000 ease-in-out hover:text-lg' to="/hero">Home</Link>
                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg' to="/about">About</Link>
                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg' to="/education">Education</Link>
                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg' to="/skills">Skills</Link>                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg' to="/projects">Projects</Link>
                <Link className='cursor-pointer hover:text-cyan-400  transition-all duration-500 ease-in-out hover:text-lg' to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}
export default Navbar;
