"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <header className="fixed h-[50px] sm:px-8 px-4 bg-black py-2 z-10 w-full text-white">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-d">
            Traverse
          </a>
          <div className="flex gap-12 text-lg leading-normal justify-evenly font-medium font-montserrat max-lg:hidden ">
            <a href="#Home">Home</a>
            <a href="#Explore">Explore</a>
            <a href="#Contact Us">Contact Us</a>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-black text-white  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center gap-[40px] h-full ">
              <li><a href="/">Home</a></li>
              <li><a href="/">Explore</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Nav;
