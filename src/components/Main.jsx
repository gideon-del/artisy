import React, { useEffect, useState } from "react";
import Overlap from "./Overlap";
import Slider from "./Slider";
const Main = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const increase = () => {
      setCounter((prev) => {
        console.log(prev);
        if (prev === 4) return 0;
        return prev + 1;
      });
    };
    const interval = setInterval(() => {
      increase();
    }, 5000);
    return () => {
      return clearInterval(interval);
    };
  });
  return (
    <main>
      <section className="flex flex-col space-y-7">
        <h2 className="text-center font-clashDisplay font-bold md:text-5xl md:max-w-3xl max-w-md  text-titleHome mx-auto text-4xl">
          Photography is a poetry & beutiful untold stories
        </h2>
        <p className="text-center font-satoshi font-medium text-titleHome max-w-lg mx-auto">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className="hidden md:block">
          <Slider counter={counter} />
        </div>
        <Overlap />
      </section>
    </main>
  );
};

export default Main;
