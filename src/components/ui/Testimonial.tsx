"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial_slides } from "../../../data/testimonial";
import Responsive_Container from "../Responsive_Container";

export default function Testimonial() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className=" py-20">
      <div className=" text-center">
        <h3 className="uppercase tracking-widest font-semibold">
          Loved By Clients
        </h3>
        <h2 className="mt-5 uppercase text-lg sm-500px:text-4xl font-bold">
          What clients say?
        </h2>
        <div className=" mt-5 bg-sky-400 w-[80px] h-1 mx-auto"></div>
      </div>
      {/* sliders */}
      <div className=" mt-20">
        <Responsive_Container>
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
              1200: {
                slidesPerView: 3,
                // spaceBetween: 20,
              },
            }}
            loop={true}
            freeMode={true}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            className=" w-full min-h-[430px] py-20 bg-transparent"
          >
            {testimonial_slides.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className=" w-full min-h-[305px] rounded-lg  text-slate-100"
                >
                  <div className=" ">
                    <div className=" border border-gray-800">
                      <p className=" p-10">{item.text}</p>
                    </div>
                    <div className=" px-8 mt-8 flex items-center gap-x-4 flex-wrap">
                      <div className="">
                        <Image
                          className=" rounded-full"
                          src={item.user.avater}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="">
                        <h2 className="text-lg font-bold">{item.user.name}</h2>
                        <p className="">{item.user.profession}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* {slides.map((slide) => {
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
        })} */}
          </Swiper>
        </Responsive_Container>
      </div>
    </div>
  );
}
