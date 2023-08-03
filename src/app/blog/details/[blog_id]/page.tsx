"use client";

import Responsive_Container from "@/components/Responsive_Container";
import Comment_Form from "@/components/ui/Comment_Form";
import Loading from "@/components/ui/Loading";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog, blogs } from "../../../../../data/blogs";

// find current post by id
function findObjectById(id: number) {
  return blogs.find((obj) => obj.id === id);
}
//  previous post find by current post id
const previous_post = (id: number) => {
  return blogs.find((obj) => obj.id === id - 1);
};

// next post find by current post id
const next_post = (id: number) => {
  return blogs.find((obj) => obj.id === id + 1);
};

// find recent 3 post
const findRecentPost = () => {
  return blogs.slice(0, 3);
};

export default function Blog_details_page() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentBlog, setCurrentBlog] = useState({} as Blog);
  const [nextPost, setNextPost] = useState({} as Blog);
  const [prevPost, setPrevPost] = useState({} as Blog);
  const [recentPosts, setRecentPosts] = useState<Blog[]>([]);

  const { blog_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (blog_id) {
      const blog = findObjectById(Number(blog_id));
      const next_p = next_post(Number(blog_id));
      const prev_p = previous_post(Number(blog_id));
      const recent_p = findRecentPost();

      recent_p && setRecentPosts(recent_p);
      next_p && setNextPost(next_p);
      prev_p && setPrevPost(prev_p);
      blog && setCurrentBlog(blog);
    }

    setIsLoading(false);
  }, [blog_id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Responsive_Container>
      <div className=" px-2 w-full md:w-[700px] md:mx-auto -translate-y-48 sm-500px:-translate-y-56 sm:-translate-y-80 flex items-center justify-center">
        <div className=" text-center">
          <h1 className=" text-2xl sm-300px:text-3xl sm-500px:text-4xl md:text-5xl md:leading-[70px]  font-bold ">
            {currentBlog.title}
          </h1>
          <p className=" w-full mt-4 flex items-center justify-center flex-wrap gap-x-4 text-gray-400">
            <span className="">{currentBlog.author}</span> /
            <span className="">
              {currentBlog.total_comment > 0 &&
                currentBlog.total_comment < 10 &&
                0}
              {currentBlog.total_comment}
            </span>
            /<span className="">{currentBlog.date}</span>
          </p>
        </div>
      </div>
      <div
        className=" px-2 md:px-0 -translate-y-20 text-gray-400 text-lg w-full md:w-[700px] lg:w-[800px] md:mx-auto "
        dangerouslySetInnerHTML={{ __html: currentBlog.details }}
      ></div>
      <div className="  px-2 w-full md:w-[700px] md:mx-auto lg:w-[800px]">
        <div className="mb-20 flex items-center flex-wrap gap-3">
          <span className="capitalize text-gray-400 mr-2">tag :</span>
          {currentBlog.tag?.map((item, i) => (
            <span
              key={i}
              className=" m-1 bg-[#281A3E] text-gray-400 px-2 py-2 "
            >
              {item}
            </span>
          ))}
        </div>
        <hr className="border-[#281A3E]" />

        {/* previus and next post */}
        <div
          className={` my-20 px-2 sm:px-0 flex flex-col ${
            !prevPost.id ? "justify-end" : ""
          } sm-600px:flex-row gap-10 `}
        >
          {/* left side */}

          {prevPost.id && (
            <div className="">
              <h2 className=" uppercase font-bold">
                <Link href={`/blog/details/${prevPost.id}`}>
                  {"<"} previous post
                </Link>
              </h2>
              <div className=" mt-5 flex items-start flex-col sm-300px:flex-row gap-x-4">
                <Image
                  className="w-24 h-24 bg-no-repeat bg-cover bg-top-center"
                  src={prevPost.image}
                  alt=""
                  width={200}
                  height={200}
                />
                <div className=" px-2 sm-600px:px-0 mt-3 sm-300px:mt-0">
                  <h2 className=" font-bold ">
                    <Link href={`/blog/details/${prevPost.id}`}>
                      {prevPost.title}
                    </Link>
                  </h2>
                  <p className="capitalize text-gray-500">{prevPost.date}</p>
                </div>
              </div>
            </div>
          )}

          {/* right side */}

          {nextPost.id && (
            <div className=" mt-4 sm-600px:mt-0">
              <h2 className=" uppercase font-bold text-right">
                <Link href={`/blog/details/${nextPost.id}`}>
                  next post {">"}
                </Link>
              </h2>
              <div className=" mt-5 flex items-start flex-col sm-300px:flex-row gap-x-4">
                <div className="px-2 sm-600px:px-0 mt-3 sm-300px:mt-0">
                  <h2 className=" font-bold  text-right">
                    <Link href={`/blog/details/${nextPost.id}`}>
                      {nextPost.title}
                    </Link>
                  </h2>
                  <p className="capitalize text-gray-500 text-right">
                    {nextPost.date}
                  </p>
                </div>
                <Image
                  className="w-24 h-24 bg-no-repeat bg-cover bg-top-center"
                  src={nextPost.image}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
          )}
        </div>

        {/* recent post */}
        <div className=" mt-14">
          <h2 className=" w-full mb-6 sm-300px:text-2xl uppercase font-bold flex items-center justify-center">
            Recent Posts
          </h2>
          <div className="  my-40 grid grid-cols-1 justify-items-center sm:grid-cols-2 md-800px:grid-cols-3 gap-8 ">
            {recentPosts.map((el) => {
              return (
                <div
                  className=" w-full sm-300px:w-[250px] sm:w-[220px]"
                  key={el.id}
                >
                  <Link href={`/blog/details/${el.id}`}>
                    <Image
                      className=" w-full h-48 mb-5"
                      src={el.image}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="">
                    <h2 className=" font-bold">
                      <Link href={`/blog/details/${el.id}`}>{el.title}</Link>
                    </h2>
                    <h2 className=" text-gray-500">{el.date}</h2>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="">
            <h2 className=" mb-10 flex items-center justify-center uppercase font-bold text-2xl">
              Leave a comment
            </h2>
            <div className=" mb-28">
              <Comment_Form />
            </div>
          </div>
        </div>
      </div>
    </Responsive_Container>
  );
}
