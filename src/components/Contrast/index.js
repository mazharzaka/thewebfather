import React from "react";
import {FaExchangeAlt} from "react-icons/fa";

function Contrast() {
  return (
    <div className="flex mt-5 items-center flex-col mb-3">
      <div className="w-96 rounded ml-11 items-center mt-2 flex justify-between ">
        <div className="flex items-center flex-col">
          <label className="text-white">Text Color</label>
          <div className="w-10  h-6 rounded bg-blue-100"></div>
        </div>
        <div className="text-blue-300 text-2xl hover:text-blue-600 mt-5 ">
          <FaExchangeAlt />
        </div>
        <div className="flex items-center flex-col">
          <label className="text-white">Background Color</label>
          <div className="w-10 h-6 rounded bg-blue-100"></div>
        </div>
      </div>
      <div className="w-96 mt-5 bg-blue-100 h-32"></div>
    </div>
  );
}

export default Contrast;
