"use client";

import img1 from "@/assets/icons/ci-1.png";
import img2 from "@/assets/icons/ci-2.png";
import img3 from "@/assets/icons/ci-3.png";
import img4 from "@/assets/icons/ci-4.png";
import Image from "next/image";

export default function Counters() {
  return (
    <div className="px-2 relative sm:w-[550px] sm:mx-auto md:w-[700px] lg:w-[850px] xl-1300px:w-full text-white my-16  lg:min-h-[700px] xl-1300px:min-h-[900px]">
      <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-8 lg:block  xl-1300px:block xl-1300px:absolute xl-1300px:-left-[80px] xl-1300px:top-0">
        {/* counter 1 */}
        <div className=" my-2 lg:absolute lg:left-[64px] lg:top-[307px] xl-1300px:absolute xl-1300px:left-[238px] xl-1300px:top-[237px]">
          <div className="  relative xl-1300px:w-[600px] xl-1300px:h-[600px] xl-1300px:border-[#383636] xl-1300px:border-t xl-1300px:border-r xl-1300px:-rotate-45">
            <div className=" lg:rotate-45 xl-1300px:rotate-0  w-full py-6  sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[330px]  lg:w-[200px] lg:h-[200px]  xl-1300px:w-[250px] xl-1300px:h-[250px] bg-[#1a083d]">
              <div className="lg:-rotate-45 w-full h-full flex items-center justify-center gap-4 flex-col xl lg:gap-2 xl-1300px:rotate-45">
                <Image src={img1} alt="" />
                <h2 className=" sm-300px:text-6xl lg:text-4xl font-bold">
                  230
                </h2>
                <p className="">Compled Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* counter 2 */}
        <div className=" my-2 lg:absolute lg:left-[236px] lg:top-[142px] xl-1300px:absolute xl-1300px:left-[238px] xl-1300px:-top-[115px]">
          <div className=" relative xl-1300px:w-[600px] xl-1300px:h-[600px] xl-1300px:border-[#383636]  xl-1300px:border-l xl-1300px:border-b xl-1300px:-rotate-45">
            <div className="lg:rotate-45  xl-1300px:rotate-0   w-full  py-6 xl-1300px:m-10  xl-1300px:absolute xl-1300px:left-0 xl-1300px:bottom-0 sm:w-[250px] sm:h-[250px]  md:w-[300px] md:h-[330px] lg:w-[200px] lg:h-[200px]  xl-1300px:w-[250px] xl-1300px:h-[250px]   bg-[#1a083d]">
              <div className="lg:-rotate-45   w-full h-full flex items-center justify-center  gap-4 flex-col lg:gap-2 xl-1300px:rotate-45">
                <Image src={img2} alt="" />
                <h2 className=" sm-300px:text-6xl lg:text-4xl font-bold">
                  330
                </h2>
                <p className="">Compled Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* counter 3 */}
        <div className=" my-2 lg:absolute lg:left-[409px] lg:top-[307px] xl-1300px:absolute xl-1300px:left-[485px] xl-1300px:top-[428px]">
          <div className=" relative xl-1300px:w-[600px] xl-1300px:h-[600px] xl-1300px:border-[#383636]  xl-1300px:border-t xl-1300px:border-r xl-1300px:-rotate-45">
            <div className="lg:rotate-45   xl-1300px:rotate-0  w-full  py-6 xl-1300px:m-10  xl-1300px:absolute xl-1300px:top-0 xl-1300px:right-0 sm:w-[250px] sm:h-[250px]  md:w-[300px] md:h-[330px] lg:w-[200px] lg:h-[200px]  xl-1300px:w-[250px] xl-1300px:h-[250px]  bg-[#1a083d]">
              <div className="lg:-rotate-45   w-full h-full flex items-center justify-center  gap-4 flex-col lg:gap-2 xl-1300px:rotate-45">
                <Image src={img3} alt="" />
                <h2 className=" sm-300px:text-6xl lg:text-4xl font-bold">
                  430
                </h2>
                <p className="">Compled Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* counter 4 */}
        <div className=" my-2 lg:absolute lg:left-[577px] lg:top-[142px] xl-1300px:absolute xl-1300px:left-[484px] xl-1300px:top-[74px]">
          <div className=" relative xl-1300px:w-[600px] xl-1300px:h-[600px] xl-1300px:border-[#383636]  xl-1300px:border-b xl-1300px:border-l xl-1300px:-rotate-45">
            <div className="lg:rotate-45  xl-1300px:rotate-0   w-full  py-6  xl-1300px:absolute xl-1300px:right-0 xl-1300px:bottom-0 sm:w-[250px] sm:h-[250px]  md:w-[300px] md:h-[330px] lg:w-[200px] lg:h-[200px]  xl-1300px:w-[250px] xl-1300px:h-[250px]  bg-[#1a083d]">
              <div className="lg:-rotate-45   w-full h-full flex items-center justify-center  gap-4 flex-col lg:gap-2 xl-1300px:rotate-45">
                <Image src={img4} alt="" />
                <h2 className=" sm-300px:text-6xl lg:text-4xl font-bold">
                  530
                </h2>
                <p className="">Compled Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
