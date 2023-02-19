import React from 'react'
import project1 from '../assets/p-1.png'
import project2 from '../assets/p-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay, Grid, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import "swiper/css/grid"
import "swiper/css/hash-navigation"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Projects = () => {
const projects = [
  {
    src: project1,
    name: "Mern Stack Project",
    github:"https://github.com/riduanul/doctors-portal-new",
    live:"https://doctors-portal-889.netlify.app/",
    tech:"React, Redux, Nodejs, Express, Tailwind"
  },
  {
    src: project2,
    name: "UI/UX Project",
    github:"https://github.com/riduanul/bank-mordern-app",
    live:"https://hoobank-ui-ux-889.netlify.app/",
    tech:"React, Tailwind"
  },
  {
    src: project3,
    name: "Crypto App API Project",
    github:"https://github.com/riduanul/crypto-app",
    live:"https://crypto-f3zss6f1b-riduanul.vercel.app/",
    tech:"React, Tailwind, Crypto Api"
  }, 
  {
    src: project4,
    name: "Transactions App",
    github:"https://github.com/riduanul/redux-transaction-app",
    live:"https://transaction-app998.netlify.app/",
    tech:"React, Redux, json-server, "
  }, 
  {
    src: project5,
    name: "Video App",
    github:"https://github.com/riduanul/video-app-rtkq",
    live:"https://video-app-redux.netlify.app/",
    tech:"React, Redux, json-server, "
  }, 
]
  return (
    <section id='projects' className='py-10 text-white mt-10' data-aos="fade-up" data-aos-delay="80"
    data-aos-duration="1000">
      
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
         My awesome works
         
        </p>
      </div>
        <br />
        <div className='flex flex-row max-w-6xl mx-auto relative items-center justify-center'>
          <div className='lg:w-2/1 w-full'>
            <Swiper
            spaceBetween={20}
            slidesPerview={1.2}
            breakpoints={{
              768:{
                slidesPerView:3,
              }
            }}
            loop={true}
            pagination={{clickable:true}}
            modules={[Pagination, Autoplay,Grid, Navigation]}
             >
                 {
                   projects.map((project)=> (
                     <SwiperSlide >
                        <div className="flex flex-row">
                          <div key={project.name} className=' h-fit w-full p-4 bg-slate-700  rounded-xl'>
                            <img src={project.src} alt={project.name} className='md:h-[18rem] ' />
                            <div className='flex md:flex-row flex-col justify-between  items-center'>
                            <h3 className=' my-4'>{project.name}</h3>
                            <div className='flex gap-1 text-cyan-600'>
                            <a href={project.github} target='_blank' ><small>Github |</small></a>
                            <a href={project.live} target='_blank'><small>Live Demo</small></a>
                          </div>
                            </div>
                            <small><span className='text-cyan-600'>Tech: </span>{project.tech}</small>
                          </div>
                          </div>
                     </SwiperSlide>
                     
                  ))
                 }
                  
            </Swiper>
          </div>
        </div>
    </section>
  )
}

export default Projects