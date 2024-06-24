import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const JoinIn = () => {
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
      <hr className='h-[2px] bg-black' />
      <div className="text-center text-gray-500 my-4">Or connect with</div>
      <input type="email" placeholder="Email" className="w-full border bg-white border-gray-300 py-2 px-4 rounded mb-4"/>
      <input type="password" placeholder="Password" className="w-full border bg-white border-gray-300 py-2 px-4 rounded mb-4"/>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox"/>
          <span className="ml-2 text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-blue-500">Forgot password?</a>
      </div>
      <button className="w-full bg-[#8064A2] text-white py-2 px-4 rounded-lg">Agree and Continue</button>
    </div>
  );
};

export default JoinIn;
