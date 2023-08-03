import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  text: string;
}

export default function Contact_info({ icon, title, text }: Props) {
  return (
    <div className=" px-2 my-2 max-w-[360px] flex items-center flex-wrap sm-300px:flex-nowrap ">
      <div className="">
        <Image
          className=" w-[60px] h-[60px] rounded-full"
          src={icon}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="pl-2">
        <h2 className=" font-bold lg:text-2xl">{title}</h2>
        <p className="text-gray-400 whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
