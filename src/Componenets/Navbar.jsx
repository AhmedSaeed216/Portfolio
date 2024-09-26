import React, { useState } from 'react'
import Drawer from './Drawer'
import Hamburger from 'hamburger-react'
// import Buttons,{AnimatedSubscribeButtonDemo} from './Button'
// import {AhmedCV} from '../assets/AhmedCV.pdf'



const Navbar = () => {
    const [isopen, setisopen] = useState(false)

    const toggleDrawer = () => {
        setisopen(!isopen)
    }

    return (
        <>
            <div >
                <div className='flex gap-40'>

                    <span className=' lg:hidden md:hidden  '>
                        <Hamburger toggled={isopen} toggle={toggleDrawer} />
                    </span>
                    <div className=' lg:hidden md:hidden  logo text-2xl '><span className='text-red-700'>Port</span> <span>folio</span></div>
                </div>



                <nav className='lg:flex lg:flex-row justify-between hidden mx-5 my-2 lg:block md:flex md:block'>

                    {/* sec 1 */}
                    <div className='logo text-2xl '><span className='text-red-700'>Port</span> <span>folio</span></div>

                    {/* 2nd sec */}
                    <div >
                        <ul className='flex flex-row gap-5 ' >
                        <li className='text-white hover:underline active:underline cursor-pointer transition-transform  transform  hover:scale-105  hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)] duration-300  ease-in-out '><a href="#home">Home</a></li>
                        <li className='text-white hover:underline active:underline cursor-pointer transition-transform  transform  hover:scale-105  hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)] duration-300  ease-in-out '><a href="#about">About</a></li>
                        <li className='text-white hover:underline active:underline cursor-pointer transition-transform  transform  hover:scale-105  hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)] duration-300  ease-in-out '><a href="#skills">Skills</a></li>
                        <li className='text-white hover:underline active:underline cursor-pointer transition-transform  transform  hover:scale-105  hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)] duration-300  ease-in-out '><a href="#contact">Contact me</a></li>
                        <li className='text-white hover:underline active:underline cursor-pointer transition-transform  transform  hover:scale-105  hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)] duration-300  ease-in-out '><a href="#project">Projecrs</a></li>
                        </ul>
                    </div>

                    <div>

                        <a href='/AhmedCV.pdf' download="AhmedCV.pdf">
                            <button className='bg-white text-black font-xl font-bold rounded-lg w-28 h-11  hover:bg-black hover:text-white border-white '>
                                Download CV
                               {/* <AnimatedSubscribeButtonDemo/>  */}
                               {/* <Buttons/> */}
                            </button>
                        </a>
                    </div>
                </nav>
            </div>

            {isopen && <Drawer />}
            {/* <Drawer/> */}
        </>
    )
}

export default Navbar

