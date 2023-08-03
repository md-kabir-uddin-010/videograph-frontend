import ta_1 from "@/assets/about/ta-1.jpg.webp";
import ta_2 from "@/assets/about/ta-2.jpg.webp";
import ta_3 from "@/assets/about/ta-3.jpg.webp";

interface Slides {
  id: number;
  text: string;
  user: {
    name: string;
    profession: string;
    avater: string;
  };
}

export const testimonial_slides: Slides[] = [
  {
    id: 1,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_1.src,
    },
  },
  {
    id: 2,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_2.src,
    },
  },
  {
    id: 3,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_3.src,
    },
  },
  {
    id: 4,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_1.src,
    },
  },
  {
    id: 5,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_2.src,
    },
  },
  {
    id: 6,
    text: "Videographer delivers such a great service that it can benefit all kinds of people from any number.",
    user: {
      name: "Krista Attorn",
      profession: "Web Designer",
      avater: ta_3.src,
    },
  },
];
