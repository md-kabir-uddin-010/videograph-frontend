"use client";

import Link from "next/link";
import { useState } from "react";
import { dropdown_items, main_navbar_items } from "../../data/navbar";

export default function Mobail_navbar() {
  const [collapsMenu, setCollapsMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // handle toggle menu
  const toggleMenu: () => void = () => {
    setCollapsMenu(!collapsMenu);
  };

  // hande toggle dropdown
  const toggleDropdwon: () => void = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="relative bg-[#4C4C4C] p-1.5">
      {/* menu button */}
      <div className=" flex items-center justify-end">
        <button
          className={`flex items-center justify-center gap-x-2 bg-[#222222] rounded-md px-2.5 py-1 mx-1 my-1  outline-none`}
          type="button"
          onClick={toggleMenu}
        >
          <div className=" uppercase text-white font-bold">menu</div>
          <div className=" w-[18px] pl-1">
            <div className="w-full h-[2px] my-[3px] bg-white"></div>
            <div className="w-full h-[2px] my-[3px] bg-white"></div>
            <div className="w-full h-[2px] my-[3px] bg-white"></div>
          </div>
        </button>
      </div>
      {/* menu link */}
      <div
        className={` w-full sm:px-5 text-white absolute left-0 top-[52px] bg-[#4C4C4C] z-10 ${
          collapsMenu ? "max-h-screen " : "max-h-0 invisible"
        } overflow-hidden ease-in-out transition-all duration-500`}
      >
        <ul className={``}>
          {main_navbar_items.map((nav_item) => {
            if (nav_item.isDropdown) {
              return (
                <li key={nav_item.id} className="">
                  <div
                    onClick={toggleDropdwon}
                    className=" cursor-pointer py-1 px-3 capitalize hover:bg-[#CCCCCC] hover:text-[#343534] rounded-md  flex items-center"
                  >
                    <span className=" text-sm "> pages</span>
                    <span
                      className={`transform  ${
                        openDropdown ? "rotate-90" : " rotate-0"
                      }  ml-1 text-3xl leading-5 transition-all duration-300`}
                    >
                      &#8227;
                    </span>
                  </div>

                  <ul
                    className={` ${
                      openDropdown ? " max-h-screen" : "max-h-0 invisible"
                    } ml-3 transition-all duration-300 ease-in-out`}
                  >
                    {dropdown_items.map((el) => {
                      return (
                        <li key={el.id}>
                          <Link
                            href={el.href}
                            className=" text-sm block py-[5px] px-3 capitalize hover:bg-[#CCCCCC] hover:text-[#343534] rounded-md"
                          >
                            {el.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            return (
              <li key={nav_item.id}>
                <Link
                  href={nav_item.href}
                  className=" text-sm block py-[5px] px-3 capitalize hover:bg-[#CCCCCC] hover:text-[#343534] rounded-md"
                >
                  {nav_item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
