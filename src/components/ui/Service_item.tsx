import Image from "next/image";

interface Props {
  icon: string;
  heading: string;
  text: string;
}

export default function Service_item(data: Props) {
  const { icon, heading, text } = data;
  return (
    <div className="relative group text-white">
      <div className=" ">
        <div className="w-[70px] h-[70px]  relative  after:absolute after:left-0 after:top-0 after:w-full  after:h-full  after:border-2  after:border-sky-400 after:transition-all after:duration-300  group-hover:after:rotate-45 flex items-center justify-center p-4">
          <Image
            className=" w-full h-full "
            src={icon}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
      <h2 className={` text-lg font-bold capitalize pt-5`}>{heading}</h2>
      <p className={` pt-5  text-gray-400`}>{text} </p>
    </div>
  );
}
