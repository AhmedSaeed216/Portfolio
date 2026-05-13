import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Project = () => {
  const projects = [
    { img: "/nova_health.png", link: "https://novahealth.pk/", title: "NovaHealth", des: "Worked on both frontend and backend development for a healthcare platform. Built responsive user interfaces and integrated backend APIs." },
    { img: "/melo.png", link: "https://melo.codexenix.com/", title: "Melo - Task Management", des: "Developed the complete frontend and backend architecture independently. Built task management workflows including boards and tasks." },
    { img: "/fyp.jpeg", link: "", title: "TB & Pneumonia Detection", des: "Training a model in FYP to detect Tuberculosis (TB) and pneumonia from chest X-rays with severity analysis." },
    { img: "/News.jpeg", link: "https://brilliant-raindrop-d410b5.netlify.app", title: "News App (BBC Clone)", des: "A news app that provides news across topics using an API (BBC Clone)." },
    { img: "/pro1.png", link: "https://gymcfitclub.netlify.app", title: "Gym Website", des: "In this website I have used a lot of animations, Email API, and also it is responsive." },
    // { img: "/pro2.png", link: "https://contactstorage.netlify.app", title: "Contact Saving App", des: "This app has back-end Firebase integration that stores the data and is also responsive." },
    { img: "/todo.jpeg", link: "https://dailyitasks.netlify.app", title: "Todo App", des: "This is a simple todo app to make a schedule. It keeps data in Chrome memory." },
    { img: "/weather.jpeg", link: "https://anycityweatherupdate.netlify.app", title: "Weather App", des: "A weather app that tells the weather of different cities via longitude and latitude." },
  ];

  return (
    <section id="project" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-neonPurple tracking-widest uppercase font-medium text-sm">Portfolio</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Featured Projects</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper !pb-16"
        >
          {projects.map((pro, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Pro {...pro} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

const Pro = ({ img, link, title, des }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group flex flex-col items-center w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neonPurple hover:shadow-glow-purple transition-all duration-300 h-full"
    >
      <div className="w-full relative overflow-hidden aspect-video border-b border-white/10 bg-black/60">
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="bg-neonPurple text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
              View Live <ExternalLink size={16} />
            </a>
          )}
        </div>
        <img
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          src={img}
          alt={title}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow text-center w-full">
        <h1 className="font-bold text-xl text-white group-hover:text-neonPurple transition-colors">{title}</h1>
        <p className="text-sm mt-3 text-slate-400 leading-relaxed max-w-sm mx-auto">{des}</p>
      </div>
    </motion.div>
  );
};

export default Project;
