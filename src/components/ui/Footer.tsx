import Link from "next/link";

export default function Footer() {
  return (
    <div className=" py-20 px-1 sm-300px:px-2 text-slate-100">
      <div className=" sm-600px:grid sm-600px:grid-cols-4  sm-600px:gap-6 lg:grid-cols-6">
        <div className=" col-span-2">
          <h2 className=" text-lg font-bold mb-9">About us</h2>
          <p className=" mb-5 text-gray-500">
            Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
            award-winning, full-service production company specializing.
          </p>
          <Link className=" mb-9" href={"/"}>
            Read more ...
          </Link>
        </div>
        <div className="">
          <h2 className=" text-lg font-bold mb-9">Who we are</h2>
          <div className=" flex flex-col gap-3 text-gray-500">
            <Link className="" href={"/"}>
              Team
            </Link>
            <Link className="" href={"/"}>
              Carrers
            </Link>
            <Link className="" href={"/"}>
              Contact us
            </Link>
            <Link className="" href={"/"}>
              Locations
            </Link>
          </div>
        </div>
        <div className=" ">
          <h2 className="text-lg font-bold mb-9">Our work</h2>
          <div className=" flex flex-col gap-3 text-gray-500">
            <Link className="" href={"/"}>
              Feature Feature
            </Link>
            <Link className="" href={"/"}>
              Latest
            </Link>
            <Link className="" href={"/"}>
              Browse Archive
            </Link>
            <Link className="" href={"/"}>
              Video for web
            </Link>
          </div>
        </div>

        <div className=" col-span-4 lg:col-span-2 lg:mt-0  mt-5">
          <h2 className="text-lg font-bold mb-9">Newsletter</h2>
          <p className="mb-5 text-gray-500">
            Videoprah is an award-winning, full-service production company
            specializing.
          </p>

          <div className=" max-w-lg">
            <form className=" flex ">
              <input
                className=" w-full bg-transparent outline-none border border-gray-700 py-3 px-4 "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <button className=" outline-none p-3 bg-sky-400" type="submit">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
