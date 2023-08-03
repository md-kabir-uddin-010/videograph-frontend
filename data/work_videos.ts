import work_1 from "@/assets/work/work-1.jpg";
import work_2 from "@/assets/work/work-2.jpg";
import work_3 from "@/assets/work/work-3.jpg";
import work_4 from "@/assets/work/work-4.jpg";
import work_5 from "@/assets/work/work-5.jpg";
import work_6 from "@/assets/work/work-6.jpg";
import work_7 from "@/assets/work/work-7.jpg";

interface Work_videos {
  id: number;
  title?: string;
  category?: string[];
  image_url: any;
  video_url: string;
  flow?: string;
}

export const work_videos: Work_videos[] = [
  {
    id: 1,
    title: "VIP Auto Tires & Service",
    category: ["eCommerce", "magneto"],
    image_url: work_1,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    flow: "horizontal",
  },
  {
    id: 2,
    image_url: work_2,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 3,
    title: "VIP Auto Tires & Service",
    category: ["eCommerce", "magneto"],
    image_url: work_3,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 4,
    title: "VIP Auto Tires & Service",
    category: ["eCommerce", "magneto"],
    image_url: work_4,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    flow: "big",
  },
  {
    id: 5,
    title: "VIP Auto Tires & Service",
    category: ["eCommerce", "magneto"],
    image_url: work_5,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 6,
    image_url: work_6,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
  {
    id: 7,
    title: "VIP Auto Tires & Service",
    category: ["eCommerce", "magneto"],
    image_url: work_7,
    video_url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    flow: "horizontal",
  },
];
