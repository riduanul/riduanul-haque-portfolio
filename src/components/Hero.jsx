import React from 'react'
import myImg from '../assets/images/5.png'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  
  const social_media = [{
    logo: 'logo-facebook', link: "https://www.facebook.com/riduanul.haque.18"
  },
  {
    logo: 'logo-linkedin', link: "https://www.linkedin.com/in/riduanul-haque/"
  },   
  {logo:'logo-github', link: "https://github.com/riduanul" },     
  {logo:'mail-outline', link: "https://gmail.com" }     
     
  ]

  return (
   
  <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center' >
      <div className='flex-1 flex items-center justify-center after:bg-gray-600 after:absolute after:content-[""]  h-full'>
          <img src={myImg} alt="image" className='md:w-2/1    object-cover ' />
      </div>
      <div className="flex-1">
        <div className='md:text-left text-center '>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>
              Hello! I am
              <br />
            </span>
            
             <span className=''> Md Riduanul Haque</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
            <span className='text-cyan-600'>I am a</span> <br />
            <Typewriter
            options={{
              strings:["Mern Stack Web Developer", "Learner","Self taught Programmer", "Self Motivated Person", "Team Player"],
              autoStart:true,
              loop:true
            }}
            />
              
          </h4>
          <button className='mt-4 bg-cyan-600 font-semibod text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2'>Contact Me</button>
          <div className=" flex flex-row gap-5  my-2 mt-8 text-3xl items-center md:justify-start justify-center">
            {
              social_media.map((icon,i)=> (
                <div key={i} className="cursor-pointer text-gray-500 hover:text-white">
                      <a href={icon.link} target="_blank"><ion-icon name={icon.logo}></ion-icon></a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero