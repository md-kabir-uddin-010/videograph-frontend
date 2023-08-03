"use client";

import Responsive_Container from "@/components/Responsive_Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Potrfollio_item, portfollio_items } from "../../../data/portfollio";

export default function Portfolio_Page() {
  const [filterItem, setFilterItem] = useState("");

  // get all catagory
  const all_category: string[] = portfollio_items.reduce(
    (acc: string[], cur) => {
      if (!acc.includes(cur.category.trim())) {
        acc.push(cur.category.trim());
      }
      return acc;
    },
    []
  );

  // filter data
  const filterdData = (item: Potrfollio_item) => {
    if (filterItem === "") {
      return true;
    }
    return (
      item.category.trim().toLowerCase() === filterItem.trim().toLowerCase()
    );
  };

  return (
    <div className=" py-28">
      <div className=" pb-10">
        <ul className=" flex items-center justify-center sm:gap-4 flex-wrap">
          <li>
            <button
              type="button"
              className={`${
                filterItem === "" ? " border-sky-400" : " border-transparent"
              } border-2 px-2 py-2  outline-none capitalize  transition-all duration-100`}
              onClick={() => setFilterItem("")}
            >
              all
            </button>
          </li>
          {all_category.map((item, i) => {
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setFilterItem(item)}
                  className={`${
                    item.toLowerCase() === filterItem.toLowerCase()
                      ? " border-sky-400"
                      : " border-transparent"
                  } border-2 px-2 py-2 outline-none  transition-all duration-300 `}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Responsive_Container>
        <div className=" grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md-800px:grid-cols-3 lg:gap-10 ">
          {portfollio_items.length === 0 && (
            <p className=" w-full text-center text-xl capitalize font-bold">
              no items found!
            </p>
          )}
          {portfollio_items.filter(filterdData).map((item) => {
            return (
              <div
                key={item.id}
                className=" w-full  py-4 sm-400px:max-w-[400px]  animeted_item"
              >
                <div className=" relative">
                  <Image width={400} height={400} src={item.image} alt="" />
                  <Link
                    href={item.video_url}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="3rem"
                      width="3rem"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                    </svg>
                  </Link>
                </div>
                <div className=" text-center mt-6">
                  <h2 className="text-xl font-bold sm-500px:text-2xl">
                    {item.title}
                  </h2>
                  <p className=" text-gray-500">
                    {item.sub_category.split(" ").join(" / ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Responsive_Container>
    </div>
  );
}
