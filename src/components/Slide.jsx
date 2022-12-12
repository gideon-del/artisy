import React from "react";

const Slide = ({ item, counter }) => {
  return (
    <figure className="flex overflow-hidden items-center">
      {item.map((pic, i) => (
        <img
          src={pic}
          key={pic}
          style={{ transform: `translateX(${-counter * 100}%)` }}
          className="transition-transform duration-300"
        />
      ))}
    </figure>
  );
};

export default Slide;
