import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../../../assets/edu-logo.png';
import './Navbar.css'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const toggleCoursesMenu = () => {
        setIsCoursesOpen(!isCoursesOpen);
    };


    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);

    const navOptions = <>
        <li className="nav-lists">
            <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="list-links  transition font-medium text-base lg:px-3 lg:py-2 py-4 md:mx-2 rounded-md"
                onClick={toggleDrawer}
            >
                About
            </ScrollLink>
        </li>
        <li className="nav-lists relative ">
            <button
                onClick={toggleCoursesMenu}
                className="list-links transition font-medium text-base lg:px-3 lg:py-0 py-4 md:mx-2 rounded-md flex items-center"
            >
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isCoursesOpen && (
                <ul className="absolute left-0 top-10 mt-2 py-2 primary-text bg-white border text-[15px] rounded-md shadow-lg z-10 w-40">
                    <li className="py-1 lg:px-4 hover:bg-gray-200">
                        <ScrollLink
                            to="web-development"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="block"
                            onClick={toggleDrawer}
                        >
                           Mathematics
                        </ScrollLink>
                    </li>
                    <li className="py-1 lg:px-4 hover:bg-gray-200">
                        <ScrollLink
                            to="web-development"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="block"
                            onClick={toggleDrawer}
                        >
                            Physics
                        </ScrollLink>
                    </li>
                    <li className="py-1 lg:px-4 hover:bg-gray-200">
                        <ScrollLink
                            to="graphic-design"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="block"
                            onClick={toggleDrawer}
                        >
                            Chemistry
                        </ScrollLink>
                    </li>
                </ul>
            )}
        </li>

        <li className="nav-lists">
            <ScrollLink
                to="top-students"
                smooth={true}
                duration={500}
                offset={-20}
                className="list-links transition  font-medium text-base lg:px-3 lg:py-2 py-4 md:mx-2 rounded-md"
                onClick={toggleDrawer}
            >
               Our Students
            </ScrollLink>
        </li>

    </>
    return (
        <>
            <div className=''>
                <div className={color ? 'nav-scroll navbar z-[100] fixed top-0 sm:flex sm:justify-between  lg:px-24' : 'nav-area navbar fixed top-0 z-[100] sm:flex sm:justify-between  lg:px-24'}>

                    <div className="navbar-start  lg:w-1/3 w-2/3 lg:justify-start flex justify-between">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn-sm btn btn-ghost lg:hidden" onClick={toggleDrawer}>
                                {isDrawerOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                )}
                            </label>
                            {isDrawerOpen && <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-gray-100 w-52 py-6">
                                {navOptions}
                            </ul>}

                        </div>

                        <Link to='/' className="flex items-center sm:border-3 normal-case lg:text-lg lg:font-medium sm:text-small ">
                            <img
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src={logo}
                                alt="logo"
                                width={40}
                                height={40}
                                priority
                            />
                            <span className='lg:text-xl font-semibold'>Academix</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu-horizontal lg:px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end  w-1/3">
                    <Link href='#'><button className="hover:bg-amber-600 secondary-bg text-white rounded-md px-5 py-2.5 text-sm font-medium hover:text-white shadow ">Login</button></Link>
                </div>
                </div>
            </div>

        </>

    );
};

export default Navbar; 