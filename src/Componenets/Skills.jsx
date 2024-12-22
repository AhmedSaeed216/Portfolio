

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Main Skills Component
const Skills = () => {
  return (
    <>
      {/* About Section */}
      <div id="about" className="mt-5 flex justify-center flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">What I do</h1>
        <p className="align-bottom mx-20 font-light font-sans text-balance">
          I am a skilled and passionate frontend web designer with a talent for crafting visually stunning and user-friendly
          websites. My expertise lies in creating seamless digital experiences, with a sharp eye for design and meticulous
          attention to detail. I am proficient in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and Vite. <br />
          Currently, I am pursuing a BSCS degree at GCUL.
        </p>
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-10">
        <h1 className="flex justify-center font-bold text-3xl">Web Skills</h1>

        {/* Web Skills Slider */}
        <div className="mt-10">
          <Swiper
            slidesPerView={1} // Default to 1 card
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              640: { slidesPerView: 2 }, // Show 2 cards on small screens
              768: { slidesPerView: 3 }, // Show 3 cards on medium screens
              1024: { slidesPerView: 4 }, // Show 4 cards on large screens
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* Skills as Slides */}
            <SwiperSlide>
              <Skill img="/html.png" des="HTML" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/css-3.png" des="CSS" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/bootstrap.png" des="Bootstrap" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/tailwind.png" des="Tailwind" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/java-script.png" des="JavaScript" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/atom.png" des="React" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/firebase.png" des="Firebase" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Other Skills */}
        <h1 className="flex justify-center mt-10 font-bold text-3xl">Other Skills</h1>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Skill img="/ml.png" des="Machine Learning" />
            </SwiperSlide>
            <SwiperSlide>
              <Skill img="/python.png" des="Python" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

// Skill Card Component
// const Skill = ({ img, des }) => {
//   return (
//     <div className="flex flex-col items-center mt-4 cursor-pointer shadow-md p-4 rounded-lg bg-white">
//       <img className="w-20" src={img} alt={des} />
//       <h1 className="mt-2 font-medium text-lg text-gray-700">{des}</h1>
//     </div>
//   );
// };

// Skill Card Component
const Skill = ({ img, des }) => {
  return (
    <div className="flex flex-col items-center mt-4 cursor-pointer shadow-md p-4 rounded-lg bg-transparent">
      <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
        <img className="object-contain w-full h-full" src={img} alt={des} />
      </div>
      <h1 className="mt-2 font-medium text-lg text-white">{des}</h1>
    </div>
  );
};

export default Skills;
