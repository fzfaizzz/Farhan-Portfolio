// import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaReact } from "react-icons/fa";

function Page9() {
  useGSAP(() => {
    gsap.to("#react", {
      rotate: 360,
      duration: 4.2,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="p-5 relative">
      <div
        className="min-h-[93vh] mt-10 max-h-[93vh] relative rounded-3xl w-full p-4 bg-black text-white font-sans"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1316,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Content */}
        <div className="relative mt-12 px-2 sm:px-16 items-start w-full max-w-screen-lg">
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[16vh] sm:text-[20vh] md:text-[25vh] lg:text-[30vh] font-[anzo5] leading-[10vh] md:leading-[20vh]">
              LET`S <span className="text-gray-400 leading-none"> CREATE</span>
            </p>
            <p className="text-[16vh] sm:text-[20vh] md:text-[25vh] lg:text-[30vh] font-[anzo5] md:leading-[25vh] leading-[10vh] sm:leading-[10vh]">
              APP
            </p>
            <p className="mt-20 font-[anzo4] text-gray-400 sm:mt-10 text-sm sm:text-base md:text-base">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM <br />
              BUT <span className="font-[anzo6] text-white">OFFERING THE TRANSFORMATION!</span>
            </p>
          </div>

          {/* Right Icon and Contact Section */}
          <div className="flex items-center mt-40 md:mt-20 md:ml-28 lg:-mt-40 lg:ml-96">
            <div className="flex items-center space-x-4">
              <FaReact
                id="react"
                className="text-5xl sm:text-7xl md:text-8xl text-white shadow-lg"
              />
              <div className="border-2 rounded-md border-white h-16 sm:h-20 md:h-24 ml-4"></div>
            </div>
            <div className="ml-8 lg:ml-8 text-left">
              {/* <p className="uppercase font-[anzo4] text-base  text-gray-400  md:text-sm">World Service</p> */}
              <p className="font-[anzo6] text-base md:text-base">
                I CAN WORK FOR YOU.
              </p>
              <p className="text-base font-[anzo4] text-gray-400 sm:text-base md:text-base">+91 9580345032</p>
            </div>
          </div>
        </div>
        <div className=" absolute hidden sm:inline-block bottom-10 right-10">
              <p className="font-[anzo3]">© 2024 farhan.studio</p>
            </div>
      </div>
    </div>
  );
}

export default Page9;
