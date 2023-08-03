import icon_1 from "@/assets/icons/ci-1.png";
import icon_2 from "@/assets/icons/ci-2.png";
import icon_3 from "@/assets/icons/ci-3.png";
import icon_4 from "@/assets/icons/ci-4.png";

interface Service_props {
  id: number;
  icon: string;
  title: string;
  details: string;
}

export const services: Service_props[] = [
  {
    id: 1,
    icon: icon_1.src,
    title: "Scriptwriting and editing",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
  {
    id: 2,
    icon: icon_2.src,
    title: "Motion graphics",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
  {
    id: 3,
    icon: icon_3.src,
    title: "Scriptwriting and editing",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
  {
    id: 4,
    icon: icon_4.src,
    title: "Video distribution",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
  {
    id: 5,
    icon: icon_3.src,
    title: "Video hosting",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
  {
    id: 6,
    icon: icon_4.src,
    title: "Video hosting",
    details:
      "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.",
  },
];
