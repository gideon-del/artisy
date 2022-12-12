import React, { useState } from "react";
import slide1 from "../assets/Slides/1st-slide.png";
import slide2 from "../assets/Slides/2nd-slide.png";
import slide3 from "../assets/Slides/3rd-slide.png";
import slide4 from "../assets/Slides/4th-slide.png";
import slide5 from "../assets/Slides/5th-slide.png";

import Slide from "./Slide";
const Slider = ({ counter }) => {
  const slide = [slide1, slide2, slide3, slide4, slide5];
  //For shuffling the slides
  const shuffledSlide = slide.map((_, i, arr) => {
    const end = arr.slice(0, i);
    const start = arr.slice(i);
    return start.concat(end);
  });

  return (
    <section className="flex gap-4  mx-auto">
      {shuffledSlide.map((i) => (
        <Slide item={i} key={i} counter={counter} />
      ))}
    </section>
  );
};

export default Slider;
