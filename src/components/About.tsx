"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BsCode } from "react-icons/bs";
import Image from "next/image";
import Reveal from "./Reveal";

const About: React.FC = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else mainControls.set("hidden");
  }, [inView]);

  return (
    <div className="flex w-full">
      <div className="flex md:mx-8 mx-4 flex-col items-center ">
        <BsCode className="text-2xl drop-shadow-[0_6px_10px_rgba(192_132_250)] mb-4 text-gray-400" />
        <div className="h-full w-[3px] rounded bg-[#64ffdba1] relative">
          <motion.div
            ref={ref}
            variants={{
              hidden: { height: "100%" },
              visible: { height: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 h-full w-full bg-slate-900"
          ></motion.div>
        </div>
      </div>
      <section id="about" className="w-full pr-8 md:px-24">
        <h2 className="mt-[10px] mb-10 whitespace-nowrap flex items-center after:ml-6 after:block after:w-full md:after:w-[300px] after:h-[1px] after:bg-[#233554] text-[clamp(26px,5vw,32px)] font-semibold">
          About Me
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-[50px] w-full">
          <div>
            <Reveal width="100%" delay={0.3} xPos={-75}>
              <div>
                <p className="text-justify">
                  Hello! My name is Nikhil Karthik and I am a pre-final year
                  student at IIIT Dharwad, pursuing CSE, B.Tech.
                </p>
                <p>
                  Operating Systems, Astronomy, AI, and development are some of
                  my main interests.
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </div>
            </Reveal>
            <ul className="grid arrow grid-cols-[repeat(2,minmax(140px,200px))] gap-[10px] mt-5">
              <Reveal delay={0.6} width={"fit-content"} xPos={-75}>
                <li>Next.js</li>
              </Reveal>
              <Reveal delay={0.6} width={"fit-content"} xPos={-75}>
                <li>Django</li>
              </Reveal>
              <Reveal delay={0.7} width={"fit-content"} xPos={-75}>
                <li>Express.js</li>
              </Reveal>
              <Reveal delay={0.7} width={"fit-content"} xPos={-75}>
                <li>Flutter</li>
              </Reveal>
              <Reveal delay={0.8} width={"fit-content"} xPos={-75}>
                <li>Ruby on Rails</li>
              </Reveal>
              <Reveal delay={0.8} width={"fit-content"} xPos={-75}>
                <li>Gatsby</li>
              </Reveal>
              <Reveal delay={0.9} width={"fit-content"} xPos={-75}>
                <li>TypeScript</li>
              </Reveal>
              <Reveal delay={0.9} width={"fit-content"} xPos={-75}>
                <li>TailwindCSS</li>
              </Reveal>
            </ul>
          </div>
          <Reveal delay={0.6} width={"fit-content"} xPos={75}>
            <div className="flex w-full justify-center">
              <div
                className="relative rounded z-[2] cursor-pointer image transition-[filter] duration-500
           after:top-6 after:rounded-md after:left-6 max-w-[300px] 
           after:block after:w-full after:h-full after:border-4 after:-z-[1]
            after:border-[#64ffda] after:absolute hover:after:top-2 after:duration-500 after:transition-[top,left] hover:after:left-2"
              >
                <img
                  src="/Photo.jpeg"
                  className="rounded z-10 min-w-[250px]"
                  alt="Photo1"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
