import calto_img from "@/assets/service/calltos-bg.jpg.webp";
import Responsive_Container from "@/components/Responsive_Container";
import Service_item from "@/components/ui/Service_item";
import Services_brands from "@/components/ui/Services_brands";
import Link from "next/link";
import { services } from "../../../data/services";

export default function Service_Page() {
  return (
    <Responsive_Container>
      <div className=" py-40 ">
        <div className=" px-2 grid grid-cols-1 sm-500px:grid-cols-2 lg-900px:grid-cols-3 justify-items-center items-center gap-8 sm:gap-16  lg-900px:gap-20">
          {services.map((service) => {
            return (
              <Service_item
                key={service.id}
                heading={service.title}
                icon={service.icon}
                text={service.details}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${calto_img.src})` }}
        className=" w-full min-h-[400px] bg-no-repeat bg-cover bg-top-center mx-auto mb-40 text-center flex items-center justify-center"
      >
        <div className=" w-[90%]">
          <h2 className=" pb-8 text-xl font-bold sm:text-3xl lg:text-4xl">
            CREATE AWESOME VIDEOS WITH WIDEO’S POWERFUL FEATURES
          </h2>
          <p className=" pb-8 text-gray-500 uppercase font-semibold">
            WIDEO COMBINES ALL THE FEATURES YOU NEED TO EASILY CREATE
            PROFESSIONAL VIDEOS AND PRESENTATIONS
          </p>
          <div className=" mt-10 ">
            <Link
              href={"/"}
              className="font-semibold bg-sky-400 uppercase tracking-[2px]  px-4 py-3"
            >
              Start your stories
            </Link>
          </div>
        </div>
      </div>
      {/* logos */}
      <div className="">
        <Services_brands />
      </div>
    </Responsive_Container>
  );
}
