import React from "react";

function Card(props) {
  return (
    <div class="max-w-md mx-auto my-4 bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:object-left object-top  md:h-full md:w-52"
            src={props.image}
            alt="Images"
          />
        </div>
        <div class="p-8 md:border-r-8 md:border-l-2 md:border-b-0 border-b-8 border-blue-600">
          <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
            Outpass and Complaints Automation
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
