"use client";

import hero_image from "@/assets/hero/hero-1.jpg";
import team_bg from "@/assets/team-bg.jpg";

import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Header_navbar from "./Header_navbar";
import Mobail_navbar from "./Mobail_navbar";
import Responsive_Container from "./Responsive_Container";
import Hero_slider from "./ui/Hero_slider";
import Page_header from "./ui/Page_header";

import blog_hero from "@/assets/all/blog-hero.jpg.webp";

export default function Headers() {
  const pathname = usePathname();

  return (
    <header
      className={` ${
        pathname.includes("/blog/details")
          ? " min-h-[400px] sm-500px:min-h-[500px] sm:min-h-[600px]"
          : ""
      } w-full  bg-no-repeat bg-cover bg-top-center lg:px-4 xl-1200px:px-0`}
      style={{
        backgroundImage: `url(${
          pathname === "/"
            ? hero_image.src
            : pathname.includes("/blog/details")
            ? blog_hero.src
            : team_bg.src
        })`,
      }}
    >
      <div className="border-b border-sky-950">
        <Responsive_Container>
          {/* logo and  navbar*/}
          <div className=" flex items-center justify-between py-[30px] px-4 lg-900px:px-0">
            <div className="">
              <Image src={logo} alt="logo" priority />
            </div>
            <div className=" hidden md-800px:block  lg-900px:px-0">
              <Header_navbar />
            </div>
          </div>
          {/* mobail navbar */}
          <div className="px-4  lg-900px:px-0">
            <Mobail_navbar />
          </div>
        </Responsive_Container>
      </div>
      {pathname === "/" && (
        <Responsive_Container>
          <div className=" mt-7 w-full sm:min-h-[500px]">
            <Hero_slider />
          </div>
        </Responsive_Container>
      )}
      {pathname === "/about" && (
        <Page_header
          current_page={pathname.split("/")[1]}
          page_title={"about us"}
        />
      )}
      {pathname === "/portfolio" && (
        <Page_header
          current_page={pathname.split("/")[1]}
          page_title={"portfolio"}
        />
      )}
      {pathname === "/service" && (
        <Page_header
          current_page={pathname.split("/")[1]}
          page_title={"our services"}
        />
      )}
      {pathname === "/contact" && (
        <Page_header
          current_page={pathname.split("/")[1]}
          page_title={"contact us"}
        />
      )}
      {pathname === "/blog" && (
        <Page_header
          current_page={pathname.split("/")[1]}
          page_title={"blogs"}
        />
      )}
    </header>
  );
}
