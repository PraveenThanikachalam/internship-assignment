import Image from "next/image";
import React from "react";
import Group from "@/public/Group 99.png";
import {
  FaFacebookSquare,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaSquarePinterest, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-lightblue-50  flex p-6  flex-col justify-start py-12">
        <h1 className="text-4xl italic font-bold">
          Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
          <span className="text-blue-500">Community</span>...
        </h1>
        <div>
          <button className="mt-8 bg-[#8064A2] text-white py-2 px-6 rounded-lg hover:bg-purple-600">
            Get started
          </button>
        </div>
      </div>

      <div className="flex px-4 justify-center items-center space-x-4 py-8">
        <Image src={Group} alt="Illustration" />
      </div>

      <footer className="bg-purple-50 px-3 text-gray-600 py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold">Hobbycue</h3>
            <ul className="mt-2 space-y-2">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold">How Do I</h3>
            <ul className="mt-2 space-y-2">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebookSquare />
              <FaTwitter />
              <FaInstagram />
              <FaSquarePinterest />
              <FaGoogle />
              <FaYoutube />
              <FaTelegram />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Invite Friends</h3>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="p-2 border border-gray-300 bg-white rounded-l-lg w-full"
                />
                <button className="bg-[#8064A2] text-white py-2 px-4 rounded-r-lg hover:bg-purple-600">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center h-full bg-gray-50 p-6  text-gray-400">
        © Purple Cues Private Limited
      </div>
    </div>
  );
};

export default Footer;
