"use client";

import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import Logo from "@/public/logo.png";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import User from "@/public/userImage.png";
import { MdStars } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  return (
    <div className="flex shadow-lg bg-white justify-around px-[30px] lg:px-[150px] py-3">
      <div className="flex mr-10  items-center w-full ">
        <Image src={Logo} className="mr-5" alt={""} />
        <input
          className="search border-y-2 placeholder:font-sans placeholder:pl-2 border-l-2 lg:w-[280px] bg-slate-50 font-sans rounded-s-lg p-2"
          placeholder="Search here..."
        />
        <div className="bg-[#8064A2] flex justify-center font-bold  items-center rounded-r-lg w-20 md:w-11 h-11">
          <IoSearch className="  text-white " />
        </div>
      </div>
      <div
        className={` ${
          isClicked ? "flex" : "hidden"
        } items-center justify-center flex-col gap-y-8 gap-x-10 absolute bg-white top-20 w-full h-[300px] `}
      >
        <button onClick={handleClose} className=" w-full relative">
          <div className="w-full justify-end flex px-3">
            <IoClose
              className={`w-6  h-6 text-[#8064A2] relative transition-opacity duration-300 ease-in-out ${
                isClicked ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>
        <FaBookmark className="flex  lg:flex-row md:flex-col text-[#8064A2]" />
        <div className="flex flex-row  justify-center gap-x-2 items-center">
          <MdStars className="h-5 w-5 text-[#8064A2]" />{" "}
          <p className="font-semibold text-black">Hobbies</p>{" "}
          <select className="bg-white"></select>
        </div>
        <div className="flex  flex-row justify-center gap-x-2 items-center ">
          <MdExplore className="h-5 w-5 text-[#8064A2] " />{" "}
          <p className="font-semibold text-black">Explore</p>{" "}
          <select className="bg-white"></select>
        </div>
        <div className="flex gap-x-2">
          <Image className="w-[50px] h-[50px]" src={User} alt={""} />
          <select className="bg-white"></select>
        </div>
      </div>
      <div className="flex w-full gap-x-8  justify-end items-center">
        <div className="lg:flex hidden  lg:flex-row  flex-col justify-center gap-x-2 items-center ">
          <MdExplore className="h-5 w-5 text-[#8064A2] " />{" "}
          <p className="font-semibold text-black">Explore</p>{" "}
          <select className="bg-white"></select>
        </div>
        <div className="lg:flex  hidden lg:flex-row flex-col justify-center gap-x-2 items-center">
          <MdStars className="h-5 w-5 text-[#8064A2]" />{" "}
          <p className="font-semibold text-black">Hobbies</p>{" "}
          <select className="bg-white"></select>
        </div>
        <FaBookmark className="lg:flex hidden  lg:flex-row md:flex-col text-[#8064A2]" />
        <FaBell className=" w-5 lg:flex hidden h-5 text-[#8064A2]" />
        <BsCartFill className="lg:flex hidden  lg:flex-row flex-col w-6 h-6 text-[#8064A2]" />
        <div className=" hidden lg:flex gap-x-2">
          <Image src={User} alt={""} />
          <select className="bg-white"></select>
        </div>
        <div className="flex lg:hidden gap-x-10">
          <FaBell className=" w-5  h-5 text-[#8064A2]" />
          <button onClick={handleOpen}>
            <GiHamburgerMenu
              className={`w-5 h-5 transition-opacity duration-300 ease-in-out text-[#8064A2] flex ${
                isClicked && "hidden"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
