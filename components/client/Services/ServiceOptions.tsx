import { Service } from "@/model/Service";
import React, { Fragment } from "react";

interface ServiceOptionsProps {
  data: Service;
  isSelected?: boolean;
  onPress?: () => void;
}

function ServiceOptions({ data }: ServiceOptionsProps) {
  const { id, name, price, duration, timeUnit, description, type, image } =
    data;

  return (
    <Fragment>
      <div className="p-4 ring ring-gray-500 rounded-xl">
        <span className="float-end rounded-md px-4 py-1 -my-3 -mx-3 text-[#ba9367] font-bold">
          {type}
        </span>
        <div className="">
          <h4 className="text-xl font-semibold text-lightgrey">{name}</h4>
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-normal text-black text-opacity-50">
              {duration} {timeUnit}
            </p>
            <p className="text-lg font-xl font-semibold text-black text-opacity-50">
              {price}$
            </p>
          </div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ServiceOptions;
