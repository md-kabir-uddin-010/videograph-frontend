import img from "@/assets/all/blog-hero.jpg.webp";
import ri_1 from "@/assets/all/ri-1.jpg.webp";
import ri_2 from "@/assets/all/ri-2.jpg.webp";
import ri_3 from "@/assets/all/ri-3.jpg.webp";

export interface Blog {
  id: number;
  title: string;
  date: string;
  total_comment: number;
  text: string;
  details: string;
  author: string;
  tag: string[];
  image: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "What Makes Users Want to Share a Video on Social Media?",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: ri_1.src,
  },
  {
    id: 2,
    title: "Bumper Ads: How to Tell a Story in 6 Seconds",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details: `<p>Videos with a wow factor are always more shareable than those without it. The wow factor
      is hard to define, but it generally refers to any content that makes viewers think,
      “Wow!” For example, consider those viral videos of athletes making insanely difficult
      basketball trick shots, such as shooting a basket while doing a backwards flip on a
      trampoline.</p>
      <p class="mt-5">That’s the kind of catchy content that makes people want to share it with their friends.
      With a little clever marketing, you can put that wow factor to work for your business’
      videos.</p>

      <div class="blog__details__quote">
<p>Create horizontal, square and vertical videos that are ready to be exported to your
Instagram video stories and posts. Perfect for any social network!</p>
<h6>Max Desmarais</h6>
</div>

      <p class="mt-5">Create horizontal, square and vertical videos that are ready to be exported to your
      Instagram video stories and posts. Perfect for any social network!</p>
      <p class="mt-5">An average Internet user watches about 1.5 hours of online video every day. This means
      that video can be a powerful marketing tool for getting your message before the eyes of
      millions of people. However, not all videos are created equal.</p>
      <p class="mt-5">Some of them are inherently more shareable on social media than others. Here’s a quick
      look at how to make users want to share your videos on social media.</p>
   `,
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: ri_2.src,
  },
  {
    id: 3,
    title: "Recruitment Marketing for the Digital Age: A Definitive Guide",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: ri_3.src,
  },
  {
    id: 4,
    title: "Recruitment Marketing for the Digital Age: A Definitive Guide",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 5,
    title: "Recruitment Marketing for the Digital Age: A Definitive Guide",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 6,
    title: "Say Bonjour! Ola! & Guten Tag! to Our New Team Members",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 7,
    title: "Pay-Per-Click Marketing: A ‘Nuts & Bolts’ Guide",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 8,
    title: "Vital Launches New University Website Design for",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 9,
    title: "How and When to Write a Press Release: Best Practices.",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
  {
    id: 10,
    title: "What Makes Users Want to Share a Video on Social Media?",
    date: "Jan 03, 2020",
    total_comment: 5,
    text: "We recently launched a new website for a Vital client and wanted to share some of the cool features we were able",
    details:
      "Videos with a wow factor are always more shareable than those without it. The wow factor is hard to define, but it generally refers to any content that makes viewers think, “Wow!” For example, consider those viral videos of athletes making insanely difficult basketball trick shots, such as shooting a basket while doing a backwards flip on a trampoline. That’s the kind of catchy content that makes people want to share it with their friends. With a little clever marketing, you can put that wow factor to work for your business’ videos.",
    author: "Md kabir udidn",
    tag: ["Wedding", " Event", "Couple"],
    image: img.src,
  },
];
