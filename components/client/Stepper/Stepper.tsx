"use client";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepFinal from "./StepFinal";
import { useMultistepFormContext } from "@/app/(client)/customer/booking-now/multistep-form-context";
import {
  InputBookingServiceData,
  inputBookingServiceSchema,
} from "@/model/bookingServiceModel";

let stepA = "Apointment";
let stepB = "Account";
let stepC = "Service";
const stepList: string[] = [stepA, stepB, stepC];

export default function Stepper() {
  const { toast } = useToast();
  const [step, setStep] = useState(stepA);

  // Form steup
  const { formData, updateFormData, clearFormData } = useMultistepFormContext();
  const form = useForm({
    resolver: zodResolver(inputBookingServiceSchema),
    defaultValues: {
      ...formData,
      id: ++formData.id
    },
  });

  useEffect(() => {
    console.log("Current step: "+ step);
    clearFormData();
  }, [])

  function handleNextStep(data: Partial<InputBookingServiceData>) {
    updateFormData(data);
    if (step === stepA) {
      setStep(stepB);
    } else if (step === stepB) {
      setStep(stepC);
    }
    console.log("step: "+ step);
  }

  function handlePrevStep(data: Partial<InputBookingServiceData>) {
    updateFormData(data);
    if (step === stepC) setStep(stepB);
    else if (step === stepB) setStep(stepA);
    console.log("step: "+ step);
  }

  // We need a method to update our formData
  // function handleChangeInput(event) {
  //   const fieldName = event.target.name;
  //   let fieldValue;
  //   if (fieldName === 'agreeToTerms') {
  //     fieldValue = event.target.checked;
  //   } else {
  //     fieldValue = event.target.value;
  //   }
  //   setFormData({
  //     ...formData,
  //     [fieldName]: fieldValue,
  //   });
  // }

  function onSubmit(values: Partial<InputBookingServiceData>) {
    setStep("Final");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-50 p-4">
          <code className="text-pink-900">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>
      ),
    });
    clearFormData();
  }

  function renderTopStep() {
    if (step === "Final") return null;

    return (
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {stepList.map((item, index) => (
          <li
            key={item}
            className={`flex md:w-full items-center ${item === step ? "text-pink-600" : ""} after:w-full after:h-1 after:border-b after:border-base after:border-1 after:hidden sm:after:inline-block after:mx-4 dark:after:border-gray-700`}
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              {/* <MdOfflinePin size={22} className="mr-1" /> */}
              <span className="me-2">{++index}.</span>
              {item + " "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
        ))}
        {/* <li className="flex md:w-full items-center text-pink-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"> */}
        {/*   <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"> */}
        {/*     <span className="me-2">2</span> */}
        {/*     Account <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
        {/*   </span> */}
        {/* </li> */}
        <li className="flex items-center">
          <span className="me-2">4.</span>
          Confirmation
        </li>
      </ol>
    );
  }

  return (
    <div className="w-2/5 flex flex-col items-center justify-center gap-5">
      {renderTopStep()}
      {step === stepA ? (
        <StepA formData={form} handleNextStep={handleNextStep} />
      ) : null}
      {step === stepB ? (
        <StepB
          formData={form}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === stepC ? (
        <StepC
          formData={form}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "Final" ? <StepFinal /> : null}
    </div>
  );
}
"https://github.com/eduardogomesf/multi-step-form"