import { Fragment } from "react";

interface StepProps {
  step: {
    number: number;
    title?: string;
  };
  isActive?: boolean;
  isLastStep?: boolean;
}

export default function Step({
  step,
  isActive = false,
  isLastStep = false,
}: StepProps) {
  return (
    <Fragment>
      <li
        className={`flex items-center ${isActive && "text-pink-600"} ${isLastStep ? "w-2/5" : "w-full after:inline-block after:w-full after:h-1 after:border-b after:border-base after:border-1 after:mx-2"}`}
      >
        <span className="flex flex-col gap-1 w-full items-center after:content-['/'] sm:after:hidden after:mx-2">
          {/* <MdOfflinePin size={22} className="mr-1" /> */}
          <span
            className={`w-6 h-6 flex items-center justify-center me-2 rounded-full border-2 ${isActive ? "bg-pink-100 border-pink-600" : "border-base"}`}
          >
            <span
              className={`text-sm font-bold ${isActive && "text-pink-600"}`}
            >
              {step.number}
            </span>
          </span>
          <span className={`w-full ${isActive && "font-semibold"}`}>
            {step.title} Info
          </span>
        </span>
      </li>
    </Fragment>
  );
}
