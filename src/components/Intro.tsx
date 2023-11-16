import React from "react";
import Reveal from "./Reveal";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Intro() {
  return (
    <div className="w-full h-screen flex items-center justify-center pr-8 md:px-24">
      <div className="w-full max-w-[1000px] flex flex-col">
        <Reveal xPos={-75} width="100%" delay={0.4}>
          <div className="text-[clamp(14px,5vw,16px)] leading-[1.1] mb-[20px] text-[#64FFDA]">
            Hi, my name is
          </div>
        </Reveal>
        <Reveal xPos={-75} width="100%" delay={0.5}>
          <div className="text-[clamp(40px,8vw,80px)] leading-[1.1] mt-[5px] text-[#ccd6f6] font-semibold">
            C Nikhil Karthik.
          </div>
        </Reveal>
        <Reveal xPos={-75} width="100%" delay={0.6}>
          <div>
            <div className="text-[clamp(40px,8vw,80px)] leading-[0.9] text-[#8892b0] font-semibold">
              I build things for the web.
            </div>
            <div className="mt-[25px] text-[#8892b0] leading-[1.6] text-justify max-w-[540px]">
              Full-stack web and app developer. Designs and deploys complete
              applications with expertise in front-end and back-end
              technologies. Creates responsive interfaces and scalable backend
              systems.
            </div>
          </div>
        </Reveal>
        <Reveal xPos={-75} width="100%" delay={0.7}>
          <Link href={"/archive"}>
            <div
              // href="#project"
              className="px-7 items-center py-5 flex gap-2 mt-[50px] hover:bg-[#64ffdb24] transition-[background-color] duration-300 text-[#64FFDA] border-2 border-[#64FFDA] w-fit rounded-md text-sm font-semibold"
            >
              <div>My Project Archive</div>
              <FaArrowRight />
            </div>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export default Intro;
