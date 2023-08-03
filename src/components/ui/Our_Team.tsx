import Image from "next/image";

import team_1 from "@/assets/team/team-1.jpg";
import team_2 from "@/assets/team/team-2.jpg";
import team_3 from "@/assets/team/team-3.jpg";
import team_4 from "@/assets/team/team-4.jpg";
import Animated_Button from "./Animated_Button";

export default function Our_Team() {
  return (
    <div className=" w-full sm:w-[600px] sm:mx-auto lg:w-full">
      <div className="text-white pt-24  px-2 xl-1200px:pt-0 xl-1200px:pb-10">
        <div className=" xl-1200px:translate-y-36">
          <h2 className=" uppercase tracking-widest">nice to meet</h2>
          <p className=" pt-4 uppercase text-2xl font-bold md:text-4xl">
            our team
          </p>
          <div className=" mt-4 w-14 h-1 bg-sky-400"></div>
        </div>
        <div className=" my-28 grid grid-cols-1 justify-items-center gap-y-5 sm-600px:grid-cols-2 sm-600px:gap-4 lg:grid-cols-4 xl-1200px:gap-0 ">
          <Image
            className=" w-full sm-500px:max-w-md xl-1200px:translate-y-32"
            src={team_1}
            alt=""
          />
          <Image
            className=" w-full sm-500px:max-w-md xl-1200px:translate-y-16"
            src={team_2}
            alt=""
          />
          <Image
            className=" w-full sm-500px:max-w-md xl-1200px:translate-y-0"
            src={team_3}
            alt=""
          />
          <Image
            className=" w-full sm-500px:max-w-md xl-1200px:-translate-y-16"
            src={team_4}
            alt=""
          />
        </div>
        <div className="xl-1200px:text-right -translate-y-10">
          <Animated_Button href="/" text="meet out team" />
        </div>
      </div>
    </div>
  );
}
