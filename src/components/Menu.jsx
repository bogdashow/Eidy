import React, { useState } from 'react'
import logo from '../img/logoEidy.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const activeLink = 'text-slate-400'
   const normalLink = ''

   const handleNav = () => {
      setNav(!nav);
   };

   return (
      <div className='w-full px-4 bg-slate-950 absolute'>
         <div className='max-w-[1240px] mx-auto flex justify-between items-center h-24 text-slate-500 font-semibold font-body cursor-pointer'>
            <a href="/">
               <img className='mt-4' src={logo} alt='logo' height={80} width={80} />
            </a>
            <ul className='hidden md:flex'>
               <NavHashLink smooth exact to="#About"
                  className={({ isActive }) => isActive ? activeLink : normalLink}
               ><li className='p-4 hover:text-blue-400 ease-out duration-500'>About</li></NavHashLink>
               <NavHashLink smooth exact to="#KeyFutures"
                  className={({ isActive }) => isActive ? activeLink : normalLink}
               ><li className='p-4 hover:text-blue-400 ease-out duration-500'>Key Futures</li></NavHashLink>
               <NavHashLink smooth exact to="#Benefits"
                  className={({ isActive }) => isActive ? activeLink : normalLink}
               ><li className='p-4 hover:text-blue-400 ease-out duration-500'>Benefits</li></NavHashLink>
               <NavHashLink smooth exact to="#Contact"
                  className={({ isActive }) => isActive ? activeLink : normalLink}
               ><li className='p-4 hover:text-blue-400 ease-out duration-500'>Contact</li></NavHashLink>
            </ul>
            <div onClick={handleNav} className='sm:hidden z-10'>
               {nav ? <AiOutlineClose size={20} color='slate-300' /> : <AiOutlineMenu size={20} color='slate-300' />}
            </div>

            <div
               onClick={handleNav}
               className={
                  nav
                     ? 'overflow-y-hidden md:hidden absolute left-0 top-0 w-full h-screen text-white font-normal border-r border-r-gray-900 bg-black ease-in-out duration-300'
                     : 'absolute top-0 h-full left-[-100%] ease-in-out duration-300'
               }
            >
               <img className='mt-4 ml-4' src={logo} alt='logo' height={80} width={80} />
               <ul className='pt-4'>
                  <NavHashLink smooth exact to="#About"
                     className={({ isActive }) => isActive ? activeLink : normalLink}
                  ><li className='p-4 border-b border-gray-900 hover:text-blue-400 ease-out duration-500'>About</li></NavHashLink>
                  <NavHashLink smooth exact to="#KeyFutures"
                     className={({ isActive }) => isActive ? activeLink : normalLink}
                  ><li className='p-4 border-b border-gray-900 hover:text-blue-400 ease-out duration-500'>Key Futures</li></NavHashLink>
                  <NavHashLink smooth exact to="#Benefits"
                     className={({ isActive }) => isActive ? activeLink : normalLink}
                  ><li className='p-4 border-b border-gray-900 hover:text-blue-400 ease-out duration-500'>Benefits</li></NavHashLink>
                  <NavHashLink smooth exact to="#Contact"
                     className={({ isActive }) => isActive ? activeLink : normalLink}
                  ><li className='p-4 border-b border-gray-900 hover:text-blue-400 ease-out duration-500'>Contact</li></NavHashLink>
               </ul>
            </div>
         </div >
      </div>
   )
}

export default Navbar;