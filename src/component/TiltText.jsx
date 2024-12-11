import React from "react";

function TiltText(props) {
  return (
    <div id="tiltDiv" ref={props.abc} className="text-white px-10 mt-24">
      <h1 className="text-6xl font-[anzo3]">
        I AM <span className="text-black sm:text-6xl text-5xl uppercase">frontend</span>
        <sup className="text-4xl">TM</sup>
      </h1>
      <h1 className="sm:text-8xl text-5xl uppercase font-[anzo1]">
        {" "}
        developer
      </h1>
      <h1 className="text-4xl uppercase font-[anzo3]">TO HIRE</h1>
    </div>
  );
}

export default TiltText;
