"use client";
import Navbar from "../components/NavbarSignin";
import { useState } from "react";
import JoinIn from "../components/JoinIn";
import SignIn from "../components/SignIn";
import Illustration from "@/public/Group 27.png";
import Image from "next/image";
import FeatureCard from "../components/FeatureCard";
import { MdGroups } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BsCalendarCheckFill } from "react-icons/bs";
import AddYourOwn from "../components/Middle";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Page() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="bg-purple-50 w-screen h-screen">
      <Navbar />
      <div className="min-h-screen flex  w-full flex-col items-center pt-5 lg:pt-16 ">
        <div className="w-full max-w-7xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 md:mb-0">
              <h1 className="text-4xl lg:py-5 font-bold italic text-black mb-4">
                Explore your <span className="text-blue-500">hobby</span> or{" "}
                <span className="text-[#8064A2]">passion</span>
              </h1>
              <p className="text-gray-700 mb-6">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities...
              </p>
              <p className="text-gray-700">
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </p>
              <div className="w-full  max-w-7xl py-24">
                <Image
                  src={Illustration}
                  alt="Illustration"
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:flex-1 lg:mt-0 md:mt-0 mt-24 px-2 lg:px-10">
              <div className="flex p-3 justify-center ">
                <button
                  className={`px-4 py-2 rounded-tl rounded-bl ${
                    isSignIn ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => setIsSignIn(true)}
                >
                  Sign In
                </button>
                <button
                  className={`px-4 py-2 rounded-tr rounded-br ${
                    !isSignIn ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => setIsSignIn(false)}
                >
                  Join In
                </button>
              </div>
              {isSignIn ? <SignIn /> : <JoinIn />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full   px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <FeatureCard
          icon=<MdGroups className="text-[#8064A2] mr-5  w-8 h-8" />
          title="People"
          description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator."
          buttonText="Connect"
        />
        <FeatureCard
          icon=<FaMapMarkerAlt className="mr-5 text-[#77933C] w-8 h-8" />
          title="Place"
          description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue."
          buttonText="Meet up"
        />
        <FeatureCard
          icon=<BsCartFill className="text-[#C0504D] w-8 h-8 mr-5" />
          title="Product"
          description="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members."
          buttonText="Get it"
        />
        <FeatureCard
          icon=<BsCalendarCheckFill className="text-[#0096C8] mr-5 w-8 h-8" />
          title="Program"
          description="Find events, meetups and workshops related to your hobby. Register or buy tickets online."
          buttonText="Attend"
        />
      </div>
      <div className="w-full px-6 pt-8">
        <AddYourOwn />
      </div>
      <div className="px-6 pt-8">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
