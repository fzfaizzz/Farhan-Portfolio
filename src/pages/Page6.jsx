import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Page6() {
  useGSAP(() => {
    gsap.to("#moon", {
      rotate: 360,
      duration: 3.5,
      ease: "linear",
      repeat: -1,
    });
    gsap.to("#earth", {
      rotateY: 360,
      duration: 3.5,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-screen relative text-white p-5 -mt-14">
      {/* Background Video */}
      <div className="h-[120vh] w-full bg-black rounded-3xl overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover absolute inset-0"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"
        ></video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 md:px-10">
            {/* Left Side Text */}
            <div className="flex flex-col justify-center items-start text-left">
              <h1 className="text-[18vw] md:text-[12vw] font-[anzo5] text-gray-400 leading-[14vw] md:leading-[10vw]">
                HOW
                <br />
                <span className="text-white">CAN</span>
              </h1>
              <p className="mt-5 text-xs md:text-sm font-[anzo6] lg:text-lg max-w-xs">
                <span className="text-gray-400">
                  I am a self-taught web and brand designer with a passion for creating unique and timeless
                </span>
                masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.
              </p>
              <p className="mt-2 text-lg md:text-xl font-[anzo6] lg:text-xl">
                Bespoke Freelance <span className="text-gray-400">for agencies.</span>
              </p>
              <div className="flex mt-10 items-center">
                <img
                  id="moon"
                  src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png"
                  alt="Design Icon"
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <p className="ml-2 text-4xl md:text-6xl font-[anzo5]">DESIGN</p>
                <p className="text-lg md:text-xl mt-5 ml-3 font-[anzo6]">01</p>
              </div>
            </div>

            {/* Right Side Text */}
            <div className="flex flex-col justify-center items-end text-right">
              <h1 className="text-[18vw] md:text-[12vw] font-[anzo5] leading-[14vw] md:leading-[10vw]">
                I HELP
                <br />
                YOU
              </h1>
              <p className="mt-5 text-xs md:text-sm font-[anzo6] text-left lg:text-lg max-w-xs">
                <span className="text-gray-500">
                  With a background in strategic marketing and acknowledged expertise in web
                </span>
                development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.
              </p>
              <div className="flex mt-10 items-center">
                <img
                  id="earth"
                  src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png"
                  alt="Development Icon"
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <p className="ml-2 text-4xl md:text-6xl font-[anzo5]">DEVELOPMENT</p>
                <p className="text-lg md:text-xl mt-5 ml-2 font-[anzo6]">02</p>
              </div>
            </div>
          </div>
          <div className="mt-5 md:-mt-10 text-center">
            <p className="text-sm md:text-lg text-gray-400 font-[anzo4]">GOT A PROJECT?</p>
            <p className="text-sm md:text-lg text-gray-400 font-[anzo4]">
              THEN PLEASE{" "}
              <Link to="/hire-me">
                <button className="font-[anzo6] text-white">CONTACT ME</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
