import React, { useState, useEffect } from "react";
import Text from "./Text";
import { motion, AnimatePresence } from "framer-motion";
// import { motion, AnimatePresence } from "framer-motion";
function Description() {
  const objects = [
    [
      "I am",
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

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.3,
        transition: "ease-in",
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
        },
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: "ease-in",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        scale: 0.3,
        transition: "ease-in",
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
        },
      };
    },
  };
  const [desc, setDesc] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (desc >= objects.length - 1) {
        setDesc(0);
      } else {
        setDesc(desc + 1);
      }
    }, 5000);
  }, [desc]);

  return (
    <div data-aos="zoom-in" data-aos-delay="300" className="w-full sm:p-6 mt-6">
      <div className="flex sm:flex-row flex-col items-center w-full justify-center">
        <div className="flex w-full sm:w-min px-4 gap-4 sm:flex-row items-start bg-gray-900/70 py-5 rounded-lg backdrop-filter backdrop-blur-sm flex-col text-gray-100">
          <div className="flex w-full rounded-lg overflow-hidden border shadow-xl md:w-[14rem] sm:w-48">
            <img src="images/Photo1.jpg" />
          </div>
          <div className="flex relative flex-col w-full h-[17em] sm:w-[24rem] sm:h-[18rem] overflow-hidden sm:flex-1  px-3 ">
            <AnimatePresence>
              <motion.div
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                key={objects[desc]}
                className="absolute w-full sm:h-full"
                custom={direction}
              >
                <Text object={objects[desc]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
