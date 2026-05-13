import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h2 className="text-neonPurple tracking-widest uppercase font-medium text-sm">My Expertise</h2>
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-hero-gradient">What I Do</h1>
        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-lg">
          Frontend and Django Developer with experience in building scalable web applications.
          Currently, I am working as a React and Django developer at <a href='https://codexenix.com' target='_blank' className='text-lime-400 hover:underline'> Codexenix </a> .
        </p>
      </motion.div>

      {/* Frontend Skills Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4 inline-block">Frontend Technologies</h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !pb-12"
          >
            <SwiperSlide><Skill img="/html.png" des="HTML" /></SwiperSlide>
            <SwiperSlide><Skill img="/css-3.png" des="CSS" /></SwiperSlide>
            <SwiperSlide><Skill img="/java-script.png" des="JavaScript" /></SwiperSlide>
            <SwiperSlide><Skill img="/java-script.png" des="TypeScript" /></SwiperSlide>
            <SwiperSlide><Skill img="/atom.png" des="React" /></SwiperSlide>
            <SwiperSlide><Skill img="/bootstrap.png" des="Bootstrap" /></SwiperSlide>
            <SwiperSlide><Skill img="/tailwind.png" des="Tailwind" /></SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      {/* Backend Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4 inline-block">Backend Technologies</h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 30 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !pb-12"
          >
            <SwiperSlide><Skill img="/python.png" des="Python" /></SwiperSlide>
            <SwiperSlide><Skill img="/django.png" des="Django" /></SwiperSlide>
            <SwiperSlide><Skill img="/firebase.png" des="Firebase" /></SwiperSlide>
            <SwiperSlide><Skill img="/sql.png" des="PostgreSQL/SQL" /></SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      {/* Other Skills Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4 inline-block">Other Skills</h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !pb-12"
          >
            <SwiperSlide><Skill img="/github.png" des="Git & GitHub" /></SwiperSlide>
            <SwiperSlide><Skill img="/ml.png" des="Machine Learning" /></SwiperSlide>
            <SwiperSlide><Skill img="/ml.png" des="Deep Learning" /></SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

const Skill = ({ img, des }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neonBlue hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-none hover:shadow-glow-blue">
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden mb-4 transform group-hover:scale-110 transition-transform duration-300">
        <img className="object-contain w-full h-full filter brightness-90 group-hover:brightness-110 transition-all" src={img} alt={des} />
      </div>
      <h1 className="font-medium text-base sm:text-lg text-slate-300 group-hover:text-neonBlue transition-colors">{des}</h1>
    </div>
  );
};

export default Skills;
