// import React from 'react'

// const Project = () => {
//   return (
//     <>
//         <h1 className='flex justify-center font-bold text-3xl mt-3 mb-5'>Projects</h1>
//     <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-2' id='project'>
//         <Pro img="/pro1.png" link="https://gymcfitclub.netlify.app" title="Gym Website" des="In this website i have use a lot of animation, Email API  and also it is responsive"/>
//         <Pro img="/pro2.png" link="https://contactstorage.netlify.app" title="Contact Saving App" des="This app has back end in Firebase that stores the data and it is also responsive "/>
//         <Pro img="/todo.jpeg" link="https://dailyitasks.netlify.app" title="Todo App" des="This is a simple todo app to make the schedule of the data that keeps the data in the chrome memory to reload the data after the page refresh"/>
//         <Pro img="/weather.jpeg" link="https://anycityweatherupdate.netlify.app" title="Weather App" des="A weather app that tell the weather of different city through longitude and latitude by weather API" />
//         <Pro img="/News.jpeg" link="https://brilliant-raindrop-d410b5.netlify.app" title="NEWS App" des="News App that give sthe news of about all topics through API (BBC Clone) "/>
//         <Pro img="/fyp.jpeg" link="" title="TB & pneumonia Detection" des="Traing a model in FYP to detect the Tuberculosis(TB) and pneumonia from the chest X-ray"/>
//     </div>
//     </>
//   )
// }

// export default Project

// const Pro=({img,link,title,des})=>{
//     return(
//         <>
//         <a href={link} target='blank' className='max-w-lg w-96
//                     transition-transform
//                     transform
//                     hover:scale-105
//                     hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)]
//                     duration-300
//                     ease-in-out
//                     ml-3
//                     '> 
//             <img className='w-96' src={img} alt="" />
//         <h1 className='flex justify-center font-bold text-xl '>{title}</h1>
//         <p className=' m-2 text-balance font-light'>{des}</p>
//         </a>
//         </>
//     )
// }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Project = () => {
  return (
    <>
      {/* Projects Title */}
      <h1 className="flex justify-center font-bold text-3xl mt-3 mb-5">Projects</h1>

      {/* Slider for Laptop View */}
      <div className="hidden lg:block" id='project'>
        <Swiper
          slidesPerView={2} // Show 2 cards in a row
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Individual Project Cards */}
          <SwiperSlide>
            <Pro
              img="/pro1.png"
              link="https://gymcfitclub.netlify.app"
              title="Gym Website"
              des="In this website I have used a lot of animations, Email API, and also it is responsive."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pro
              img="/pro2.png"
              link="https://contactstorage.netlify.app"
              title="Contact Saving App"
              des="This app has back-end Firebase integration that stores the data and is also responsive."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pro
              img="/todo.jpeg"
              link="https://dailyitasks.netlify.app"
              title="Todo App"
              des="This is a simple todo app to make a schedule. It keeps data in Chrome memory and reloads after refresh."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pro
              img="/weather.jpeg"
              link="https://anycityweatherupdate.netlify.app"
              title="Weather App"
              des="A weather app that tells the weather of different cities via longitude and latitude using a weather API."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pro
              img="/News.jpeg"
              link="https://brilliant-raindrop-d410b5.netlify.app"
              title="NEWS App"
              des="A news app that provides news across topics using an API (BBC Clone)."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Pro
              img="/fyp.jpeg"
              link=""
              title="TB & Pneumonia Detection"
              des="Training a model in FYP to detect Tuberculosis (TB) and pneumonia from chest X-rays."
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grid Layout for Mobile View */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-2 lg:hidden" id="project">
        <Pro
          img="/pro1.png"
          link="https://gymcfitclub.netlify.app"
          title="Gym Website"
          des="In this website I have used a lot of animations, Email API, and also it is responsive."
        />
        <Pro
          img="/pro2.png"
          link="https://contactstorage.netlify.app"
          title="Contact Saving App"
          des="This app has back-end Firebase integration that stores the data and is also responsive."
        />
        <Pro
          img="/todo.jpeg"
          link="https://dailyitasks.netlify.app"
          title="Todo App"
          des="This is a simple todo app to make a schedule. It keeps data in Chrome memory and reloads after refresh."
        />
        <Pro
          img="/weather.jpeg"
          link="https://anycityweatherupdate.netlify.app"
          title="Weather App"
          des="A weather app that tells the weather of different cities via longitude and latitude using a weather API."
        />
        <Pro
          img="/News.jpeg"
          link="https://brilliant-raindrop-d410b5.netlify.app"
          title="NEWS App"
          des="A news app that provides news across topics using an API (BBC Clone)."
        />
        <Pro
          img="/fyp.jpeg"
          link=""
          title="TB & Pneumonia Detection"
          des="Training a model in FYP to detect Tuberculosis (TB) and pneumonia from chest X-rays."
        />
      </div>
    </>
  );
};

export default Project;

const Pro = ({ img, link, title, des }) => {
  return (
    <>
      <a
        href={link}
        target="blank"
        className="max-w-lg w-96
          transition-transform
          transform
          hover:scale-105
          hover:shadow-[0_6px_10px_rgba(255,215,0,0.8)]
          duration-300
          ease-in-out
          ml-3"
      >
        <img className="w-3/4 border border-black rounded-xl " src={img} alt={title} />
        <h1 className="flex ml-40  font-bold text-xl mt-2">{title}</h1>
        <p className="m-2 text-balance font-light">{des}</p>
      </a>
    </>
  );
};
