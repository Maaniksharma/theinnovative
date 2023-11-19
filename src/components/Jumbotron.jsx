import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-scroll";

const Jumbotron = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src="/GirlBlueBackground(2).jpg"
          alt=""
          className="max-width-full object-cover w-full jumboimage"
        />
      </div>
      <div className="absolute top-36 left-1 md:top-44 md:left-24 text-white bg-sky-500 rounded-lg p-4  w-[40%] text-center text-lg md:text-3xl  tt">
        <div className="">The Innovative</div>
        <div className="">Way To</div>
        <div className="">Learn English</div>
        <button className="bg-white rounded-lg text-sky-500 py-1 px-4 mt-4  md:text-xl md:py-2 md:px-6 md:mt-6 font-medium font-roboto hover:bg-sky-500 hover: font- hover:text-white hover:underline transition-all duration-500">
          Join Now
        </button>
      </div>
    </div>
  );
};
export default Jumbotron;
