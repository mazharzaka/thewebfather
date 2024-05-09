import React from "react";
import {RiSignpostFill} from "react-icons/ri";

function Model() {
  return (
    <div className="w-[32rem] rounded-md bg-black-300">
      <div className="w-full flex mt-3  justify-between items-center">
        <div className="text-white ml-2  font-bold  text-xl">
          The
          <span className=" bg-gradient-to-r from-[#47C4FC] via-[#0696D8] to-[#0696D8]  inline-block text-transparent bg-clip-text">
            Web
          </span>
          City
          <span className="text-[8px] text-end text-[#03a9f4]">.CSS</span>
        </div>
        <div className="p-2 cursor-pointer rounded-xl hover:pr-3 hover:bg-[#0573A5] transition-all hover:pl-3  bg-[#0696D8] text-white mr-2">
          {" "}
          show font
        </div>
      </div>
      <div className="w-full flex mt-2 justify-center items-center">
        <div className="w-64 h-44  bg-[#16B3FA]" id="triangle">
          <p className="text-xs mt-4 flex border-b-[.5px] items-center flex-col text-black-100 text-center">
            we<span className="text-[7px] font-bold">(12px)</span>{" "}
          </p>
          <div className="text-xl  border-b-[.5px] font-semibold  text-black-100 text-center">
            will test
            <div className="text-[9px]  font-semibold">(20px) (600w)</div>{" "}
          </div>
          <div className="text-2xl font-bold  text-black-100 text-center">
            the font
            <div className="text-[9px]  font-bold">(24px) (700w)</div>{" "}
          </div>
          {/* We will test the font whether it is clear or not against a background */}
        </div>
        <div className="w-64 h-44  bg-[#16B3FA]" id="triangle1">
          {" "}
          <p className="text-sm mt-1 flex border-b-[.5px] items-center font-extrabold flex-col text-black-100 text-center">
            whether it is clear or not{" "}
            <span className="text-[7px] font-bold">(14px) (800w)</span>{" "}
          </p>
          <p className="text-base flex border-b-[.5px] items-center font-extralight flex-col text-black-100 text-center">
            against a<span className="text-[7px] font-bold">(16px) (100w)</span>{" "}
          </p>{" "}
          <p className="text-lg flex  items-center font-extralight flex-col text-black-100 text-center">
            bg.<span className="text-[7px] font-bold">(18px) (100w)</span>{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-56 ml-4 mt-1 mb-1 rounded h-36 bg-black-600">
          <div className="flex justify-center items-center">
            <RiSignpostFill className="text-2xl text-[#0696D8] mr-1" />
            <div className="text-base font-extrabold  text-[#0573A5]">
              Dark Color Test
            </div>
          </div>
        </div>
        <div className="w-56 ml-4 mt-1 mb-1 rounded h-36 bg-black-200">
          <div className="flex justify-center items-center">
            <RiSignpostFill className="text-2xl text-[#03a9f4] mr-1" />
            <div className="text-base font-extrabold  text-[#47C4FC]">
              Light Color Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
