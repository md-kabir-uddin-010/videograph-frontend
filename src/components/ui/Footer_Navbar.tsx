import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer_Navbar() {
  return (
    <div className=" px-1 sm-300px:px-2 py-12 text-slate-100">
      <div className=" flex  flex-col md:flex-row md:items-center md:justify-between ">
        <div className=" ">
          <Link href={"/"}>
            <Image className="" src={logo} alt="logo" />
          </Link>
        </div>
        <div className=" pt-8 md:pt-0">
          <div className="flex gap-3 flex-wrap">
            <Link
              href={"/"}
              className=" mx-1 w-10 h-10 rounded-full bg-[#231B30] flex items-center justify-center"
            >
              f
            </Link>
            <Link
              href={"/"}
              className=" mx-1 w-10 h-10 rounded-full bg-[#231B30] flex items-center justify-center"
            >
              t
            </Link>
            <Link
              href={"/"}
              className=" mx-1 w-10 h-10 rounded-full bg-[#231B30] flex items-center justify-center"
            >
              w
            </Link>
            <Link
              href={"/"}
              className=" mx-1 w-10 h-10 rounded-full bg-[#231B30] flex items-center justify-center"
            >
              i
            </Link>
            <Link
              href={"/"}
              className=" mx-1 w-10 h-10 rounded-full bg-[#231B30] flex items-center justify-center"
            >
              y
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-8 border-b border-gray-800"></div>
    </div>
  );
}
