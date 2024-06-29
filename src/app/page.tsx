"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BsCode } from "react-icons/bs";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { RxCross2 } from "react-icons/rx";
import DrawerButtons from "../components/DrawerButtons";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";

function Home() {
  const [show, setShow] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handle(e: any) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    document.addEventListener("mousemove", handle);
    return () => {
      document.removeEventListener("mousemove", handle);
    };
  }, []);

  const ref = useRef(null);
  const mainControls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else mainControls.set("hidden");
  }, [inView]);

  return (
    <div className="relative overflow-hidden h-full w-full bg-[#08192e]">
      <div
        className="pointer-events-none fixed inset-0 z-[2] transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${
            mousePosition.y +
            (typeof window !== "undefined" ? window.pageYOffset : 0)
          }px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="relative z-30">
        <Navbar show={show} setShow={setShow} />
        <div className="flex-col items-center flex">
          <div className="w-full h-screen mt-12 max-w-[1800px] px-[10px] md:px-[100px] text-[#a8b2d1] flex items-center">
            <div className="flex md:mx-8 mx-4 flex-col items-center h-full pt-20">
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
            <div className="h-full w-full">
              <Intro />
            </div>
          </div>
          <main className="w-full mt-12 max-w-[1800px] px-[10px] md:px-[100px] text-[#a8b2d1] h-full gap-12 flex flex-col items-center">
            <About />
            <Projects />
            <Footer />
          </main>
          <div className="hidden fixed bottom-0 md:flex right-20 w-fit items-center rotate-90 h-10 origin-bottom-right">
            <div className="flex flex-row-reverse h-full items-center">
              <Reveal delay={0.3} yPos={true}>
                <a href="https://codepen.io/NikhilKarthik">
                  <FiCodepen className="text-[#a8b2d1] text-2xl mx-4 -rotate-90 cursor-pointer hover:text-[#64ffda] hover:-translate-x-2 transition-[transform,color] duration-500" />
                </a>
              </Reveal>
              <Reveal delay={0.25} yPos={true}>
                <a href="https://www.linkedin.com/in/nikhil-karthik-800413233/">
                  <FiLinkedin className="text-[#a8b2d1] text-2xl mx-4 -rotate-90 cursor-pointer hover:text-[#64ffda] hover:-translate-x-2 transition-[transform,color] duration-500" />
                </a>
              </Reveal>
              <Reveal delay={0.2} yPos={true}>
                <a href="https://github.com/C-NikhilKarthik">
                  <FiGithub className="text-[#a8b2d1] text-2xl mx-4 -rotate-90 cursor-pointer hover:text-[#64ffda] hover:-translate-x-2 transition-[transform,color] duration-500" />
                </a>
              </Reveal>
            </div>
            <div className=" w-[90px] h-[1px] bg-[#a8b2d1]"></div>
          </div>
        </div>

        <div
          className={`fixed ${
            show ? "translate-x-0" : "translate-x-[100%]"
          } transition-transform duration-300 top-0 ease-in-out h-screen w-full bg-slate-950/30 backdrop-blur z-50 flex flex-col`}
        >
          <div className="flex p-4 items-center bg-slate-950 justify-between">
            <img src="/CNK_Logo.png" alt="logo" className="h-14 w-14 flex" />
            <RxCross2
              className="md:hidden flex text-slate-200 text-2xl cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
          <div className="px-5 mb-8">
            <div className="h-[2px] w-full bg-slate-300"></div>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div>
              <DrawerButtons
                Name={"About"}
                show={show}
                setShow={setShow}
                value={"#about"}
              />
              <DrawerButtons
                Name={"Projects"}
                show={show}
                setShow={setShow}
                value={"#project"}
              />
              <DrawerButtons
                Name={"Contact"}
                show={show}
                setShow={setShow}
                value={"#contact"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
