import React from "react";
import Gradient from "../gradient";

function Generator() {
  const btn = (e) => {
    const dele = document.querySelector("#active-btn");
    dele.removeAttribute("id");
    e.target.setAttribute("id", "active-btn");
  };
  return (
    <div className=" bg-black-200 flex flex-col items-center ">
      <div className="flex">
        <div
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
          All
        </div>
        <div
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
          Box Shadow
        </div>{" "}
        <div
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-400">
          Gradient
        </div>
        <div
          id="active-btn"
          onClick={btn}
          className="cursor-pointer transition-colors  delay-200 h-10 p-2 mt-5 mr-1 rounded text-white flex items-center justify-center bg-black-300">
          Text Shadow
        </div>
      </div>
      <Gradient />
    </div>
  );
}

export default Generator;