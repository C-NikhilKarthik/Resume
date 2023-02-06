import React from "react";

function Text(props) {
  return (
    <div className="w-full h-full">
      <p className="md:text-4xl text-3xl font-bold ">{props.object[0]}</p>
      <p className="md:text-5xl whitespace-nowrap text-3xl font-bold text-center">
        {props.object[1]}
      </p>
      <div className="h-2 my-4 w-0 rounded bg-blue-600 animate-slid"></div>
      <p className="flex-wrap flex px-6 sm:px-2">
        {props.object[2]}
      </p>
      <p className="text-center"></p>
      <button className="bg-blue-700 hover:text-white text-gray-300 rounded-full mt-2 hover:bg-blue-600 focus:outline-none border-none w-fit px-4 py-2 ">
        {props.object[3]}
      </button>
    </div>
  );
}

export default Text;
