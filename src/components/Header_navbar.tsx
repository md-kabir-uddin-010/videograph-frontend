"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dropdown_items, main_navbar_items } from "../../data/navbar";

export default function Header_navbar() {
  const pathname = usePathname();
  return (
    <div className={` p-1.5`}>
      <div className=" text-white">
        <ul className="flex">
          {main_navbar_items.map((nav_item) => {
            // dropdown item
            if (nav_item.isDropdown) {
              return (
                <li
                  key={nav_item.id}
                  className="group relative mr-8  last:mr-0"
                >
                  <span className=" cursor-pointer uppercase  text-[15px] block py-[5px]  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-sky-400 after:scale-0  group-hover:after:scale-100 after:transition-all after:duration-300">
                    {nav_item.name}
                  </span>
                  {/* drop down start */}
                  <div className="w-max pr-10 max-h-max px-3 invisible absolute left-0 top-[40px] bg-slate-50 group-hover:visible group-hover:top-[30px] uppercase text-sm py-[5px]  transition-all duration-200 z-20 ">
                    {dropdown_items.map((dropdown_item) => {
                      return (
                        <Link
                          key={dropdown_item.id}
                          href={dropdown_item.href}
                          className=" text-black hover:text-gray-500  capitalize text-sm block py-[5px]  "
                        >
                          {dropdown_item.name}
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            }
            // list item
            return (
              <li key={nav_item.id} className="group relative mr-8  last:mr-0">
                <Link
                  href={nav_item.href}
                  className={`${
                    pathname === nav_item.href ? "after:scale-100" : ""
                  } uppercase text-[15px] block py-[5px]  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-sky-400 after:scale-0  group-hover:after:scale-100 after:transition-all after:duration-300`}
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
