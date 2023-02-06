import React from "react";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import About from "../components/About";

function Home() {
  return (
    <div className="w-full bg-home bg-fixed bg-cover bg-center md:px-28 sm:px-12 ">
      <div className="flex flex-col w-full px-4">
        <Navbar />
        <Description/>
        <About/>
      </div>
    </div>
  );
}

export default Home;
