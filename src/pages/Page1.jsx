import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import TiltText from "../component/TiltText";
import Page1Bottum from "../component/Page1Bottum";

function Page1() {
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);
  const tiltRef = useRef(null);

  const mouseMoving = (e) => {
    setxVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setyVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 8
    );

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useEffect(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 1,
        ease: "elastic.Out(1, 0.3)",
      });
    }
  }, [xVal, yVal]);

  return (
    <div
    onMouseMove={mouseMoving}
    className="h-screen relative w-full bg-white p-2 sm:p-4"
  >
    <div
      id="page1-in"
      className="h-full relative p-6 md:p-10 shadow-md shadow-gray-700 w-full rounded-3xl bg-cover bg-center bg-[url(/images/farhanp.jpg)]"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black from-10% to-transparent rounded-3xl z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <img
          className="h-14 w-14 ml-4 md:h-20 md:w-20 md:ml-10"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />
        <TiltText abc={tiltRef} />
        <Page1Bottum />
      </div>
    </div>
  </div>
  );
}

export default Page1;
