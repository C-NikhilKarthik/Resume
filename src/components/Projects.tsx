"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BsCode } from "react-icons/bs";
import ProjectCards from "./ProjectCards";
import Project from "./Project";
import Reveal from "./Reveal";

function Projects() {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else mainControls.set("hidden");
  }, [inView]);

  return (
    <div className="w-full flex h-fit">
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
      <section id="project" className="max-w-[1000px] w-full mx-auto">
        <h2 className="mt-[10px] mb-10 whitespace-nowrap flex items-center after:ml-6 after:block after:w-full md:after:w-[300px] after:h-[1px] after:bg-[#233554] text-[clamp(26px,5vw,32px)] font-semibold">
          Projects
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          {Project.map((project, index) => (
            <Reveal
              width="100%"
              key={index}
              xPos={index % 2 == 0 ? -75 : 75}
              delay={0.4}
            >
              <ProjectCards
                key={project.key}
                value={project.key}
                heading={project.heading}
                description={project.description}
                techStack={project.techStack}
                link={project.Link}
                githubLink={project.GitHubLink}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
