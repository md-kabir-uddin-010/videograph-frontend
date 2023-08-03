"use client";

import Responsive_Container from "@/components/Responsive_Container";
import Link from "next/link";
import { useState } from "react";
import { Blog, blogs } from "../../../data/blogs";

type PaginateArray = (
  array: Blog[],
  pageNumber: number,
  itemsPerPage: number
) => {
  data: Blog[];
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number;
};

// paginated array
const paginateArray: PaginateArray = (array, pageNumber, itemsPerPage) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const paginatedData = array.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(array.length / itemsPerPage);
  const hasNextPage = pageNumber < totalPages;
  const hasPrevPage = pageNumber > 1;

  return {
    data: paginatedData,
    nextPage: hasNextPage ? pageNumber + 1 : null,
    prevPage: hasPrevPage ? pageNumber - 1 : null,
    totalPages,
  };
};

export default function Blog_Page() {
  const [current_page, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const { data, nextPage, prevPage, totalPages } = paginateArray(
    blogs,
    current_page,
    limit
  );

  const handleNextPage = () => {
    if (nextPage !== null) {
      setCurrentPage(nextPage);
    }
  };
  const handlePrevPage = () => {
    if (prevPage !== null) {
      setCurrentPage(prevPage);
    }
  };

  return (
    <Responsive_Container>
      <div className=" py-20 grid grid-cols-1  sm-600px:grid-cols-2 sm-600px:gap-x-8 lg:px-3 xl-1200px:px-0 lg:grid-cols-3">
        {data?.map((blog) => {
          return (
            <div
              key={blog.id}
              className=" border border-gray-800 hover:border-gray-700 my-4 px-3 pb-8 transition-all duration-100"
            >
              <h2 className="">
                <Link
                  className="font-bold text-xl sm:text-2xl block mt-8 "
                  href={"/"}
                >
                  {blog.title}
                </Link>
              </h2>
              <p className=" mt-3  text-gray-500 hover:text-slate-100 transition-all duration-200">
                <span className="">{blog.date}</span>
                <span className=" mx-2">/</span>
                <span className="">0{blog.total_comment} Comment</span>
              </p>
              <p className=" mt-6  text-gray-500 hover:text-slate-100 transition-all duration-200">
                {blog.text} ...
              </p>

              <Link
                className=" w-full bg-slate-800 sm-300px:w-[100px] rounded-md py-1 px-2 text-center border border-gray-500 block mt-8 text-gray-500 hover:text-slate-100 hover:bg-slate-600 transition-all duration-200"
                href={`/blog/details/${blog.id}`}
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>
      {/* pagination */}
      <div className=" pt-10 mb-20 flex items-center justify-center gap-5">
        <button
          onClick={handlePrevPage}
          disabled={prevPage === null}
          className=" outline-none select-none uppercase disabled:opacity-50 px-3 py-2 "
        >
          Prev
        </button>

        <button
          disabled={true}
          className=" outline-none mx-1 select-none bg-[#501aa7] text-lg px-5 py-3"
        >
          {current_page}
        </button>

        <button
          onClick={() => setCurrentPage(current_page + 1)}
          disabled={totalPages <= current_page}
          className=" outline-none mx-1 select-none bg-[#27193D] text-lg px-5 py-3"
        >
          {current_page + 1}
        </button>

        <button
          onClick={handleNextPage}
          disabled={nextPage === null}
          className=" outline-none select-none uppercase disabled:opacity-50 px-3 py-2 "
        >
          Next
        </button>
      </div>
    </Responsive_Container>
  );
}
