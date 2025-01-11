"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import CardModel from '../CardModel/CardModel';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    setIsProfileOpen(!isProfileOpen);
  }

  return (
    <div className='flex justify-center items-center gap-3 xl:gap-6 relative'>
      <Image src="/images/profile.png"
       alt=""
       width={24}
       height={24}
       className="cursor-pointer"
       onClick={handleProfile} />
      {isProfileOpen && <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
        <div>Profile</div >
        <div className=''>Logout</div>
      </div>

      }
      <Image src="/images/notification.png" alt=''
        width={24}
        height={24}
        className='cursor-pointer' />
      <div className='relative cursor-pointer'>
        <Image src="/images/cart.png" alt=''
          width={24}
          height={24}
          className='cursor-pointer'
          onClick={() => setIsCartOpen((prev) => !prev)} />
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full items-center justify-center text-white text-sm flex'>2</div>
      </div>
      {isCartOpen && <CardModel />}
    </div>
  )
}

export default NavIcons