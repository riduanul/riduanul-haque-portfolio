import React from 'react'
import myImg from '../assets/images/4.png'
import resume from '../assets/Resume_of_Md_Riduanul_haque.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
  const info = [
    {text: "Years Experience", count: "0-01"},
    {text: "Completed Projects", count: "10"},
    {text: "Companies Work", count: "00"},
  ]
  return (
    <section id='about' className='py-10 text-white' data-aos="fade-down" data-aos-delay="80"
    data-aos-duration="1000">
          <div className='text-center mt-8'>
              <h3 className='text-4xl font-semibold'>
                About <span className='text-cyan-600'>me</span>
              </h3>
              
              <div className='flex items-center justify-center md:flex-row flex-col-reverse   md:gap-4 gap-8  px-10 max-w-6xl mx-auto'>
                <div className='flex-1'>
                
                  <div className=' text-gray-300 my-3 '>
                  <p className='text-gray-200 my-3 text-lg font-bold'>My Introduction</p>
                    <p className='text-justify'>
                      I’m Md. Riduanul Haque, I’m a Mern-Stack web developer, and I specialize in efficient React apps and  Nodejs, express js as well that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. I have a keen interest in technology, mobile applications, and user experience. As someone who takes responsibility for my own personal development, I am continually evaluating and upgrading my skills so that I can stay at the cutting edge of web development. 
                    </p>
                    <div className='flex mt-10 
                    flex-row items-center  md:gap-12 gap-6'>
                      {
                        info.map((content) => (
                               <div key={content.text} className="">
                                <h3 className='my-2 md:text-3xl text-2xl font-bold text-white '>{content.count} <span className='text-cyan-600'>+</span></h3>
                                <span className=''>{content.text}</span>
                               </div>                 
                        ))
                      }
                      
                    </div>
                   <a href={resume} download="Resume_of_Md_Riduanul_haque.pdf"> <button className=' flex self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8 '>Download Resume</button></a>
                  </div> 
                </div>
                <div className='flex-1 flex-end md:mt-0 mt-6 flex items-center justify-center'>
                <div className=' -top-[3rem] h-full relative sm:w-10/12 w-11/12'>
                    <img src={myImg} alt="image" className='object-cover w-[52rem]' />
                </div>
                </div>
              </div>
          </div>

    </section>
  )
}

export default About