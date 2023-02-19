import React from 'react'
import myImg from '../assets/my-img.jpg'
const Hireme = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white '>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className='text-cyan-600'>Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Do you have any Work?
        </p>

      </div>
      <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-16 flex gap-6 md:flex-row flex-col-reverse items-center'>
          <div>
            <h2 className='text-2xl font-semibold '>Do you want any work from me?</h2>
            <p className='max-w-lg text-sm mt-4 text-gray-200 leading-6 lg:text-left text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus nemo rem nesciunt, ipsam reprehenderit! Temporibus harum praesentium est vel tempore dolor, iure aperiam. Exercitationem molestiae consectetur inventore minus esse!</p>
            <button className='flex lg:self-start self-center bg-blue-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full mt-8 '>Say Hello</button>
          </div>
          <img src={myImg} alt="image" className=' lg:absolute right-8 object-cover' />
      </div>
    </section>
  )
}

export default Hireme