import Link from "next/link";
import React from "react";
import Image from "next/image";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import NavIcons from "../NavIcons/NavIcons";

interface IMenuFields {
  id: number;
  title: string;
  url: string;
  current: boolean;
}

const MenuFields: IMenuFields[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    current: false,
  },
  {
    id: 2,
    title: "Service",
    url: "/",
    current: false,
  },
  {
    id: 3,
    title: "Booking Now",
    url: "/customer/booking-now",
    current: true,
  },
  {
    id: 4,
    title: "Gallery",
    url: "/",
    current: false,
  },
  {
    id: 5,
    title: "Contact",
    url: "/",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavbarCustom = () => {
  return (
    <div className="h-20 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 relative bg-base ">
      <div className="h-full flex items-center justify-between md:hidden text-white">
        {/* MOBILE */}
        <Link href="/">
          <div className="text-sm tracking-wide">Smile Nail & Hair.</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex justify-between items-center gap-8  text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/Logo/SmileNailHairLogo.png"
              alt=""
              width={69}
              height={69}
            />
            <div className="text-lg tracking-wide">Smile Nail & Hair.</div>
          </Link>
          <div className="hidden xl:flex gap-4 items-center text-white">
            {MenuFields.map((item) => (
              <Link
                className={classNames(
                  item.current ? "bg-orange-100 text-black" : "navlinks",
                  "p-3 text-lg space-links hover:rounded-md hover:text-black hover:bg-orange-100"
                )}
                href={item.url}
                key={item.id}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default NavbarCustom;
