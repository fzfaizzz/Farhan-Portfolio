import React from "react";
import { FaPhone } from "react-icons/fa";

function Page8() {
  return (
    <div className="relative mt-10 w-full min-h-screen max-h-screen flex items-center justify-start px-6 md:px-12 lg:px-24 xl:px-36">
      {/* Text with background image fill */}
      <div
        className="relative bg-fixed text-[30vh] sm:text-[40vh] md:text-[40vh] lg:text-[40vw] font-bold font-[anzo5] leading-none overflow-hidden"
        style={{
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg/v1/fill/w_890,h_1024,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg')",
          backgroundSize: "78%",
          backgroundPosition: "center",
        }}
      >
        <p className="leading-[20vh] sm:leading-[30vh] md:leading-[30vh] lg:leading-[30vw]">REACH</p>
        <div className="flex items-center leading-[12vh] sm:leading-[15vh] md:leading-[25vh] lg:leading-[30vw]">
          <p>ME</p>
          <FaPhone
            className="ml-[20px] sm:ml-[40px] md:ml-[60px] lg:ml-[100px] -mt-20 sm:-mt-28 md:-mt-36"
            style={{
              fontSize: "1.2em",
              color: "black",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
      {/* <HireMe/> */}
    </div>
  );
}

export default Page8;
