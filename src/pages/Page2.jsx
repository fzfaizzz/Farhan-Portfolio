import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Page2() {
    useGSAP(() => {
        gsap.from(".imp", {
            transform:'rotateX(-80deg)',
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: '.imp',
                // markers: true,
                start: 'top 30%',
                end: 'top -50%',
                scrub: 2
            }
        });
    }, []);

    return (
       <>
        <div id='section2' className='text-black overflow-hidden text-center p-10 bg-white'>
            <h3 className='text-gray-500 font-[anzo2] text-xl '>
                © farhan.studio 2024 | designed and developed
            </h3>
            <div className='imp mt-28'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>IMPACTFUL</h1>
            </div>
            <div className='imp'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>DESIGN</h1>
            </div>
            <div className='imp'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>IS THE</h1>
            </div>
            <div className='imp'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>DESIGN</h1>
            </div>
            <div className='imp'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>THAT</h1>
            </div>
            <div className='imp'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5]'>WORKS!</h1>
            </div>

            <div></div>
        </div>
       </>
    );
}

export default Page2;
