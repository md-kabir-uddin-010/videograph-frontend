"use client";

import { useEffect, useState } from "react";
import Animated_Button from "./Animated_Button";

type slidesType = {
  id: number;
  title: string;
  description: string;
  btn_text: string;
};

const slides: slidesType[] = [
  {
    id: 1,
    title: "For website and video editing",
    description: "Videographer’s Portfolio",
    btn_text: "See more about us",
  },
  {
    id: 2,
    title: "For website and video editing",
    description: "Videographer’s Portfolio",
    btn_text: "See more about us",
  },
  {
    id: 3,
    title: "For website and video editing",
    description: "Videographer’s Portfolio",
    btn_text: "See more about us",
  },
];

export default function Hero_slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const handleActiveSlideIndexChange = (i: number) => {
    setActiveSlideIndex(i);
  };

  return (
    <div className="px-2 pb-20 sm-500px:px-6 text-white md-800px:my-8  lg-900px:px-0">
      <div className=" w-full relative flex items-center justify-center h-80 overflow-hidden ">
        {/* slide item */}
        {slides.map((item, index) => {
          return (
            <div
              key={item?.id}
              className={`  w-full h-full absolute left-0 top-auto ${
                activeSlideIndex === index
                  ? "visible transition-all duration-700"
                  : "invisible transition-all duration-700"
              } `}
            >
              <div
                className={` text-sm uppercase tracking-widest mb-[10px] ${
                  index === activeSlideIndex
                    ? " opacity-100 translate-y-0 "
                    : "fade-1 translate-y-20 "
                }  transition-all duration-300 md-800px:my-8 md-800px:text-base md-800px:tracking-[0.2em]`}
              >
                {item.title}
              </div>
              <h2
                className={` text-2xl font-bold tracking-wider uppercase mb-[30px] leading-[40px]  ${
                  index === activeSlideIndex
                    ? " opacity-100 translate-y-0"
                    : "fade-1 translate-y-20"
                }  transition-all duration-500 sm-400px:w-4/5 sm-500px:text-3xl sm-500px:w-2/3 sm:text-4xl md-800px:w-2/4 md-800px:text-5xl md-800px:tracking-[0.1em]  md-800px:leading-[60px] `}
              >
                {item.description}
              </h2>

              <div
                className={` relative   ${
                  index === activeSlideIndex
                    ? " opacity-100 translate-y-0 "
                    : "fade-1 translate-y-20 "
                }  transition-all duration-700`}
              >
                <Animated_Button text={item.btn_text} href="/" />
              </div>
            </div>
          );
        })}
      </div>
      {/* render button */}
      <div className="md-800px:pt-12 ">
        {slides.map((item, i) => {
          return (
            <button
              onClick={() => handleActiveSlideIndexChange(i)}
              className={` outline-none border-none mr-6 text-lg font-medium ${
                activeSlideIndex === i ? "text-white" : " text-gray-400"
              }`}
              key={item.id}
              type="button"
            >
              0{i + 1}
              <div
                className={` w-full  ${
                  activeSlideIndex === i
                    ? "bg-white h-[2px]"
                    : "h-[1px] bg-gray-400"
                } transition-all`}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
