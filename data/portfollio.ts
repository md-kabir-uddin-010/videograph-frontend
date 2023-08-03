import p_1 from "@/assets/portfollio/portfolio-1.jpg.webp";
import p_2 from "@/assets/portfollio/portfolio-2.jpg.webp";
import p_3 from "@/assets/portfollio/portfolio-3.jpg.webp";
import p_4 from "@/assets/portfollio/portfolio-4.jpg.webp";
import p_5 from "@/assets/portfollio/portfolio-5.jpg.webp";
import p_6 from "@/assets/portfollio/portfolio-6.jpg.webp";
import p_7 from "@/assets/portfollio/portfolio-7.jpg.webp";
import p_8 from "@/assets/portfollio/portfolio-8.jpg.webp";
import p_9 from "@/assets/portfollio/portfolio-9.jpg.webp";

export interface Potrfollio_item {
  id: number;
  title: string;
  category: string;
  sub_category: string;
  video_url: string;
  image: string;
}

export const portfollio_items: Potrfollio_item[] = [
  {
    id: 1,
    title: "VIP Auto Tires & Service",
    category: "Branding",
    sub_category: "eCommerce Magento",
    video_url: "#",
    image: p_1.src,
  },
  {
    id: 2,
    title: "VIP Auto Tires & Service",
    category: "Digital marketing ",
    sub_category: "Photography",
    video_url: "#",
    image: p_2.src,
  },
  {
    id: 3,
    title: "VIP Auto Tires & Service",
    category: "Web ",
    sub_category: "Photography",
    video_url: "#",
    image: p_3.src,
  },
  {
    id: 4,
    title: "VIP Auto Tires & Service",
    category: "Photography",
    sub_category: "eCommerce Magento",
    video_url: "#",
    image: p_4.src,
  },
  {
    id: 5,
    title: "VIP Auto Tires & Service",
    category: "Web",
    sub_category: "Photography",
    video_url: "#",
    image: p_5.src,
  },
  {
    id: 6,
    title: "VIP Auto Tires & Service",
    category: " eCommerce",
    sub_category: "eCommerce Magento",
    video_url: "#",
    image: p_6.src,
  },
  {
    id: 7,
    title: "VIP Auto Tires & Service",
    category: "Web ",
    sub_category: "eCommerce Magento",
    video_url: "#",
    image: p_7.src,
  },
  {
    id: 8,
    title: "VIP Auto Tires & Service",
    category: "Photography",
    sub_category: "Photography",
    video_url: "#",
    image: p_8.src,
  },
  {
    id: 9,
    title: "VIP Auto Tires & Service",
    category: " eCommerce",
    sub_category: "eCommerce Magento",
    video_url: "#",
    image: p_9.src,
  },
];
