import React from "react";

interface DrawerButtonsProps {
  Name: string;
  value: string;
  setShow: (show: boolean) => void;
  show: boolean;
}

function DrawerButtons({ Name, value, setShow, show }: DrawerButtonsProps) {
  return (
    <a href={value} onClick={() => setShow(!show)} className="flex justify-center p-2">
      <button className="bg-primary-light duration-200 text-primary rounded-md max-w-[20rem] w-full py-2 hover:scale-105 transition-[transform]">
        {Name}
      </button>
    </a>
  );
}

export default DrawerButtons;
