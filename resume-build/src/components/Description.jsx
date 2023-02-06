import React, { useState } from "react";
import Text from "./Text";
// import { motion, AnimatePresence } from "framer-motion";
function Description() {
// const [val,setVal] = useState(0);
// setInterval(() =>{
//   setVal(val+1);
// },1000);
// console.log(val);

  const objects = [
    [
      "My name is",
      "C.Nikhil Karthik",
      "I am a full-stack Web and App Developer and I have a bit of experience in UI/UX design.",
      "Contact me",
    ],
    [
      "I am a full-stack",
      "Web & App Developer",
      "My main areas of expertise include Javascript, Flutter, Node.js, React, TailwindCSS and Python.",
      "See my Work",
    ],
  ];
  return (
    <div data-aos="zoom-in" data-aos-delay="300" className="w-full p-6 mt-6">
      <div className="flex sm:flex-row flex-col items-center w-full justify-center">
        <div className="flex w-min px-4 gap-4 sm:flex-row items-center bg-gray-900/50 py-5 rounded-lg backdrop-filter backdrop-blur-sm flex-col text-gray-100">
          <div className="flex w-full rounded-lg overflow-hidden border shadow-xl md:w-54 sm:w-48">
            <img src="images/Photo1.jpg" />
          </div>
          <div className="flex flex-col flex-1 px-3">
            <Text object={objects[0]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
