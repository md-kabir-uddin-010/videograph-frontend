import about_1 from "@/assets/about/about-1.jpg.webp";
import about_2 from "@/assets/about/about-2.jpg.webp";
import about_3 from "@/assets/about/about-3.jpg.webp";
import Image from "next/image";

import si_3 from "@/assets/icons/si-3.png";
import si_4 from "@/assets/icons/si-4.png";

export default function About_Videograph() {
  return (
    <div className=" w-full  p-1 mt-20 sm:px-10 sm:py-10 grid md:grid-cols-2 lg:px-2 gap-8  xl:h-[600px]">
      <div className=" xl-1100px:h-[500px] grid gird-cols-1 sm-400px:grid-cols-2 justify-items-center  ">
        <div className=" mb-2 sm-400px:mb-0 sm-400px:pr-2 w-full col-span-1 row-span-2">
          <Image
            className="  w-full min-h-[200px]  h-full"
            src={about_1}
            alt=""
            priority
          />
        </div>
        <div className=" sm-400px:pl-2 w-full col-span-1 row-span-2">
          <Image
            className=" mb-2 sm-400px:mb-0 sm-400px:pb-3  w-full min-h-[200px] md:h-1/2 xl-1100px:h-[250px] "
            src={about_2}
            alt=""
            priority
          />
          <Image
            className=" w-full min-h-[200px] md:h-1/2 xl-1100px:h-[250px] "
            src={about_3}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <h3 className=" uppercase tracking-widest font-semibold">
            About videograph
          </h3>
          <h2 className=" mt-5 uppercase text-lg sm-500px:text-4xl font-bold">
            WHo we are?
          </h2>
          <div className="mt-5 bg-sky-400 w-[80px] h-1"></div>
        </div>
        <div className="  sm-300px:grid sm-500px:grid-cols-2 gap-4 xl:gap-10 mt-10 ">
          <div className=" group">
            <div className=" w-[70px] h-[70px] mb-4">
              <div className=" relative  after:absolute after:left-0 after:top-0 after:w-full  after:h-full  after:border-2  after:border-sky-400 after:transition-all after:duration-300  group-hover:after:rotate-45 flex items-center justify-center p-4">
                <Image
                  className=" "
                  src={si_3}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h3 className="  text-lg sm-500px:text-xl mb-4 font-bold">
              Video distribution
            </h3>
            <p className=" text-gray-500">
              Whether you’re halfway through the editing process, or you.
            </p>
          </div>
          <div className="group">
            <div className=" w-[70px] h-[70px] mb-4">
              <div className=" relative  after:absolute after:left-0 after:top-0 after:w-full  after:h-full  after:border-2  after:border-sky-400 after:transition-all after:duration-300  group-hover:after:rotate-45 flex items-center justify-center p-4">
                <Image
                  className=" "
                  src={si_4}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h3 className=" mb-4 font-bold  text-lg sm-500px:text-xl">
              Video hosting
            </h3>
            <p className=" text-gray-500">
              Whether you’re halfway through the editing process, or you.
            </p>
          </div>
        </div>
        <p className=" mt-5 text-gray-500">
          Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
          award-winning, full-service production company specializing in
          commercial, broadcast, tourism & action sport video production
          services has been featured.
        </p>
      </div>
    </div>
  );
}
