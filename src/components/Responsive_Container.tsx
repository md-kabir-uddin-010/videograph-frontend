import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Responsive_Container({ children }: Props) {
  return (
    <section className=" sm-300px:px-3  sm-400px:px-4 sm-500px:px-7 ms-576:mx-[60px]  md:px-3 lg:px-0 xl-1200px:w-[1170px] mx-auto">
      {children}
    </section>
  );
}
