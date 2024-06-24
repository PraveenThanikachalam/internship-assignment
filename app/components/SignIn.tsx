import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className=" p-6 rounded-lg ">
      <button className="w-full font-semibold border-2 border-[#8064A2] text-black gap-x-4 py-2 px-4 rounded-lg mb-4 flex items-center justify-center">
        <FaGoogle />
        Continue with Google
      </button>
      <button className="w-full font-semibold border-2 border-[#8064A2] text-black gap-x-4 py-2 px-4 rounded-lg mb-4 flex items-center justify-center">
        <FaFacebook />
        Continue with Facebook
      </button>
      <hr className=' bg-black h-[2px]' />
      <div className="text-center text-gray-500 my-4">Or connect with</div>
      <input type="email" placeholder="Email" className="w-full border border-gray-300 py-2 bg-white px-4 rounded mb-4"/>
      <input type="password" placeholder="Password" className="w-full border border-gray-300 bg-white  py-2 px-4 rounded mb-4"/>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input type="checkbox" className=" form-checkbox"/>
          <span className="ml-2 text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-blue-500">Forgot password?</a>
      </div>
      <button className="w-full bg-white text-black border-2 border-black font-semibold py-2 px-4 rounded-lg">Continue</button>
    </div>
  );
};

export default SignIn;
