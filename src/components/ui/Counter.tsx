import Image from "next/image";

interface Props {
  item_num: number;
  icon: any;
  count: number;
  title: string;
}

export default function Counter({ item_num, icon, count, title }: Props) {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Image src={icon} alt="" />
          <h2 className=" sm-300px:text-6xl font-bold">{count}</h2>
          <p className="">{title}</p>
        </div>
      </div>
    </div>
  );
}
