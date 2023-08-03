import Sliders from "./Sliders";

export default function Our_Blog() {
  return (
    <div className=" w-full min-h-[800px] mt-24 text-white">
      <div className="flex items-center justify-center flex-col">
        <h3 className=" uppercase text-lg ">our blog</h3>
        <h2 className=" uppercase py-3 text-4xl font-bold">blog update</h2>
        <div className=" mt-4 w-20 h-1 bg-sky-500"></div>
      </div>
      {/* responsive slider */}
      <div className=" mt-10 w-full sm-600px:w-[510px] md-800px:w-full mx-auto">
        <Sliders />
      </div>
    </div>
  );
}
