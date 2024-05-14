import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800  text-white ">
      <div className="flex justify-between items-center  py-6 md:py-8 px-3  md:px-6 lg:px-16 ">
        <Link to="/" className="w-44 h-8 md:w-64 md:h-12">
          <div className="">
            <img
              src="/TheInnovativeWhiteLogo.webp"
              className="w-full h-full"
              alt=""
            />
          </div>
        </Link>
        <div className="text-2xl font-medium hidden md:flex gap-4">
          <div className="cursor-pointer hover:underline">
            <a href="#courses">See Courses</a>
          </div>
        </div>
        <div className=" md:hidden" onClick={handleMenuClick}>
          {showMenu ? (
            <img
              src="/xmark-solid.svg"
              alt="Xmark icon"
              className="w-8 h-8 fill-white"
            />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className={`bg-white rounded-lg shadow-lg absolute top-20 right-0 text-end md:hidden h-auto text-lg text-white z-10 transition-all duration-500 transform translate-y-2
          }`}
        >
          <div className="px-6 py-2 text-sky-500 font-semibold">
            <a href="#courses">See Courses</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
