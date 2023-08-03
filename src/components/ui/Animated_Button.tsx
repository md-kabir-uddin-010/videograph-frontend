import Link from "next/link";

interface Porps {
  text: string;
  href: string;
}

export default function Animated_Button({ text, href }: Porps) {
  return (
    <Link
      href={href}
      className=" outline-none primary-btn md-800px:tracking-[0.1em]"
    >
      {text}
    </Link>
  );
}
