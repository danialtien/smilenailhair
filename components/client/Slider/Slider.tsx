"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const slides = [
    {
        id: 1,
        title: "Excellent nail services",
        description: "We provide the best nail services",
        img: "/assets/Features/featurenail.jpg",
        url: "/",
        bg: " bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Hair style",
        description: "Make your hair more beautiful",
        img: "/assets/Features/featurehair.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Makeup",
        description: "Up to 50% off!",
        img: "/assets/Features/featuremakeup.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
        id: 4,
        title: "Spa",
        description: "Relax and enjoy the best spa services",
        img: "/assets/Features/featurespa.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-[calc(100vh-80px)] overflow-hidden'>
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {slides.map((slide, index) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full items-center flex flex-col justify-center gap-8 2xl:gap-15 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.title}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.description}</h1>
                            <Link href={slide.url}>
                                <button className='bg-black text-white ring-1 ring-gray-500 py-3 px-4 rounded-md'>BOOK NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full items-center flex justify-center">
                        <Image 
                                src={slide.img} 
                                alt='' 
                                width={0}
                                height={0} 
                                sizes='100%' 
                                className='object-cover rounded-xl xl:shadow-xl 2xl:shadow-2xl' 
                                style={{ width: '100%', height: '90%' }}
                            />
                        </div>
                        <div className=""></div>
                    </div>
                ))}
            </div>
            <div className='absolute m-auto left-1/2 bottom-3 flex gap-4'>
                {slides.map((slide, index) => (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}>
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Slider