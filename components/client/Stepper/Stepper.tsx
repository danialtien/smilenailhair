"use client";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";

const stepList: string[] = ["A", "B", "C", "D"];

const FormSchema = z.object({
  userName: z.string().min(2).max(50),
  country: z
    .string({
      required_error: "Please select your country",
    })
    .email(),
});

export default function Stepper() {
  const { toast } = useToast();

  // Form data
  const bookingServiceFormData = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
    },
  });

  const [step, setStep] = useState("A");

  function handleNextStep() {
    if (step === "A") setStep("B");
    else if (step === "B") setStep("C");
    else if (step === "C") setStep("D");
  }

  function handlePrevStep() {
    if (step === "D") setStep("C");
    else if (step === "C") setStep("B");
    else if (step === "B") setStep("A");
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

  function onSubmit(values: z.infer<typeof FormSchema>) {
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
  }

  function renderTopStep() {
    if (step === "Final") return null;

    return (
      <ol className="flex items-center w-2/5 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {stepList.map((item) => (
          <li
            key={item}
            className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
          >
            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Personal{" "}
              <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            </span>
          </li>
        ))}
        {/* <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"> */}
        {/*   <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"> */}
        {/*     <span className="me-2">2</span> */}
        {/*     Account <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
        {/*   </span> */}
        {/* </li> */}
      </ol>
    );
  }

  return (
    <div className="">
      {renderTopStep()}
      {step === "A" ? (
        <StepA
          formData={bookingServiceFormData}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === "B" ? (
        <StepB
          formData={bookingServiceFormData}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "C" ? (
        <StepC
          formData={bookingServiceFormData}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "D" ? (
        <StepD
          formData={bookingServiceFormData}
          handlePrevStep={handlePrevStep}
        />
      ) : null}
      {step === "Final" ? <StepFinal /> : null}
    </div>
  );
}
