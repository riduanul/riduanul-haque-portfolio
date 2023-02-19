import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Skills = () => {

    const menu = [
        {
            id: 1,
            title: "Comfortable",
            content: [
                {logo:"logo-javascript", title:"Javascript"},
                {logo:"logo-react", title:"React", },
                {logo:"logo-electron", title:"Redux"},
                {logo:"logo-nodejs", title:"Nodejs"},
                {logo:"logo-nodejs", title:"Expressjs"},
                {logo:"logo-markdown", title:"Mongodb"},
                {logo:"logo-css3", title:"TailwindCss"},
            ],
            color: "text-green-600"
        },
        {
            id: 2,
            title: "Familiar",
            content: [
                {logo:"logo-javascript", title:"TypeScript"},
                {logo:"logo-react", title:"NextJs"},
                
            ],
            color: "text-pink-600"
        },
        {
            id: 3,
            title: "Tools",
            content: [
                {logo:"logo-github", title:"Github"},
                {logo:"logo-vimeo", title:"VSCode"},
                {logo:"logo-firebase", title:"Firebase"},
                {logo:"logo-buffer", title:"Netlify"},
                {logo:"logo-vercel", title:"Vercel"},
            ],
            color: "text-blue-600"
        },
        {
            id: 4,
            title: "Languages",
            content: [
                { title:"Bangla", type:"Native"},
                { title:"English", type:"Conversational"},
                { title:"Hindi", type:"Conversational"},
            ],
            color: "text-cyan-600"
        },
    ]
const [activeIndex, setActiveIndex] = useState(1)
const handleClick = (index) => setActiveIndex(index);
const checkActive = (index, className) => 
activeIndex === index ? className: "";

  return (
    <section id='skills' className='py-10 mb-10 'data-aos="fade-up" data-aos-delay="80"
    data-aos-duration="1000">
        <h1 className='text-3xl font-bold text-center my-10'>My <span className='text-cyan-600'>Skills</span></h1>
        <div>
        <div className='flex  flex-col space-y-4 items-center'>
            <div className=' text-black bg-gray-600 flex md:flex-row flex-col text-xl font-semibold space-x-8 rounded-lg  px-4 py-2 md:justify-around justify-center items-center min-w-[840px]'>
                {
                    // tablist
                    menu.map((item) => (
                        <button
                        className={`${checkActive(item.id, "border-b-2 text-cyan-600 font-bold")}`}
                        onClick={()=>handleClick(item.id)} key={item.id}>{item.title}</button>
                    ))
                }
 
                {/* Tab panel */}
                </div>
                <div className='bg-gray-800 min-w-[840px] min-h-[240px] text-center rounded flex justify-center items-center '>
                {
                    menu.map((item)=> <div key={item.id} className={`${item.color} panel ${checkActive(item.id, "active")}`} >
                            
                               <div className='flex md:flex-row flex-col justify-center items-center '>
                               {
                                    item.content.map((l, i)=>(
                                    <div key={i} className='border w-30 h-30 -2 m-2 rounded-lg p-2 transition ease-in-out  delay-50 hover:bg-white hover:text-cyan-600 cursor-pointer hover:border-cyan-600'>
                                         <ion-icon name={l.logo} className=''></ion-icon>
                                        
                                        <p className=' text-xl'>{l.title}</p>
                                        <p className='text-green-600'>{l.type}</p>
                                    </div>
                                    ))
                                }
                               </div>
                            
                    </div>)
                }
                </div>
            
    </div>
        </div>
    </section>
  )
}

export default Skills