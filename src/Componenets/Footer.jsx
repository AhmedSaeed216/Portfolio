import React from 'react';
import Icon from './About.jsx'
const Footer = () => {
  return (
    <footer className="bg-gray-80 bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <Icons img="/github.png" link="https://github.com/ahmedsaeed216"/>
          <Icons img="/linkedin.png" link="https://www.linkedin.com/in/ahmed-saeed-515117248"/>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <p>Contact me:  <br /> ahmed.saeed6402@gmail.com | 0328 1132442</p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; All Rights Reserved.</p>
          
          <a href="#home" ><img className='w-10 absolute right-1  ' src="/home.png" alt="" /></a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;



const Icons=({img,link})=>{
    return(
        <>
        <a href={link} target='blank'>
        <img className='w-10' src={img} alt="" />
        </a>
        </>
    )
}
