import React from 'react'
// import {image} from ""
const About = () => {
    return (
        <div className='lg:flex lg:flex-row gap-20 ' id='home'>
            <div className='left font-mediu font-sans mt-20 p-3 lg:relative    lg:bsolute top-56 left-20 '>

                {/* <br /> */}
                <h1>Hello</h1>
                <span className='text-xl'>I'm</span>  <span className='text-yellow-400 text-2xl '>Ahmed Saeed</span>
                <br />
                <h1 className='font-bold text-3xl'>Frontend Web Developer </h1>
                <p className='text-xl text-slate-300'>I am skilled and passionate frontend web develeoper  </p>
                <div className='icons mt-4 flex  gap-3'>
                    <Icon img="/linkedin.png" link="https://www.linkedin.com/in/ahmed-saeed-515117248"/>
                    <Icon img="/github.png" link="https://github.com/ahmedsaeed216"/>
                </div>
            </div>

            <div className='right'>
                {/* <img src="/MainPic.png" alt=""  className='drop-shadow-md'/> */}
                <img
                    src="/MainPic.png"
                    alt="Main Picture"
                    className="w-full
                    max-w-lg
                    transition-transform
                    transform
                    hover:scale-105
                    hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)]
                    duration-300
                    ease-in-out
                    top-56
                    right-20
                    "
                />


            </div>
            {/* <hr className='text-white' /> */}

        </div>
    )
}

export default About

const Icon=({img,link})=>{
    return(
        <>
        <a href={link} target='blank'>
        <img className='w-10' src={img} alt="" />
        </a>
        </>
    )
}




