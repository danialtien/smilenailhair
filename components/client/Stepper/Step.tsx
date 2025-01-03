import { Fragment } from "react";

interface StepProps {
  step: {
    number: number;
    title?: string;
  };
  isActive?: boolean;
}

export default function Step({ step, isActive = false }: StepProps) {
  return (
    <Fragment>
      <li
        className={`flex md:w-full items-center ${isActive && "text-pink-600"} after:w-full after:h-1 after:border-b after:border-base after:border-1 after:hidden sm:after:inline-block after:mx-4 dark:after:border-gray-700`}
      >
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {/* <MdOfflinePin size={22} className="mr-1" /> */}
          <span
            className={`w-4 h-4 flex items-center justify-center me-2 rounded-full border-2 ${isActive && "bg-pink-100 border-pink-600"}`}
          >
            <span
              className={`text-sm font-bold ${isActive && "text-pink-600"}`}
            >
              {step.number}
            </span>
          </span>
          {step.title + " "}
          <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      {/* <li className="flex md:w-full items-center text-pink-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"> */}
      {/*   <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"> */}
      {/*     <span className="me-2">2</span> */}
      {/*     Account <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
      {/*   </span> */}
      {/* </li> */}
      {/* <li className="flex items-center"> */}
      {/*   <span className="me-2">4.</span> */}
      {/*   Confirmation */}
      {/* </li> */}
    </Fragment>
  );
}
