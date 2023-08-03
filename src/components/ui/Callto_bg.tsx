import Link from "next/link";

export default function Callto_bg() {
  return (
    <div className=" w-full min-h-[491px] px-1 py-7 sm-300px:flex sm-300px:items-center sm-300px:justify-center sm-400px:px-5 sm-400px:py-16 sm-500px:w-[440px] sm-600px:w-[550px] md:w-[600px] lg-900px:w-[800px]  ">
      <div className=" text-slate-100">
        <h2 className=" text-lg sm-300px:text-xl sm-400px:text-2xl sm-600px:text-[42px] sm-600px:leading-tight font-bold pb-6">
          Fresh Ideas, Fresh Moments Giving Wings to your Stories.
        </h2>
        <p className=" uppercase font-bold opacity-70 mb-8 lg-900px:mb-16">
          INC5000, Best places to work 2019
        </p>
        <div className="w-full  sm-300px:w-[200px] sm-300px:py-2 bg-[#00bfe7] sm-300px:text-center lg-900px:py-3 lg-900px:w-[250px]">
          <Link
            href={"/"}
            className=" uppercase p-1 font-bold lg-900px:tracking-widest"
          >
            Start your stories
          </Link>
        </div>
      </div>
    </div>
  );
}
