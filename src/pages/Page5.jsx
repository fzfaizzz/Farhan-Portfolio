import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Page5() {
    useGSAP(() => {
        gsap.from(".im", {
            rotateX: -80, // Directly using rotateX instead of transform
            opacity: 0,
            duration: 1,
            stagger: 0.5, // Adjusted for a quicker sequence
            scrollTrigger: {
                trigger: '.im',
                start: 'top 50%',
                end: 'top -50%', // Adjusted end point
                scrub: 2
            }
        });
    }, []);

    return (
       <div id='section3' className='text-black overflow-hidden text-center p-10 bg-white'>
            {/* <h3 className='text-gray-500 font-[anzo2] text-xl'>
                © anzo.studio 2024 | designed and developed
            </h3> */}
            <div className='im mt-20'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    HELPING
                </h1>
            </div>
            <div className='im'>
                <h1 className='text-[42vw] leading-[35vw] text-gray-500 font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    MY
                </h1>
            </div>
            <div className='im'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    CLIENTS
                </h1>
            </div>
            <div className='im'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    TO ACHIVE
                </h1>
            </div>
            <div className='im'>
                <h1 className='text-[42vw] text-gray-500 leading-[35vw] font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    THEIR
                </h1>
            </div>
            <div className='im'>
                <h1 className='text-[42vw] leading-[35vw] font-[anzo5] sm:text-[30vw] sm:leading-[28vw]'>
                    DREAMS!
                </h1>
            </div>
        </div>
    );
}

export default Page5;
