import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineArrowRight} from 'react-icons/ai'
// import { Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

 

const Navbar = () => {
    const [nav, setNav] = useState()
    const handleNav = () => {
        setNav(!nav)
    }
    return (
            // desktop and tablet size navbar
            <nav className='bg-[#f5f5dc9c] bg-opacity-70 fixed top-0 left-0 right-0 navbar flex justify-between items-center h-[5px] mx-auto px-8 md:px-16 py-8 md:py-12' id="home">
                <h1 className='text-xl md:text-3xl'><span className='font-medium'>Waris</span> Alokozay</h1>
                <ul className='hidden md:flex'>
                    <div className='navbar-bg flex bg-[#fff] p-2 pl-10 rounded-full rounded-r-lg	border-r-2 border-[#000000]'>
                        <li className='pr-10 text-lg cursor-pointer font-medium text-black hover:text-stone-400'><a href="#projects">Projects</a></li>
                        <li className='pr-10 text-lg cursor-pointer font-medium text-black hover:text-stone-400'><a href="#contact">Contact</a></li>
                        <li className='pr-10 text-lg cursor-pointer font-medium text-black hover:text-stone-400'><a href="#about">About</a></li>
                    </div>
                    <div className='flex pt-2 pl-2 hover:bg-[#fff] rounded-r-full'>
                        <li className='text-lg font-medium cursor-pointer'><a href="https://drive.google.com/file/d/1CIPigDP2cI1hw3G6oW-LAdkWVEdGUDUz/view?usp=sharing" target="blank">Resume</a></li>
                        <AiOutlineArrowRight className='my-[6.2px] mx-1' />
                    </div>
                   
                </ul>
                {/* Menu toogle */}
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ?  <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
                {/* mobile size navbar */}
                <div className={nav ? 'fixed md:hidden left-0 top-0 min-w-[50%] h-full bg-white bg-opacity-70 backdrop-blur-lg shadow-sm ease-in-out duration-200' : 'fixed ease-in-out duration-200 left-[-100%]'}>
                    <h1 className='text-xl md:text-3xl py-[34px] px-4 p-5 '><span className='font-medium'>Waris</span> Alokozay</h1>
                    <ul className='pt-8 pl-8 mt-4'>
                        <div className='navbar-bg flex flex-col'>
                            <li onClick={handleNav} className='pr-10 pt-6 text-xl cursor-pointer text-slate-600 hover:text-stone-900'><a href="#projects">Projects</a></li>
                            <li onClick={handleNav} className='pr-10 pt-6 text-xl cursor-pointer text-slate-600 hover:text-stone-900 '><a href="#contact">Contact</a></li>
                            <li onClick={handleNav} className='pr-10 pt-6 text-xl cursor-pointer text-slate-600 hover:text-stone-900 '><a href="#about">About</a></li>
                            <div className='flex mt-6 pl-2 w-32 border-l-2 border-stone-900  hover:bg-slate-100 rounded-r-full'>
                                <li className='text-xl py-1 font-medium cursor-pointer'><a href="https://drive.google.com/file/d/1CIPigDP2cI1hw3G6oW-LAdkWVEdGUDUz/view?usp=sharing" target="blank">Resume</a></li>

                                <AiOutlineArrowRight className='my-[11px] mx-1' />
                            </div>
                        </div>
                    </ul>
                </div>

               
            </nav>
        
    )
}

export default Navbar