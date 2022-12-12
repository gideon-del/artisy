import React, { useState } from "react";
import cross from "../assets/Cross.svg";
import notificationMobile from "../assets/Notification-mobile.svg";
import notificationDesk from "../assets/Notification.svg";
import Search from "../assets/MagnifyingGlass.svg";
import Cart from "../assets/Cart.svg";
import toggleBar from "../assets/toggleBar.svg";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggle = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <header className="header">
      <div
        className={` ${showNav ? "translate-x-0" : "-translate-x-full"}  nav`}
      >
        <div className="flex justify-between w-full pr-7">
          <h1 className="logo">artsy.</h1>
          <img
            src={cross}
            alt="toggle"
            className="w-6 md:hidden"
            onClick={toggle}
          />
        </div>
        <nav>
          <ul className="nav-list">
            <li>Home</li>
            <li>Auctions</li>
            <li>Marketplace</li>
            <li>Drops</li>
          </ul>
        </nav>
        <div className="notificationMobile">
          <img
            src={notificationMobile}
            alt="messages"
            className="w-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <img
          src={toggleBar}
          alt="toggle"
          className="md:hidden w-6"
          onClick={toggle}
        />
        <h1 className="logo md:hidden">artsy.</h1>
        <figure className="flex gap-3 md:gap-6">
          <img
            src={Search}
            alt="Search button"
            className="w-5 cursor-pointer"
          />
          <img src={Cart} alt="Cart" className="w-5 cursor-pointer" />
          <img
            src={notificationDesk}
            alt="Cart"
            className="w-5 hidden md:flex cursor-pointer"
          />
        </figure>
      </div>
    </header>
  );
};

export default Navbar;
