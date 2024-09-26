import React from 'react';
const Drawer = ({ isopen, toggleDrawer }) => {
    return (
        <>
            <div className=' bg-slate-400   w-40 h-80 p-3'>
                <div >

                    <ul className='flex gap-3 flex-col z-50' >
                        <li className='text-black hover:underline active:underline cursor-pointer'><a href="#home">Home</a></li>
                        <li className='text-black hover:underline active:underline cursor-pointer'><a href="#about">About</a></li>
                        <li className='text-black hover:underline active:underline cursor-pointer'><a href="#skills">Skills</a></li>
                        <li className='text-black hover:underline active:underline cursor-pointer'><a href="#contact">Contact me</a></li>
                        <li className='text-black hover:underline active:underline cursor-pointer'><a href="#project">Projecrs</a></li>
                        <li>
                            <a href='/AhmedCV.pdf' download="AhmedCv">
                                <button className='text-black hover:underline active:underline cursor-pointer ' >Download CV</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Drawer;
