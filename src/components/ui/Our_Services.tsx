import Animated_Button from "./Animated_Button";

export default function Our_Services() {
  return (
    <div className=" text-white">
      <span className={`uppercase tracking-widest`}>our services</span>
      <h2 className="uppercase text-4xl pt-4 font-bold ">what we do</h2>
      <div className="bg-sky-500 w-20 h-1 mt-6 "></div>
      <p className={`pt-7 text-gray-400`}>
        If you hire a videographer of our team you will get a video professional
        to make a custom video for your business and, once the project is over.
      </p>
      <div className=" py-7">
        <Animated_Button href={"services"} text={"view all services"} />
      </div>
    </div>
  );
}
