import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaDownload } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

function Page7() {
  useGSAP(() => {
    gsap.utils.toArray(".aa").forEach((element) => {
      gsap.from(element, {
        rotateX: -80,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "-top 20%",
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative mt-56 text-white p-5 pb-40">
      <div className="h-[140vh] w-full bg-black rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row">
          <div className="flex flex-col items-start justify-start w-full md:w-1/2 p-6 md:pl-20 md:pt-10">
            <h1 className="text-[28vw] md:text-[20vw] font-[anzo5] leading-none text-gray-300">
              RIGHT
            </h1>
            <h1 className="text-[24vw] md:text-[16vw] font-[anzo5] leading-none text-gray-500 -mt-8">
              FIT
            </h1>
            <div className="">
              <video
                loop
                autoPlay
                muted
                src="/images/clock.MP4"
                className="h-40 w-40 md:h-96 md:w-96 absolute -mt-20 md:-mt-36 -z-10"
              ></video>
            </div>
            <div className="text-white absolute bottom-10">
              <p className="text-gray-400 font-[anzo4]">SOUNDS GOOD?</p>
              <p className="text-gray-400 font-[anzo4]">
                THEN PLEASE{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="font-[anzo6] text-white"
                >
                  EMAIL ME
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center w-full md:w-1/2 p-4 md:pr-10 space-y-4 md:space-y-6 mt-10 md:mt-0">
            {/* <div>
              <a
                href="/src/assets/FarhanResume.pdf"
                download="Farhan_Resume.pdf"
                className="text-end underline cursor-pointer flex items-center justify-end gap-2"
              >
                RESUME <FaDownload />
              </a>
            </div> */}
            {[
              {
                title: "PERSONALITY",
                description:
                  "Business relationships build on trust and compassion vs how can I get more for less +/-",
              },
              {
                title: "APPROACH",
                description:
                  "Full dive into personality, goals and objectives with transparency of work process vs template and unmanageable office routine +/-",
              },
              {
                title: "DESIGN",
                description:
                  "Design that is actually functional and helps to achieve results is design that works +/-",
              },
              {
                title: "FOCUS",
                description:
                  "How can I help and what can I do to solve your problem or objective vs how can I sell you more +/-",
              },
              {
                title: "FIT",
                description:
                  "The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself +/-",
              },
              {
                title: "CORE VALUES",
                description:
                  "Time, trust and experience are resources we cannot buy, yet we are sharing them and exchange +/-",
              },
              {
                title: "TO CONSIDER",
                description:
                  "Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-",
              },
            ].map((item, index) => (
              <div key={index} className="aa">
                <h2 className="text-base md:text-lg font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
