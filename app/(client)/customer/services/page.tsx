"use client";

import SearchBar from "@/components/client/SearchBar/SearchBar";
import { Checkbox } from "@/components/ui/checkbox";
import { categories } from "@/model/Category/CategoryData";
import Image from "next/image";
import { useState } from "react";

interface checkCatIdProps {
  id: number;
};

export default function ServicePage() {

  const [seachQuery, setSearchQuery] = useState('');

  const handleSearch = (name: string) => {
    setSearchQuery(name);
  }

  const [checkedCatId, setCheckedCatId] = useState<checkCatIdProps[]>([
    { id: 0 },
  ]);

  function updateCheckedId(id: number) {
    checkedCatId?.map((item) => {
      if (item.id === id) {
        setCheckedCatId(checkedCatId.filter((item) => item.id !== id));
      }
      else {
        setCheckedCatId([...checkedCatId, { id }]);
      }
    })
  }
  function filterServices() {
    var filteredServices = [];

    if (checkedCatId.length === 1 && checkedCatId[0].id === 0) {
      return categories.flatMap(category => category.services);
    }

    filteredServices = categories
      .filter(category => checkedCatId.some(checked => checked.id === category.id))
      .flatMap(category => category.services);

    if (seachQuery !== '') {
      filteredServices = categories.flatMap(category => category.services)
      .filter(service => service.name.toLowerCase().includes(seachQuery.toLowerCase()));
    }

    return filteredServices;
  }

  return (
    <div className="flex">
      {/* SISEBAR */}
      <div className="">
        <div className="flex flex-col items-center w-96 bg-white h-screen border-r">
          <h1 className="font-light text-2xl text-center mt-10 mb-5">Our services</h1>
          <ul>
            <li className="flex items-center gap-2 p-2">
              <Checkbox id="0" checked={checkedCatId.some(x => x.id === 0)} />
              <label htmlFor="all" className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                All
              </label>
            </li>
            {categories.map((category, i) => (
              <li className="flex items-center gap-2 p-2">
                <Checkbox id={category.id.toString()} onClick={() => updateCheckedId(category.id)} />
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
          <SearchBar url='/customer/services' onSearch={handleSearch} />
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
          {filterServices().map((service, i) => (
            <div className="p-4 ring ring-gray-500 rounded-xl " key={service.id}>
              <Image src={service.image || "/assets/Banner/thumnail.jpg"} alt={service.name} width={400} height={200} className="rounded-xl mx-auto h-[200px]" />
              <div className="mt-5">
                <h4 className="text-xl font-semibold text-lightgrey">
                  {service.name}
                </h4>
                <div className="flex items-center justify-between mt-3">
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
