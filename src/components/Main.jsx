import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import Overlap from "./Overlap";
import Slider from "./Slider";
const Main = () => {
  return (
    <main>
      <section className="flex flex-col space-y-7 mb-11">
        <h2 className="text-center font-clashDisplay font-bold md:text-5xl md:max-w-3xl max-w-md  text-titleHome mx-auto text-4xl">
          Photography is a poetry & beutiful untold stories
        </h2>
        <p className="text-center font-satoshi font-medium text-titleHome max-w-lg mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className="hidden md:block">
          <Slider />
        </div>
        <Overlap />
      </section>
      <FeaturedProducts />
    </main>
  );
};

export default Main;
