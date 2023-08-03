import Image from "next/image";
import Link from "next/link";
import { work_videos } from "../../../data/work_videos";

export default function Works() {
  return (
    <div className=" text-white">
      <div className=" grid  grid-flow-row justify-items-center gap-2 sm-500px:grid-cols-2 sm:grid-cols-4 sm:grid-flow-dense xl-1300px:grid-cols-6">
        {work_videos.map((item) => {
          return (
            <div
              key={item.id}
              className={`${
                item.flow === "horizontal"
                  ? " sm-500px:col-span-2"
                  : item.flow === "big"
                  ? " sm-500px:col-span-2 sm-500px:row-span-2"
                  : ""
              } relative overflow-hidden group`}
            >
              <Image
                className="max-w-full h-full bg-cover"
                src={item.image_url}
                alt=""
              />

              <Link
                className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                href={item.video_url}
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
              {item.category && (
                <div className=" w-full absolute left-0 -bottom-96 group-hover:bottom-0 transition-all duration-300 ">
                  <div className="bg-[#0000008f] py-4 px-4">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {item.title}
                    </h4>
                    <ul className="">
                      {item.category &&
                        item.category.length > 0 &&
                        item?.category.toString().split(",").join(" / ")}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
