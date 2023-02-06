import React, { useEffect } from "react";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import About from "../components/About";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="w-full bg-home bg-fixed bg-cover bg-center md:px-28 sm:px-12 ">
      <div className="flex flex-col w-full px-4">
        <Navbar/>
        <Description/>
        <About/>
      </div>
    </div>
  );
}

export default Home;
