import React from 'react'
import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.png'

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

const Blogs = () => {
const blogs = [
  {
    src: blog1,
    name: "JavaScript Data Types For Beginners",
    live:"https://riduanul-haque1.medium.com/javascript-datatypes-for-beginners-96b4d994b6a6",
   
  },
  {
    src: blog2,
    name: "JavaScript Fundamentals",
    live:"https://riduanul-haque1.medium.com/javascript-fundamental-5778718a6e4c",
    
  },
  {
    src: blog3,
    name: "Something About ES6",
    live:"https://riduanul-haque1.medium.com/what-today-i-learn-about-javascript-21b15c9e6ff9",
    
  }, 
   
]
  return (
    <section id='blogs' className='mt-10 py-10 text-white'>
      
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className='text-cyan-600'>Blogs</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
         
         
        </p>
      </div>
        <br />
        <div className='flex flex-row max-w-6xl mx-auto relative items-center justify-center'>
          <div className='flex md:flex-row flex-col gap-4 '>
            {
              blogs.map((blog)=> (
                <div className=' flex md:flex-row flex-wrap gap-4'  data-aos="fade-up" data-aos-delay="80"
                data-aos-duration="1000">
                      <div className='w-[322px] h-[220px] mb-4'>
                        <img src={blog.src} alt="image"className='w-[322px]h-[220px]'/>
                        <p className='mb-2'>{blog.name}</p>
                        <a href={blog.live}target="_blank" className='text-cyan-600 border p-2 rounded-lg hover:bg-gray-400 hover:text-white '><small>View</small></a>
                      </div>  
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Blogs