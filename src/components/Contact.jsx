import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Contact = () => {
  return (
    <section id='contact' className='py-10  text-white' data-aos="fade-up" data-aos-delay="80"
    data-aos-duration="1000">
        <div className='text-center mt-8'>
          <h3 className='text-4xl font-semibold'>
              Contact <span className='text-cyan-600'>Me</span>
          </h3>
          <p className="text-gray-400 text-lg mt-3">
            Get in touch
          </p>

          <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto '>
            <form className='flex flex-col flex-1 gap-5 '>
                <input type="text" placeholder='Your Name' className='p-2 rounded outline-none bg-gray-600'/>
                <input type="email" placeholder='Your Email Address' className='p-2 rounded outline-none bg-gray-600'/>
                <textarea placeholder='Your Message' rows={10} className='p-2 rounded outline-none bg-gray-600'/>
                <button className=' bg-cyan-600 rounded-lg p-2 w-fit mx-auto '>Send Message</button>
            </form>
            <div className=' flex flex-col gap-7 items-center justify-center'>
              <div className='flex gap-4 w-full items-center'>
                  <div className='min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center bg-cyan-600 rounded-full text-white'>
                    <ion-icon name="mail"></ion-icon>
                  </div>
                  <p className='text-lg'>riduanul.haque1@gmail.com</p>
              </div>
              <div className='flex gap-4 w-full items-center'>
                  <div className='min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center bg-cyan-600 rounded-full text-white'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </div>
                  <p className='text-lg'>+880 1794212131</p>
              </div>
              <div className='flex gap-4 w-full items-center'>
                  <div className='min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center bg-cyan-600 rounded-full text-white'>
                    <ion-icon name="location"></ion-icon>
                  </div>
                  <p className='text-lg'>Rangamati, Chattogram, Bangladesh</p>
              </div>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact