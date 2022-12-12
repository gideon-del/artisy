import React from "react";
import frontImg from "../assets/Overlap/front.png";
import middleImg from "../assets/Overlap/middle.png";
import backImg from "../assets/Overlap/back.png";
import blue from "../assets/blueDot.png";
import red from "../assets/redDot.png";
import brown from "../assets/brownDot.png";

const Overlap = () => {
  return (
    <div className="relative w-11/12 mx-auto px-10 md:hidden">
      <figure className="overlap">
        <img src={frontImg} className="z-30 w-[95%] m-auto" />
        <img src={middleImg} className="z-10" />
        <img src={backImg} />
      </figure>

      <img src={blue} className="absolute top-0 right-0 z-50 w-10" />
      <img src={red} className="absolute bottom-0 right-0 z-50 w-10" />
      <img src={brown} className="absolute bottom-5 left-0 z-50 w-10" />
    </div>
  );
};

export default Overlap;
