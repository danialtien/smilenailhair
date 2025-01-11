"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuFields = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Service',
        url: '/'
    },
    {
        id: 3,
        title: 'Booking Now',
        url: '/'
    },
    {
        id: 4,
        title: 'Gallery',
        url: '/'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/'
    },
    {
        id: 6,
        title: 'Logout',
        url: '/'
    },
    {
        id: 7,
        title: 'Cart(1)',
        url: '/'
    }
];
const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Image src="/images/menu.png"
                alt=''
                width={28}
                height={28}
                className='cursor-pointer'
                onClick={() => setOpen((prev) => !prev)} />
            {open && (
                <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center gap-8 text-xl z-10 items-center'>
                    {MenuFields.map((item) => (<>
                        <Link className='hover:bg-orange-100 space-links' href={item.url} key={item.id}>{item.title}</Link>
                    </>))}
                </div>
            )}
        </div>
    )
}

export default Menu