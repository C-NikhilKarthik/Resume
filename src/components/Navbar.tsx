import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Reveal from "./Reveal";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

// Header component
function Navbar({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed ${
        scrollDirection === "down" ? "-translate-y-[100%]" : "translate-y-0"
      } top-0 bg-[#08192ef0]/50 border-b-[2px] border-slate-800 z-50 backdrop-blur-md transition-all w-full duration-500`}
    >
      <nav className="w-full py-2 px-6 sm:px-12 flex items-center justify-between">
        <Reveal delay={0.2} width="fit-content" yPos={true}>
          <img src="/CNK_Logo.png" alt="CNK Logo" className="w-20 h-20" />
        </Reveal>
        <ul className="md:flex items-center hidden text-slate-300 text-sm">
          <Reveal delay={0.25} width="fit-content" yPos={true}>
            <li className="mx-4 cursor-pointer">
              <a href="#about">About</a>
            </li>
          </Reveal>
          <Reveal delay={0.3} width="fit-content" yPos={true}>
            <li className="mx-4 cursor-pointer">
              <a href="#education">Education</a>
            </li>
          </Reveal>
          <Reveal delay={0.35} width="fit-content" yPos={true}>
            <li className="mx-4 cursor-pointer">
              <a href="#project">Project</a>
            </li>
          </Reveal>
          <Reveal delay={0.4} width="fit-content" yPos={true}>
            <li className="mx-4 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </Reveal>
          <Reveal delay={0.45} width="fit-content" yPos={true}>
            <button className="mx-4 hover:bg-[#64ffdb24] transition-[background-color] duration-300 text-[#64FFDA] border-2 border-[#64FFDA] px-4 py-2 rounded-md text-sm font-semibold">
              Resume
            </button>
          </Reveal>
        </ul>
        <RxHamburgerMenu
          onClick={() => setShow(!show)}
          className="flex text-2xl cursor-pointer md:hidden text-slate-200"
        />
      </nav>
    </div>
  );
}

export default Navbar;
