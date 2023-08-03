"use client";

import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { all_logos } from "../../../data/all_logos";

export default function Services_brands() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        300: {
          slidesPerView: 3,
          // spaceBetween: 20,
        },
        600: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        // 1200: {
        //   slidesPerView: 3,
        //   // spaceBetween: 20,
        // },
      }}
      loop={true}
      freeMode={true}
      modules={[Autoplay]}
      className=" w-full min-h-[200px]  bg-transparent"
    >
      {all_logos.map((logo) => {
        return (
          <SwiperSlide key={logo.id} className=" w-full">
            <Image src={logo.icon} alt="" width={100} height={100} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
