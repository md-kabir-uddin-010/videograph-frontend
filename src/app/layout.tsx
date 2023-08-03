import { Play } from "next/font/google";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Footers from "@/components/Footers";
import Headers from "@/components/Headers";
import "../styles/style.css";
import "./globals.css";

const play = Play({ subsets: [], weight: ["400", "700"] });

export const metadata = {
  title: "Videograph",
  description: "Videograph website made by md kabir uddin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${play.className} bg-[#100028] text-slate-100`}
      >
        <Headers />
        <main>{children}</main>
        <Footers />
      </body>
    </html>
  );
}
