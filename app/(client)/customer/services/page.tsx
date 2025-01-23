"use client";

import SearchBar from "@/components/client/SearchBar/SearchBar";
import ServiceInfoBooking from "@/components/client/Services/ServiceInfoBooking";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import CATEGORIES from "@/model/data/categories.json";
import ServiceOptions from "@/components/client/Services/ServiceOptions";

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
    setCheckedCatId((prevCheckedCatId) => {
      if (id === 0) {
        // If "All" is selected, remove all other ids
        return [{ id: 0 }];
      } else {
        // If any other id is selected, remove "All" and toggle the selected id
        const newCheckedCatId = prevCheckedCatId.filter(
          (item) => item.id !== 0
        );
        if (newCheckedCatId.some((item) => item.id === id)) {
          return newCheckedCatId.filter((item) => item.id !== id);
        } else {
          return [...newCheckedCatId, { id }];
        }
      }
    });
    // checkedCatId?.map((item) => {
    //   if (item.id === id) {
    //     setCheckedCatId(checkedCatId.filter((item) => item.id !== id));
    //   } else {
    //     setCheckedCatId([...checkedCatId, { id }]);
    //   }
    // });
  }

  function filterServices() {
    let filteredServices = [];

    if (checkedCatId[0].id === 0) {
      filteredServices = CATEGORIES.flatMap((category) => category.services);
    }
    else if (seachQuery !== "") {
      filteredServices = CATEGORIES.flatMap((category) => category.services).filter(
        (service) =>
          service.name.toLowerCase().includes(seachQuery.toLowerCase())
      );
    }
    else {
    filteredServices = CATEGORIES.filter((category) =>
      checkedCatId.some((checked) => checked.id === category.id)
    ).flatMap((category) => category.services);
  }

    return filteredServices.map(service => ({
      ...service,
      uniqueKey: `${service.id}-${Math.random()}` // Generate a unique key
    }));
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
            <li className="flex items-center gap-2 p-2">
              <Checkbox
                id="all"
                checked={checkedCatId.some((x) => x.id === 0)}
                onClick={() => updateCheckedId(0)}
              />
              <label
                htmlFor="all"
                className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </li>
            {CATEGORIES.map((category) => (
              <li key={category.id} className="flex items-center gap-2 p-2">
                <Checkbox
                  id={category.id.toString()}
                  checked={checkedCatId.some((x) => x.id === category.id)}
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
          {filterServices().map((service) => (
            <ServiceOptions key={service.uniqueKey} data={service} />
          ))}
        </div>
      </div>

      {/* Design Booking Service */}
      <ServiceInfoBooking />
    </div>
  );
}
