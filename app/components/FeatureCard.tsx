import React from "react";

const FeatureCard = ({ icon, title, description, buttonText }: any) => {
  return (
    <div className="flex  flex-col justify-between p-10 border rounded-lg shadow-md bg-white">
      <div>
        <div className="flex py-3 items-center mb-4">
          {icon} <h3 className="text-xl text-black font-bold">{title}</h3>
        </div>
        <p className="text-gray-700 pb-4 mb-4">{description}</p>
      </div>
      <button className="self-start px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
        {buttonText}
      </button>
    </div>
  );
};

export default FeatureCard;
