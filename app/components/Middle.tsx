import React from 'react';
import { IoIosAddCircle } from "react-icons/io";

const AddYourOwn = () => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white flex flex-col  justify-center gap-y-4 items-start">
      <div className="flex py-2 items-center mb-4 md:mb-0 md:mr-4">
        <IoIosAddCircle className='text-[#0096C8] w-10 h-10 mr-4' />
        <h3 className="text-xl text-black font-bold ">Add your own</h3>
      </div>
      <p className="text-gray-700 mb-4  md:flex-1">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
      </p>
      <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
        Add new
      </button>
    </div>
  );
};

export default AddYourOwn;
