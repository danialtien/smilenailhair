"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Disclosure } from "@headlessui/react";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/customer/home", current: true },
  { name: "Services", href: "/customer/services", current: false },
  { name: "Booking Now", href: "/customer/booking-now", current: false },
  { name: "Gallery", href: "/customer/gallery", current: false },
  { name: "Contact", href: "/customer/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar bg-base">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center border-right">
                {/* <Image */}
                {/*   src="/assets/Logo/SmileNailHairLogo.png" */}
                {/*   alt="Logo" */}
                {/*   width={120} */}
                {/*   height={120} */}
                {/* /> */}
                {/* <Link */}
                {/*   href="/" */}
                {/*   className="text-xl font-semibold text-black ml-4" */}
                {/* > */}
                {/*   Smile Nail & Hair. */}
                {/* </Link> */}

                <Link href="/">
                  <Image
                    src="/assets/Logo/SmileNailHairLogo.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    priority={false}
                    className="w-[120px] h-[120px]"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="">
                <div className="">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-orange-100 opacity-100"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="gap-6 hidden lg:flex">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Navbar/phone.svg"
                    alt="phone-image"
                    width={19}
                    height={19}
                  />
                  <p className="text-lg font-medium">+1(909) 235-9814</p>
                </div>
                <Link href="../../../sign-in">
                  <button className="flex justify-end text-xl font-semibold bg-pink-200 py-4 px-4 lg:px-8 navbutton rounded-full hover:bg-pink-300">
                    Sign in
                  </button>
                </Link>
                {/* <Signindialog /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
