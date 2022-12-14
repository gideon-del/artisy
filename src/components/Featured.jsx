import React from "react";
import blackArrow from "../assets/blackarrow.svg";
import creator1 from "../assets/Creators/creator1.png";
import creator2 from "../assets/Creators/creator2.png";
import creator3 from "../assets/Creators/creator3.png";
import creator4 from "../assets/Creators/creator4.png";
import creator5 from "../assets/Creators/creator5.png";
const DUMMYCREATORS = [creator1, creator2, creator3, creator4, creator5];
//Reversing the array. too lazing to change it manually 😁
DUMMYCREATORS.reverse();
const Featured = ({ section, reverse, lastEl }) => {
  return (
    <section>
      <section
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } mb-2 md:gap-8 gap-5 items-center md:mb-10`}
      >
        <figure className="flex-1 relative">
          <img src={section} />
          <div className="group hover:opacity-100 opacity-0   cursor-pointer">
            <div className="overlay group-hover:opacity-50 duration-75 transition-all"></div>
            <p className="text-white font-stixTwoText font-bold text-center product__title z-50 duration-75 transition-all absolute top-2 group-hover:opacity-100 w-full">
              Boolean Egyptian
              <img />
            </p>
          </div>
        </figure>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="font-stixTwoText mb-0     font-bold text-darkBlue hidden md:block product__title">
            The Babylon Egyptian
          </h3>
          <p className="font-satoshi font-normal product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>
          <div className="flex gap-5 items-center">
            <figure className="grid grid-cols-1 product__creators mr-16">
              {DUMMYCREATORS.map((img, i) => (
                <img
                  src={img}
                  key={i}
                  className="w-10 h-10 relative"
                  style={{ left: `${i * 40}%` }}
                />
              ))}
            </figure>
            <span className="font-satoshi text-titleHome">
              64 major creators
            </span>
            <div className="w-12 h-12 md:flex items-center justify-center hidden rounded-full border-2 border-titleHome cursor-pointer ">
              <img src={blackArrow} className=" md:w-7" />
            </div>
          </div>
        </div>
      </section>
      {!lastEl && (
        <div className="hidden md:block w-full h-[1px] bg-darkBlue  my-4"></div>
      )}
    </section>
  );
};

export default Featured;
