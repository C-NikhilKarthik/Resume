"use client";
import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { BsCode } from "react-icons/bs";
import Image from "next/image";
import Reveal from "./Reveal";
import Project from "./Archives";
function Archive() {
  const ref = useRef(null);
  // const mainControls = useAnimation();
  // const inView = useInView(ref, { once: true });

  const sortedProjects = Project.sort((a, b) => b.Year - a.Year);

  // useEffect(() => {
  //   if (inView) {
  //     mainControls.start("visible");
  //   } else mainControls.set("hidden");
  // }, [inView]);
  return (
    <div id="about" className="text-gray-400 w-full">
      <h2 className="whitespace-nowrap flex items-center text-[clamp(40px,8vw,72px)] font-semibold">
        Archive
      </h2>
      <h3 className="text-[#64ffda] text-lg">List of things I&apos;ve worked on</h3>
      <div className="my-24 w-full">
        <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Built on
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((proj) => (
              <tr
                key={proj.key}
                className="odd:bg-[#08192ef0]/50 hover:text-[#64ffda] even:bg-[#cacacaf0]/20 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{proj.Year}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace text-white group-hover:text-[#64ffda]"
                >
                  {proj.heading}
                </th>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap max-w-[400px]">
                    {proj.techStack?.length > 0 &&
                      proj.techStack.map((item, i) => (
                        <span key={i}>
                          {item}
                          {i !== proj.techStack.length - 1 && (
                            <span className="mx-2">&middot;</span>
                          )}
                        </span>
                      ))}
                  </div>
                </td>
                <td className="flex px-6 py-4 gap-2 items-center text-lg">
                  {proj?.Link && (
                    <a href={proj?.Link} aria-label="External Link">
                      <FiExternalLink />
                    </a>
                  )}
                  {proj?.GitHubLink && (
                    <a href={proj?.GitHubLink} aria-label="GitHub Link">
                      <FiGithub />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Archive;
