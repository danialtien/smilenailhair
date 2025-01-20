"use client";

import SearchBar from "@/components/client/SearchBar/SearchBar";
import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@/model/Category";
import { Service } from "@/model/Service";
import Image from "next/image";
import { useState } from "react";

const categories: Category[] = [
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
        description: "",
        type: "Hairdresser",
      },
      {
        id: 2,
        name: "Classic manicure",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",

      },
      {
        id: 3,
        name: "Express Manicure",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",
      },
      {
        id: 4,
        name: "Spa Manicure",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Hairdresser",
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
        description: "",
        type: "Henna",
      },
      {
        id: 2,
        name: "Hair coloring",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
      },
      {
        id: 3,
        name: "Hair treatment",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
      },
      {
        id: 4,
        name: "Hair styling",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Henna",
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
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 2,
        name: "Makeup",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 3,
        name: "Makeup",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
      },
      {
        id: 4,
        name: "Makeup",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Eyelash extensions",
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
        description: "",
        type: "Spa",
      },
      {
        id: 2,
        name: "Spa",
        price: 30,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
      {
        id: 3,
        name: "Spa",
        price: 15,
        duration: 30,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
      {
        id: 4,
        name: "Spa",
        price: 25,
        duration: 45,
        timeUnit: "minutes",
        description: "",
        type: "Spa",
      },
    ],
  },
];

const services: Service[] = [
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

interface checkCatIdProps {
  id: number;
}

export default function ServicePage() {
  const [seachQuery, setSearchQuery] = useState("");

  const handleSearch = (name: string) => {
    setSearchQuery(name);
  };

  const [checkedCatId, setCheckedCatId] = useState<checkCatIdProps[]>([
    { id: 0 },
  ]);

  function updateCheckedId(id: number) {
    checkedCatId?.map((item) => {
      if (item.id === id) {
        setCheckedCatId(checkedCatId.filter((item) => item.id !== id));
      } else {
        setCheckedCatId([...checkedCatId, { id }]);
      }
    });
  }
  function filterServices() {
    var filteredServices = [];

    if (checkedCatId.length === 1 && checkedCatId[0].id === 0) {
      return categories.flatMap((category) => category.services);
    }

    filteredServices = categories
      .filter((category) =>
        checkedCatId.some((checked) => checked.id === category.id),
      )
      .flatMap((category) => category.services);

    if (seachQuery !== "") {
      filteredServices = categories
        .flatMap((category) => category.services)
        .filter((service) =>
          service.name.toLowerCase().includes(seachQuery.toLowerCase()),
        );
    }

    return filteredServices;
  }

  return (
    <div className="flex">
      {/* SISEBAR */}
      <div className="">
        <div className="flex flex-col items-center w-96 bg-white h-screen border-r">
          <h1 className="font-light text-2xl text-center mt-10 mb-5">
            Our services
          </h1>
          <ul>
            <li key={0} className="flex items-center gap-2 p-2">
              <Checkbox id="0" checked={checkedCatId.some((x) => x.id === 0)} />
              <label
                htmlFor="all"
                className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </li>
            {categories.map((category, i) => (
              <li key={category.id} className="flex items-center gap-2 p-2">
                <Checkbox
                  id={category.id.toString()}
                  onClick={() => updateCheckedId(category.id)}
                />
                <label
                  htmlFor={category.id.toString()}
                  className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MAIN */}
      <div className="p-10 flex flex-col gap-8 w-full">
        <div className="text-center">
          <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
            Services
          </h3>
          <p className="text-2xl lg:text-3xl font-semibold text-lightgrey pb-5">
            Get a many of interesting services.
          </p>
        </div>
        {/* SEARCH */}
        <div className="w-1/2 mx-auto">
          <SearchBar url="/customer/services" onSearch={handleSearch} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
          {filterServices().map((service, i) => (
            <div
              className="p-4 ring ring-gray-500 rounded-xl "
              key={service.id}
            >
              <span className="float-end rounded-md px-4 py-1 -my-3 -mx-3 text-[#ba9367] font-bold">{service.type}</span>
              <div className="">
                <h4 className="text-xl font-semibold text-lightgrey">
                  {service.name}
                </h4>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-lg font-normal text-black text-opacity-50">
                    {service.duration} {service.timeUnit}
                  </p>
                  <p className="text-lg font-xl font-semibold text-black text-opacity-50">
                    {service.price}$
                  </p>
                </div>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
