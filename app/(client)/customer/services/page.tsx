"use client";

import SearchBar from "@/components/client/SearchBar/SearchBar";
import { Checkbox } from "@/components/ui/checkbox";
import { ICategory } from "@/model/Category/ICategory";
import { IService } from "@/model/Services/IService";
import Image from "next/image";
import { useState } from "react";

export const categories: ICategory[] = [
  {
    id: 1,
    title: "Nail",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Express Pedicure",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Classic manicure",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Express Manicure",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Spa Manicure",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 2,
    title: "Hair",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Haircut",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Hair coloring",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Hair treatment",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Hair styling",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 3,
    title: "Makeup",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Makeup",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Makeup",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Makeup",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Makeup",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
  {
    id: 4,
    title: "Spa",
    avatar: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
    services: [
      {
        id: 1,
        name: "Spa",
        price: 20,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 2,
        name: "Spa",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
      },
      {
        id: 3,
        name: "Spa",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
      },
      {
        id: 4,
        name: "Spa",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
      },
    ],
  },
];

export const services: IService[] = [
  {
    id: 1,
    name: "Express Pedicure",
    price: 20,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 2,
    name: "Classic manicure",
    price: 30,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 3,
    name: "Express Manicure",
    price: 15,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 4,
    name: "Express Pedicure",
    price: 20,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 5,
    name: "Classic manicure",
    price: 30,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 6,
    name: "Express Manicure",
    price: 15,
    duration: 30,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
  {
    id: 6,
    name: "Spa Manicure",
    price: 25,
    duration: 45,
    timeUnit: "minutes",
    type: "Nail",
    image: "https://images.unsplash.com/photo-1731484636405-35018e2a8a86",
  },
];

export default function ServicePage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      {/* SISEBAR */}
      <div className="">
        <div className="flex flex-col items-center w-96 bg-white h-screen border-r">
          <h1 className="font-light text-2xl text-center mt-10 mb-5">Our services</h1>
          <ul>
            <li className="flex items-center gap-2 p-2">
              <Checkbox id="all" />
              <label htmlFor="all" className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                All
              </label>
            </li>
            {categories.map((category, i) => (
              <li className="flex items-center gap-2 p-2">
                <Checkbox id={category.id.toString()} />
                <label htmlFor={category.id.toString()} className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {category.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>



      {/* MAIN */}
      <div className="p-10 flex flex-col gap-8">
        <div className="text-center">
          <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
            Services
          </h3>
          <p className="text-2xl lg:text-3xl font-semibold text-lightgrey pb-5">
            Get a many of interesting  services.
          </p>
        </div>
        {/* SEARCH */}
        <div className="w-1/2 mx-auto">
          <SearchBar />
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
          {services.map((service, i) => (
            <div className="p-3 ring ring-gray-500 rounded-xl " key={i}>
              <div className="w-full h-2/3 justify-center">
                <Image src={service.image || "/assets/Banner/thumnail.jpg"} alt={service.name} width={400} height={200} className="rounded-xl" />
              </div>
              <div className="mt-5">
                <h4 className="text-xl font-semibold text-lightgrey">
                  {service.name}
                </h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
