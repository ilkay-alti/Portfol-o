import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiFillHome, AiFillBulb } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import { BsFillMoonFill } from "react-icons/bs";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { chooseTheme } from "../redux/themeSlice";

const NavbarItems = [
  {
    to: "/",
    content: (
      <AiFillHome className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />
    ),
  },

  {
    to: "/project",
    content: (
      <AiFillBulb className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />
    ),
  },
  {
    to: "/detail",
    content: <FaUser className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />,
  },
  {
    to: "/contact",
    content: <IoMail className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />,
  },
  {
    to: "/github",
    content: (
      <VscGithub className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />
    ),
  },
];
const Navbar = () => {
  const location = useLocation();
  const activeIndex = NavbarItems.findIndex(
    (item) => item.to === location.pathname
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="font-Yellowtail text-[#188AEC] invisible sm:visible md:visible lg:visible sm:text-3xl md:text-5xl lg:text-7xl  ">
        ilkayus<span className="text-[#EC4899]">.</span>
      </div>
      <div className=" pl-6 pr-12 flex  sm:ml-8 md:ml-16 lg:ml-24 ">
        <Outlet />
      </div>
      <div className="bg-[#111726] mx-6 sm:mx-8 md:mx-9 lg:mx-11 w-auto min-w-fit py-3 px-5 flex items-center justify-between rounded-3xl">
        {NavbarItems.map((item, index) => (
          <div
            key={index}
            className={classNames(
              " bg-[#1f2836] flex items-center justify-center p-4  text-white font-bold rounded-2xl",
              {
                "navbar__item--active": index === activeIndex,
                "navbar__item--size--large": [
                  activeIndex - 1,
                  activeIndex,
                  activeIndex + 1,
                ].includes(index),
              }
            )}
          >
            <NavLink to={item.to}>{item.content}</NavLink>
          </div>
        ))}

        <div className="  w-1 h-6 sm:h-8 md:h-14 lg:h-16 bg-white" />
        <button
          onClick={() => {
            dispatch(chooseTheme());
           
          }}
          className="bg-[#1f2836] flex items-center justify-center py-4 px-4  text-white font-bold rounded-2xl"
        >
          <BsFillMoonFill className="text-xs sm:text-xl md:text-5xl lg:text-6xl" />
        </button>
        <div />
      </div>
    </div>
  );
};

export default Navbar;
