import React from "react";
import Description from "../components/Description";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="w-full bg-home h-screen bg-cover bg-center sm:px-28 px-2">
      <div className="flex flex-col w-full">
        <Navbar />
        <Description/>
      </div>
    </div>
  );
}

export default Home;
