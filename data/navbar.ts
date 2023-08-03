type mainNavbarItem = {
  id: number;
  name: string;
  href: string;
  isDropdown?: boolean;
};
type dropdownNavbarItem = {
  id: number;
  name: string;
  href: string;
};

export const main_navbar_items: mainNavbarItem[] = [
  {
    id: 1,
    name: "home",
    href: "/",
  },
  {
    id: 2,
    name: "about",
    href: "/about",
  },
  {
    id: 3,
    name: "portfolio",
    href: "/portfolio",
  },
  {
    id: 4,
    name: "service",
    href: "/service",
  },
  {
    id: 5,
    name: "pages",
    href: "#",
    isDropdown: true,
  },
  {
    id: 6,
    name: "contact",
    href: "/contact",
  },
];
export const dropdown_items: dropdownNavbarItem[] = [
  {
    id: 1,
    name: "about",
    href: "/about",
  },
  {
    id: 2,
    name: "portfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    name: "blog",
    href: "/blog",
  },
];
