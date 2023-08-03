import Link from "next/link";

export default function Copyright() {
  return (
    <div className=" w-full px-2 py-8 sm-300px:w-[70%] mx-auto text-center text-slate-100">
      Copyright © {new Date().getFullYear()} All rights reserved | This template
      is made with by
      <Link href={"/"} className=" pl-2 text-sky-500">
        Md kabir uddin
      </Link>
    </div>
  );
}
