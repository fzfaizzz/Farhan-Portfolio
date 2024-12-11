import React from 'react'




function Worq3() {

  return (
    <div className='h-screen  relative bg-gray-50'>
            <div className='flex flex-col lg:w-[40%] md:w-[50%] sm:w-[60%] xl:w-[30%]  w-[80%] justify-center items-center border-black mx-auto pb-4 border-b-2'>
            <p className='font-[anzo5] text-6xl text-center mt-20'>SERVICES</p>
             <p className=' text-center mt-8 text-xl border- font-[anzo3]'>
              UX Design / Web Design / Brand Identity</p>
            </div>
        <div className=' bg-gray-50 mx-auto'>
        <img src="\images\iPhone.webp" alt="" className='mx-auto' />
        <p className=' uppercase font-[anzo3] absolute hidden sm:inline-block sm:top-[50%] lg:top-[80%] right-20 md:right-10 sm:right-5 lg:right-[10%] '>*responsive</p>
        <div className='flex flex-col lg:w-[70%] md:w-[70%] sm:w-[80%] xl:w-[70%]  w-[90%] justify-center items-center border-black mx-auto pb-4 border-b-2'>
            <p className='font-[anzo5] text-6xl text-center mt-2'>DESIGN</p>
             <p className=' text-center mt-8 text-xl border- font-[anzo3]'>
             Design is the silent ambassador of your brand, speaking volumes through simplicity, elegance, and intention</p>
            </div>
        <img src="\images\iPad-Air.png" alt="" className='mx-auto mt-24 px-5 md:rotate-45' />

        </div>
        <div className='flex flex-col bg-gray-50 lg:w-[70%] md:w-[70%] sm:w-[80%] xl:w-[70%]  w-[90%] justify-center items-center border-black mx-auto pb-4 border-b-2'>
            <p className='font-[anzo5] text-6xl text-center mt-20 '>MY VISION</p>
             <p className=' text-center mt-8 text-xl border- font-[anzo2]'>
             As a frontend developer, my vision is to bridge the gap between design and functionality, creating seamless, user-centric experiences that bring ideas to life with every click.</p>
            </div>
    </div>
  )
}

export default Worq3