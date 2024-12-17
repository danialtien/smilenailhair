"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Disclosure } from '@headlessui/react';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'Booking Now', href: '/booking-now', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    // const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar web-header">
            <>
                {/* Web customer menu */}
                {/* Logo */}
                <div className="">
                    <Image src="/images/Logo/SmileNailHairLogo.png" alt="Logo" width={36} height={36} />
                    <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                        Smile Nail & Hair.
                    </Link>
                </div>

                {/* Navigation */}
                <div className="">
                    <div className="">
                        {navigation.map((item) => (
                            <Link key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-black' : 'navlinks hover:opacity-100', 
                                    'px-3 py-4 rounded-md text-lg'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile customer menu */}

            </>
        </Disclosure>
    )
}

export default Navbar;