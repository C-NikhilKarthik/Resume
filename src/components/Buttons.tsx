"use client";

function Buttons({ Name }: { Name: string }) {
  return (
    <div className="flex justify-center p-2">
      <button className="bg-[#64FFDD40] border-primary border-[1px] duration-200 text-primary rounded-md max-w-[20rem] w-full py-2 hover:scale-105 transition-[transform]">
        {Name}
      </button>
    </div>
  );
}

export default Buttons;
