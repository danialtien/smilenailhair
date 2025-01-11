"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { ChevronRightIcon } from "lucide-react";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/featurenail.jpg",
    heading: "Nail beauty",
    subheading: "Professional nail care services",
    link: "/customer/booking-now",
  },
  {
    imgSrc: "/images/Features/featurehair.jpg",
    heading: "Hair style",
    subheading: "Professional hair care services",
    link: "/customer/booking-now",
  },
  {
    imgSrc: "/images/Features/featuremakeup.jpg",
    heading: "Makeup",
    subheading: "Professional makeup services",
    link: "/customer/booking-now",
  },
  {
    imgSrc: "/images/Features/featurespa.jpg",
    heading: "Spa",
    subheading: "Professional spa services",
    link: "/customer/booking-now",
  },
];

export default function Services() {
  return (
    <div className="px-10" id="about-section">
      <div className="text-center">
        <Fade
          direction={"up"}
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
            Services
          </h3>
        </Fade>
        <Fade
          direction={"up"}
          delay={800}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <p className="text-2xl lg:text-3xl font-semibold text-lightgrey pb-5">
            Get a many of interesting  services.
          </p>
        </Fade>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
        <Fade
          direction={"up"}
          delay={1000}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          {cardData.map((items, i) => (
            <div className="p-3 ring ring-gray-500 rounded-xl " key={i}>
              <div className="w-full h-2/3 justify-center">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={510}
                  height={300}
                  style={{ width: "100%", height: "300px" }}
                  className="rounded-xl"
                />
              </div>
              <div className="w-full h-1/3 justify-center items-center text-center">
                <h3 className="text-xl text-black font-semibold text-center mt-5">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 my-3">
                  {items.subheading}
                </p>
                <div className="flex items-center justify-center">
                  <Link href={items.link}>
                    <button className='bg-black text-white ring-1 ring-gray-500 py-3 px-4 rounded-md'>BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
