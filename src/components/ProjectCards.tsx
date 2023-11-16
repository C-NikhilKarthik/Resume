import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

interface ProjectType {
  key: number;
  value: number;
  heading: string;
  description: string;
  techStack: { key: number; value: string }[];
  link: string;
  githubLink: string;
}

function ProjectCards(props: ProjectType) {
  return (
    <div className="w-full p-3 hover:backdrop-blur-lg hover:bg-slate-200/20 -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      {props.value % 2 === 1 ? (
        <div className=" grid grid-cols-12 gap-3">
          <div className="part-2 group z-10 check text-end py-2 md:col-[5/-1] large:col-[7/-1]">
            <div className="flProjectTyped">
              <div className="text-primary">Featured Project</div>
              <div className="text-slate-100 font-semibold text-[clamp(20px,5vw,24px)]">
                {props.heading}
              </div>
              <div className="bg-light-navy py-6 shadow-md group-hover:shadow-xl p-3 rounded my-5 text-slate-100">
                {props.description}
              </div>
              <ul className="flex flex-wrap list-none w-fit">
                {props.techStack.map((val) => (
                  <li key={val.key}>{val.value}</li>
                ))}
              </ul>
              <ul className="flex mt-3 flex-wrap list-none w-fit">
                <a href={props.githubLink}>
                  <li>
                    <FiGithub className="cursor-pointer hover:text-primary" />
                  </li>
                </a>
                <a href={props.link}>
                  <li>
                    <FiExternalLink className="cursor-pointer hover:text-primary" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="part-1 check md:col-[1/8] flex items-center justify-center">
            <div className="bg-light-navy md:h-auto h-full">
              <img
                alt="pic"
                className="md:h-auto h-full object-center object-cover rounded hover:shadow-lg opacity-30 hover:opacity-100 transition-[opacity] duration-300"
                src="https://user-images.githubusercontent.com/39849261/70559512-cdd78580-1bac-11ea-96a1-cbe7fd5e0452.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-12 gap-3">
          <div className="part-2 group z-10 check py-2 md:col-[1/9] large:col-[1/7]">
            <div className="flex flex-col">
              <div className="text-primary">Featured Project</div>
              <div className="text-slate-100 font-semibold text-[clamp(20px,5vw,24px)]">
                {props.heading}
              </div>
              <div className="bg-light-navy shadow-md py-6 group-hover:shadow-xl p-3 rounded my-5 text-slate-100">
                {props.description}
              </div>
              <ul className="flex flex-wrap list-none w-fit">
                {props.techStack.map((val) => (
                  <li key={val.key}>{val.value}</li>
                ))}
              </ul>
              <ul className="flex mt-3 flex-wrap list-none w-fit">
                <a href={props.githubLink}>
                  <li>
                    <FiGithub className="cursor-pointer hover:text-primary" />
                  </li>
                </a>
                <a href={props.link}>
                  <li>
                    <FiExternalLink className="cursor-pointer hover:text-primary" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="part-1 check md:col-[6/-1] flex items-center justify-center">
            <div className="bg-light-navy md:h-auto h-full">
              <img
                alt="pic"
                className="md:h-auto h-full object-center object-cover rounded hover:shadow-lg opacity-30 hover:opacity-100 transition-[opacity] duration-300"
                src="https://user-images.githubusercontent.com/39849261/70559512-cdd78580-1bac-11ea-96a1-cbe7fd5e0452.png"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
