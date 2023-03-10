import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Card({ item }) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div data-aos="fade-right" data-aos-duration="500" data-aos-ease="ease-in-out" class="max-w-md mx-auto my-4 bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0 flex items-center">
          <img
            class="h-48 w-full cursor-pointer object-cover md:object-left object-top shadow  md:w-52"
            src={item.image}
            alt="Images"
          />
        </div>
        <div class="p-8 md:border-r-8 md:border-l-2 md:border-b-0 border-b-8 border-blue-600">
          <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
            {item.h1}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {item.h2}
          </a>
          <p class="mt-2 text-slate-500">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
