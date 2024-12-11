import React from "react";
import Worq2 from "./Worq2";
import Worq3 from "./Worq3";
import Header from "../component/Header";

function Worq() {
  return (
    <div className="bg-gray-50">
      <Header/>
      <div className="relative h-screen text-white p-5">
        {/* Background Video */}
        <div className="h-full w-full rounded-3xl relative flex items-center justify-center">
          {/* Text Layer with Video Background */}
          <div className="relative flex items-center justify-center">
            <p className="xl:text-[80vh] lg:text-[80vw] md:text-[60vw] sm:text-[40vh] text-[50vw] text-center font-[anzo5] text-black leading-none">WORQ</p>
          </div>
          {/* Centered Video */}
          <video
            loop
            autoPlay
            muted
            src="\images\stronode2.webm"
            className="absolute top-[0%] left-1/2 transform -translate-x-1/2  h-[40%] "
          ></video>
        </div>
      </div>
      <Worq2 />
      <Worq3/>
    </div>
  );
}

export default Worq;
