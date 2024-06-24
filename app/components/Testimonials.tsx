import React from "react";
import User1 from "@/public/Ellipse 12.png";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
  return (
    <div className="py-10 bg-purple-50 p-6 rounded-lg shadow-lg mx-auto">
      <div className="flex  gap-x-5">
        <div className="bg-[#8064A2] text-white h-10 p-2 justify-center items-center flex rounded-full">
          <ImQuotesLeft className="w-6 h-6   rounded-full" />
        </div>
        <h2 className="text-2xl font-bold text-black mb-4 mt-2">
          Testimonials
        </h2>
      </div>
      <p className="text-gray-700 py-4 mb-4">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </p>
      <div className="flex lg:p-10  items-center justify-around">
        <div className="flex items-center space-x-4 ">
          <button className="bg-purple-200 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-6.784-4.448A1 1 0 006 7.553v8.894a1 1 0 001.968.447l6.784-4.448a1 1 0 000-1.778z"
              />
            </svg>
          </button>
          <span className="text-gray-500">0:00</span>
        </div>
        <div className="flex items-center">
          <Image
            src={User1}
            alt="Shubha Nagarajan"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <p className="text-purple-700 font-bold">Shubha Nagarajan</p>
            <p className="text-blue-500">Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
