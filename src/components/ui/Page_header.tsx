import Link from "next/link";

interface Props {
  current_page: string;
  page_title: string;
}

export default function Page_header({ current_page, page_title }: Props) {
  return (
    <div className=" text-center py-20">
      <h2 className=" text-xl  sm-300px:text-4xl md:text-5xl mb-6 font-bold capitalize">
        {page_title}
      </h2>
      <div className=" flex items-center justify-center flex-col  sm-300px:flex-row ">
        <Link href={"/"} className=" capitalize">
          home
        </Link>
        <span className=" mx-2 text-gray-500">/</span>
        <span className=" capitalize  text-gray-500">{current_page}</span>
      </div>
    </div>
  );
}
