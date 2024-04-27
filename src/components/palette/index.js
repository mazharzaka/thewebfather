import axios from "axios";
import React, {useState} from "react";

function Palette() {
  const [data, setData] = useState(null);
  const [color, setcolor] = useState("#03a9f4");
  const Generat = () => {
    let value = document.querySelector("#colorinput").value;
    if (!value.includes("#")) {
      value = "#" + value;
    }
    let Reg_Exp = /^#[0-9A-F]{6}$/i;

    if (Reg_Exp.test(value)) {
      value = value.substr(1);
      console.log(value);
      axios
        .get(
          `https://www.thecolorapi.com/scheme?hex=${value}&mode=monochrome&count=5`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // handle success
          setcolor("#" + value);
          setData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };
  return (
    <div className="w-full">
      <div className="w-full flex justify-center mt-4 mb-4">
        <input
          type="text"
          id="colorinput"
          placeholder="Color code #value"
          class="placeholder:italic placeholder:text-black-600 block text-white bg-black-400 w-72 border border-black-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-blue-600 focus:ring-1 sm:text-sm"
        />
        <button
          onClick={Generat}
          className="rounded bg-blue-300  hover:bg-blue-200 ml-2 hover:text-white p-3">
          Generat
        </button>
      </div>
      <div className="w-full  flex items-center flex-col">
        <div className="h-80 flex mt-4 mb-4">
          <div
            className="w-16 rounded-[30px] [writing-mode:vertical-lr]   mr-2  flex font-bold text-xl  justify-center items-center"
            style={{background: `${color}`}}>
            {color}
          </div>
          {data === null ? (
            <>
              <div
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#0573A5]"
                style={{}}>
                #0573A5
              </div>
              <div
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#0696D8]"
                style={{}}>
                #0696D8
              </div>
              <div
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#16B3FA]"
                style={{}}>
                #16B3FA
              </div>
              <div
                className="w-16 rounded-[30px] [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center mr-2 bg-[#47C4FC]"
                style={{}}>
                #47C4FC
              </div>
            </>
          ) : (
            data.colors.map((e) => (
              <div
                className="w-16 rounded-[30px]  mr-2 [writing-mode:vertical-lr] font-bold text-xl  flex  justify-center items-center"
                style={{
                  background: `${e.hex.value}`,
                  color:
                    e.rgb.r * 0.299 + e.rgb.b * 0.587 + e.rgb.g * 0.114 > 186
                      ? "black"
                      : "white",
                }}>
                {e.hex.value}
              </div>
            ))
          )}
        </div>
        <div className="flex mb-4">
          <div
            className="h-16 rounded-full w-16 mr-2  mb-2 "
            style={{background: `${color}`}}></div>
          {data === null ? (
            <>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#0573A5]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#0696D8]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#16B3FA]"></div>
              <div className="h-16 rounded-full w-16 mr-2 mb-2 bg-[#47C4FC]"></div>
            </>
          ) : (
            data.colors.map((e) => (
              <div
                className="h-16 rounded-full w-16 mr-2 mb-2"
                style={{background: `${e.hex.value}`}}></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Palette;
