import React from "react";
import section1 from "../assets/Section/Section1.png";
import section2 from "../assets/Section/Section2.png";
import section3 from "../assets/Section/Section3.png";

const sections = [section1, section2, section3];
import Featured from "./Featured";

const FeaturedProducts = () => {
  return (
    <section>
      {/* Container */}
      <div className=" max-w-5xl mx-auto  w-[95%]">
        <hgroup className="border border-none border-b-4 md:flex md:flex-col md:space-y-7 mb-3">
          <h2 className="font-satoshi md:text-3xl lg:text-5xl font-bold text-2xl text-titleHome md:text-darkBlue md:font-medium">
            Featured products
          </h2>
          <div className="hidden md:block w-full h-[1px] bg-titleHome"></div>
        </hgroup>
        <section className="flex flex-col space-y-5 md:space-y-10">
          {sections.map((sec, i) => (
            <Featured
              section={sec}
              reverse={(i + 1) % 2 === 0}
              lastEl={i === sections.length - 1}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default FeaturedProducts;
