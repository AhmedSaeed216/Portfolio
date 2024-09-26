import React from 'react'

const Skills = () => {
  return (
    <>
    <div id='about' className='mt-5 flex justify-center flex-col items-center gap-8'>
        <h1 className='text-3xl  font-bold   '>What I do</h1>
        
        {/* <p className=' align-bottom font-light font-sans text-balance'>I am skilled and passionate frontend  web designer
            with experienced in creating visually appealing  <br /> and user friendly websites.
             I have a strong understanding of design and kepp eye for detail. <br />
             I am proficient in HTML,CSS,Bootstrap,Tailwind,Javascript, React,Vite.
             <p>I'm a BSCS student at GCUL.</p>
              </p> */}
              <p className="align-bottom mx-6 font-light font-sans text-balance">
    I am a skilled and passionate frontend web designer with a talent for crafting visually stunning and user-friendly websites. 
    My expertise lies in creating seamless digital experiences, with a sharp eye for design and meticulous attention to detail. 
    I am proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and Vite. 
     <br /> Currently, I am pursuing a BSCS degree at GCUL.
</p>

    </div>
    {/* images */}

{/* <hr className='mt-3 mx-3'/> */}
    <div id='skills'>

    <h1 className='flex   justify-center mt-10 font-bold text-3xl'>Web skills</h1>
    <div className='mt-10 grid grid-cols-2  md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3'>
        <Skill img="/html.png" des="HTML"/>
        <Skill img="/css-3.png" des="CSS"/>
        <Skill img="/bootstrap.png" des="Bootstrap"/>
        <Skill img="/tailwind.png" des="Tailwind"/>
        <Skill img="/java-script.png" des="javascript"/>
        <Skill img="/atom.png" des="React"/>
        <Skill  img="/firebase.png" des="Firebase"/>
        </div>

        <h1 className='flex justify-center mt-10 font-bold text-3xl'>Other skills</h1>
        
        <div className='mt-10  grid grid-cols-3'>
        <Skill img="/ml.png" des="Machine Learning"/>
        <Skill img="/python.png" des="Python"/>
        {/* <Skill img="/css-3.png" des="CSS"/> */}
        
        
        
    </div>
    </div>
    </>
  )
}

export default Skills

const Skill=({img,des})=>{
    return(
        <>
        
        <div className='mt-4 cursor-pointer'>

    <img className='w-20' src={img}/>
    <h1 className='ml-3.5'>{des}</h1>
        </div>
        
    </>
    )
}