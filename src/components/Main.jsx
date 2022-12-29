import React, { useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import Overlap from "./Overlap";
import Slider from "./Slider";
import arrow from "../assets/Arrow.svg";
import auction from "../assets/Auctions/Auction1.png";
import auctionMobile from "../assets/Auctions/aucionMobile.png";
import leftArrow from "../assets/Auctions/auctionLeft.svg";
import arrowLink from "../assets/LinkArrow.svg";
import arrowLinkMobile from "../assets/linkArr.svg";
import creator from "../assets/About/creator.png";

const DUMMY_DATA = ["editorials", "fashion", "lifestyle", "blueprint"];
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
      <section className="gradient">
        <div className="hidden md:flex md:flex-col md:w-max gap-2 mb-3">
          <h2 className="text-white font-satoshi font-medium text-5xl">
            {" "}
            See Upcoming Auctions and Exhibitions{" "}
          </h2>

          <img src={arrow} className="px-6" />
        </div>
        <div className="auction items-stretch">
          <picture>
            <source srcset={auctionMobile} media="(max-width: 600px)" />
            <img src={auction} />
          </picture>
          <div className="md:p-5  p-2 flex flex-col">
            <h1 className="font-bellefair text-white md:text-2xl text-xl capitalize">
              MONALISA REDEFINED <br className="hidden md:block" /> IN STYLE.
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex gap-3">
                <span className="font-bellefair text-4xl md:text-6xl text-white">
                  01
                </span>
                <p className="text-white font-satoshi font-medium flex flex-col  text-xs md:text-base md:w-[60%] md:mt-3 gap-3">
                  <span className="font-poppins text-xs md:text-sm ">
                    Start on : 08:00 GTS . Monday{" "}
                  </span>
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>
              </div>
              <div className="text-white font-satoshi self-end flex items-center gap-5">
                <p className="whitespace-nowrap text-sm md:text-2xl border-b-2 border-b-white">
                  See more
                </p>
                <button className="text-sm md:text-2xl border-2 border-white p-3 rounded-lg whitespace-nowrap ">
                  Set a reminder
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="slider"></div>
      </section>
      <section className="links">
        <div className="flex justify-between px-3 items-center border-y-2 border-y-titleHome py-4 md:py-8">
          <span>Explore Marketplace</span>
          <picture>
            <source srcSet={arrowLinkMobile} media="(max-width: 700px)" />
            <img
              src={arrowLink}
              className="w-14 p-3 md:w-20 border border-titleHome rounded-full md:border-none"
            />
          </picture>
        </div>
        <div className="flex justify-between px-3 items-center border-b-2 border-b-titleHome py-4 md:py-8">
          <span>See auctions</span>
          <picture>
            <source srcSet={arrowLinkMobile} media="(max-width: 700px)" />
            <img
              src={arrowLink}
              className="w-14 p-3 md:w-20 border border-titleHome rounded-full md:border-none"
            />
          </picture>
        </div>
      </section>
      <section className="flex bg-creatorsBg  py-6 px-2 gap-3 relative">
        <div className="top-creators flex-1">
          <div className="md:pl-20">
            <h1 className="font-bold uppercase text-2xl md:text-4xl lg:text-6xl text-[#161616] lg:mb-20 leading-snug">
              Top creators of <br /> the week
            </h1>
            <p className="font-extralight top-creators__text md:w-4/5">
              “Everything always looked better in black and white. Everything
              always as if it were the first time; there’s always more people in
              a black and white photograph. It just makes it seem that there
              were more people at a gig, more people at a football match, than
              with colour photography. Everything looks more exciting.”– Jack
              Lowden
            </p>
          </div>
          <div className="place-self-end md:translate-y-10 translate-y-12 auction">
            <h1 className="font-clashDisplay text-6xl font-bold relative before:absolute before:w-full before:h-2 lg:text-[170px] before:bg-black before:inset-y-1/2 w-fit place-self-end">
              1985
            </h1>
            <img
              src={creator}
              className="w-[70%]   flex items-end ml-12 z-50 "
            />
          </div>
        </div>
        <div className="flex h-min gap-4  absolute z-40 w-[30%] md:w-auto  right-0  md:mr-10 overflow-hidden">
          <div
            className={`w-2 bg-[#AEAEAE] overflow-hidden rounded-full relative after:absolute after:w-full after:inset-x-0 after:bottom-0 after:h-1/4 after:bg-black after:rounded-full hidden md:block `}
          ></div>
          <ul className="flex md:flex-col top-0 left-0  list-disc text-xs md:text-2xl md:list-none font-clashDisplay font-normal lg:text-4xl gap-5">
            {DUMMY_DATA.map((data, i) => (
              <li className="capitalize list-item" key={data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
