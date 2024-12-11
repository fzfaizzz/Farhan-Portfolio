import React from "react";

function Page3() {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-fixed h-full mt-20 bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_1630,h_1254,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg')",
        }}
      >
        <img
          className="h-full w-full object-cover"
          src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1343,h_1033,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Subtract.png"
          alt=""
        />
        <h1
          className="absolute right-5 md:right-10 lg:right-20 top-[30%] transform -translate-y-1/2 text-[18vw] sm:text-[12vw] lg:text-[12vw] xl:text-[16vw] font-bold tracking-tight leading-none font-[anzo5] text"
        >
          HARD
        </h1>
      </div>
      <div className="flex justify-center  items-center bg-gray-50">
        <img
          className="object-cover bg-gray-50 h-[100vh] sm:h-[150vh] lg:h-[200vh] w-full max-w-screen-md"
          src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_980,h_1465,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Astro%20Me.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Page3;
