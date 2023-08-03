"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../../data/slides";

export default function Sliders() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          // 1200: {
          //   slidesPerView: 3,
          //   // spaceBetween: 20,
          // },
        }}
        loop={true}
        freeMode={true}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className=" w-full min-h-[430px] py-20 bg-transparent"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              className=" w-full min-h-[305px] border rounded-lg border-gray-800 text-slate-100"
            >
              <div className=" p-8">
                <h4 className=" font-bold text-xl">{slide.title}</h4>
                <div className=" pt-4 text-sm text-gray-500">
                  <span>{slide.date}</span>
                  <span className=" mx-2">/</span>
                  <span>{slide.comment}</span>
                </div>
                <div className=" pt-4 text-gray-500">{slide.blog}</div>
                <div className=" py-8">
                  <Link href={slide.url} className="">
                    Read more ...
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
